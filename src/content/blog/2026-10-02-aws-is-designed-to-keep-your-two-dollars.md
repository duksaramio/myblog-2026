---
title: "AWS Is Designed to Keep Your Two Dollars"
pubDate: 2026-10-02
description: "I've paid AWS $1.89 a month for three years for resources I don't use. That's not a bug in the console — it's the business model."
draft: false
tags: ["aws", "cloud", "cloudflare", "dark-patterns", "billing", "ux", "infrastructure"]
---

I stopped using AWS a while back. Almost everything I run now is on Cloudflare. The AWS account is the last vestige of an earlier life.

But every month since then, AWS has charged me a tiny amount. $1.89 this month. Small enough that for three years I never bothered to look into it. This month I decided to get to the bottom of it, so I logged into the console.

Then I remembered why I left.

## Finding Things Is Losing Things

The AWS console is horrible by design. Finding something so you can terminate or delete it takes real work, spread across layers of dropdowns and three-dot menus, with the click you need sitting somewhere you didn't think to look.

You can argue: "if deleting were easy, people would wipe out production by accident." That's not the reason. The console makes me type "delete" to confirm in everything. It knows exactly how to make destruction deliberate. The friction isn't installed to protect me — it's in the navigation, before I ever get near the confirm box.

And you have to get the region exactly right, because a resource in us-west-2 does not exist in us-east-1 no matter how hard you stare at the search bar. For some services it's worse than that. There's a sequence. Terminate the load balancer before the instances, not after. Tear down the Elastic Beanstalk environment before you delete the resources it created, or it puts them back. AWS's own documentation walks you through the order with a straight face.

## What My $1.89 Actually Is

![AWS invoice for the billing period September 1 - September 30, 2026 showing total charges of USD 1.89, with AWS Key Management Service at USD 1.00 and CloudTrail, Glue and Data Transfer at USD 0.00](/aws-is-designed-to-keep-your-two-dollars-invoice.png)

Here's the invoice. CloudTrail: $0.00. AWS Key Management Service: $1.00. Glue: $0.00. Data Transfer: $0.00. The itemized detail adds up to one dollar. The invoice says I owe $1.89, and the other 89 cents aren't itemized anywhere on that page. Either there's a line somewhere else or the page doesn't reconcile — whatever it is, I can't account for my own bill using the bill AWS sent me.

The line that matters is the KMS one. One dollar per key per month, prorated hourly, whether anything in my account uses that key or not. That's the entire charge. A key I created once, years ago, for something I no longer run, billing me until the end of time.

It isn't just KMS. There's a whole roster of resources that bill by existing:

- **KMS keys** — $1 per key per month. Create a key, forget it, pay forever.
- **Secrets Manager** — $0.40 per secret per month, flat, no volume discount, no discount for unused.
- **Public IPv4 addresses** — $0.005 per hour, about $3.60 a month. Since February 2024 that rate applies whether the address is attached to a service or not, and an address you allocated and never attached was already billing before that.
- **A load balancer with no healthy targets** — around $16 a month to sit there serving nothing.
- **EBS volumes, snapshots, NAT gateways, stopped RDS instances** — the compute pauses, the bill doesn't.

AWS prints its own confession in the docs. On the free tier page: "Even if you aren't regularly signing in to your account, you might have active resources running." On the page about unexpected charges: "If you close your account or unsubscribe from a service, make sure that you take the appropriate steps for every AWS Region you've allocated AWS resources."

That second sentence is the design. Resources bill by default, forever. Stopping them is a multi-step, region-scoped, sequence-ordered teardown. Every step is a place where you can quietly fail, and if you fail, that's another month of revenue.

## The Math AWS Is Running

Nickel-and-diming only looks petty from the wrong side of the decimal point. Take one million users who left AWS and left something behind, get two dollars a month out of each of them, and that's two million dollars a month. Twenty-four million a year, arriving from people who stopped using the product.

AWS reported a $169 billion annualized run rate in Q2 2026. Twenty-four million is 0.014% of that. It's a rounding error on a line item in a footnote. Which is the entire point: the amount is too small for anyone at AWS to fix the teardown flow over, and too small for me to open a support ticket over. It costs less to pay than to fight. And it's real money in aggregate, because there is no shortage of accounts like mine.

Closing the account isn't a clean exit either. You still get a final bill for the part of the month you used. Marketplace subscriptions don't cancel on account closure — you have to terminate those yourself, first. Any services still sitting in the account restart billing if you ever reopen it.

Two dollars is below the threshold where I'd bother, and the friction is above it. That's not an accident of a sprawling product. That's a price point.

## "Well, Just Delete It"

You can. That's the honest answer, and it's the reason this is a strategy rather than a scam. It's just tedious enough that most people won't.

What finally worked for me: Cost Explorer, grouped by service, then by region, then the teardown one resource at a time in every region I've ever touched. Resource Explorer helps find things across regions so you don't have to guess which one hid the leftovers. The CLI does all of it properly, if you already know what you're looking for.

The winning move is to not leave the door open in the first place. If you're done with AWS, be actually done with it: terminate in the right order, sweep every region, close the account.

## Bottom Line

$1.89 is nothing. I'm not writing this because I'm out two dollars a month. I'm writing it because three years of not bothering is the intended outcome. This isn't a broken console — it's the console working exactly as designed for the business behind it. The interface isn't bad. It's just optimized for a different user than me: one who pays.

---
title: "Passkeys Are Better. The Hype Is Worse."
pubDate: 2026-09-01
description: "Passkeys genuinely beat 2FA against the attacks that matter most. But the vendor pitch skips the parts where they break."
draft: false
tags: ["security", "authentication", "passkeys", "fido2", "enterprise", "identity"]
audioUrl: "https://file.duklee.net/audio/2026-09-01-passkeys-are-better-the-hype-is-worse.wav"
---

Five billion passkeys are now in active use worldwide. 90% of consumers know what they are. 68% of enterprises are deploying or piloting them. Google says its 85,000 employees have had zero phishing-related account compromises since moving to hardware security keys.

The numbers are real. The technology works. And the vendor pitch around it is starting to get irresponsible.

Here's what passkeys actually do, where they genuinely beat every alternative, and where the "phishing-proof" narrative falls apart.

## What a passkey actually is

Strip away the marketing and a passkey is a FIDO2/WebAuthn credential. Two standards: WebAuthn (the browser API) and CTAP2 (how the browser talks to your authenticator). The crypto underneath is asymmetric — typically ECDSA on P-256 or Ed25519.

When you register a passkey with a site, your device generates a public/private key pair. The private key stays in your device's secure enclave, TPM, or hardware security key. The server gets only the public key. When you log in, the server sends a random challenge, your device signs it with the private key after you verify locally (fingerprint, face, PIN), and the server checks the signature against the stored public key.

No shared secret crosses the wire. No password sits in a database waiting to be cracked. The server stores a public key, which is mathematically useless for impersonation.

That part is genuinely elegant. The problems start with everything around it.

## Where passkeys actually win

The single biggest security gain is origin binding. When your authenticator signs a challenge, it cryptographically binds that signature to the exact domain (the relying party ID) where the passkey was registered. If you land on `paypal-secure-login.com` instead of `paypal.com`, your device refuses to produce a signature. Not because you noticed the fake URL — because the browser and hardware enforce the match before the private key is ever used.

This defeats the dominant real-world attack: adversary-in-the-middle (AiTM) phishing. Tools like Evilginx work by sitting between you and the real site, relaying your password and TOTP code in real time to capture a valid session cookie. With passkeys, there's nothing to relay. The signature for `paypal.com` is worthless when submitted to a proxy on a different origin.

This isn't theoretical. Evilginx campaigns have been hitting universities since April 2025 — at least 18 institutions, 67 domains, capturing corporate mailboxes by the hundreds. A newer commercial toolkit called Starkiller runs a headless Chrome in a Docker container to proxy the full authentication flow. Both defeat SMS, TOTP, push approvals, and even number-matching MFA. Neither can touch a properly implemented passkey.

The other wins are real but less dramatic:

- No credential stuffing. Every passkey is unique per site. Password reuse becomes structurally impossible.
- No server-side secret theft. A database breach yields public keys. Useless.
- No SIM-swapping. No carrier in the loop.
- No codes to shoulder-surf or clipboard-sniff.
- Already multi-factor by design. The device (something you have) plus biometric/PIN (something you are/know) in a single atomic operation. No sequential window for a relay attack.

Against the attacks that actually compromise accounts at scale — phishing, credential stuffing, password reuse, server breaches — passkeys are categorically better than any password-plus-second-factor combination. That part the vendors get right.

## Where the pitch breaks down

### Recovery is the new front door

If your passkey-protected account has a "forgot your passkey? Reset via email" flow, an attacker doesn't need to beat the passkey. They beat the email. The FIDO Alliance's own deployment guidance acknowledges this: four documented cases where passkey deployments had phishing vulnerabilities, all caused by weak recovery or fallback mechanisms, not by flaws in passkeys themselves.

Your authentication is only as strong as the weakest path to account ownership. If that path is email plus SMS OTP, your passkey is theater.

### The downgrade attack

Proofpoint documented a clean attack against Microsoft Entra ID: a phishing proxy spoofs an unsupported browser (like Safari on Windows), Entra disables passkey support, and the user gets steered to SMS or OTP. The proxy captures the weaker credential and the session cookie. The passkey's origin binding never comes into play because the WebAuthn ceremony never happens.

This works because most deployments still offer passkeys as optional alongside passwords. If a weaker method exists, an attacker will find a way to force it. The FIDO Alliance calls this the "weakest link" problem and their recommendation is blunt: eliminate all phishable fallback methods. Make the strong path the only path.

Most organizations haven't done this. Many can't, because they still have users on devices that don't support passkeys.

### Synced passkeys expand the trust surface

The consumer passkey pitch is "your private key is safe in your secure enclave." That's true for device-bound credentials. For synced passkeys — the kind that live in iCloud Keychain, Google Password Manager, or 1Password — the private key is encrypted and synced across your devices via your cloud account.

Your passkey's security now depends on your Apple ID or Google Account. If that account is compromised, the attacker potentially gets access to your synced passkeys. This is a different trust model than a YubiKey, not necessarily a worse one, but it's a different conversation than "the key never leaves your device."

Palo Alto's Unit42 published research in 2025 showing three attack classes against Google's synced passkey ecosystem. The "Golden Pass-ta-key" attack extracts all synced passkey private keys by forcing a re-registration flow, injecting a forged user-verification key, and dumping the master decryption key from Chrome's process memory. The SDS (security domain secret) that protects all synced passkeys was found logged in Chrome's `device-log` page during registration. Google patched the logging, but the key is still sent to the client and remains accessible in memory.

That's not a passkey problem. That's a "synced credential implementation" problem. But when someone says "passkeys are unhackable," this is what they're not talking about.

### Browser extensions can hijack the ceremony

SquareX demonstrated at DEF CON that a malicious browser extension can intercept WebAuthn API calls — `navigator.credentials.create()` and `navigator.credentials.get()` — and manipulate the entire passkey registration or authentication flow. Chrome documents an extension API called `webAuthenticationProxy` that can do exactly this. It exists for remote desktop use cases, but it means an extension with the right permissions sits in the WebAuthn path.

The attack doesn't break the cryptography. It injects into the browser-side process. The passkey signs exactly what it's told to sign — it just doesn't know the context has been tampered with.

### The device-code flow bypasses everything

This one is the most interesting and the least discussed. In 2026, Lexfo found three active phishing campaigns against Microsoft 365. Two used Evilginx (blocked by passkeys). The third used OAuth device-code abuse: the victim is directed to Microsoft's real `microsoft.com/devicelogin` page, enters a code, completes real MFA, and authorizes the attacker's session. The origin is genuinely Microsoft. Origin binding works perfectly. It just doesn't help, because the user is authenticating on the real site.

FIDO2 keys and passkeys are powerless against this. The defense is a Conditional Access policy that blocks the device-code flow entirely for users who don't need it.

## The honest comparison

| Attack | SMS OTP | TOTP App | Push | Synced Passkey | Device-Bound Passkey |
|---|---|---|---|---|---|
| AiTM phishing (Evilginx-style) | Fails | Fails | Fails | Blocks it | Blocks it |
| SIM swap | Fatal | N/A | N/A | N/A | N/A |
| Server breach | Hash crackable | Seed leak | Token leak | Public key only | Public key only |
| Credential stuffing | Works if reused | Blocked by 2FA | Blocked | Impossible | Impossible |
| Recovery flow bypass | Vulnerable | Vulnerable | Vulnerable | Depends on RP | Depends on RP |
| Downgrade to weaker method | N/A | N/A | N/A | Vulnerable if fallback exists | Same |
| Sync account compromise | N/A | N/A | N/A | Vulnerable | N/A |
| Browser extension hijack | N/A | N/A | N/A | Vulnerable | Vulnerable |
| Device-code flow abuse | Fails | Fails | Fails | Fails | Fails |

The pattern: passkeys block the attacks that are most common and most scalable. They don't block everything, and synced passkeys introduce a new class of risk that device-bound credentials don't have.

## What this means for regulated environments

For anyone working under GxP, 21 CFR Part 11, or similar frameworks, passkeys are a genuine improvement over password-plus-TOTP. They satisfy the "two distinct identification components" requirement (something you have plus something you are/know), they provide stronger non-repudiation than a shared password, and they eliminate the shared-secret storage problem that makes server breaches catastrophic.

But the validation story is more complex than the compliance story. You're now validating:

- The authenticator's behavior (does it correctly bind to origin? does it enforce user verification?)
- The sync fabric's security model (for synced passkeys)
- The recovery flow's resistance to bypass
- The fallback method policy (are weaker methods actually disabled?)
- The attestation chain (can you prove which hardware generated the credential?)

For enterprise deployments, the FIDO Alliance and Yubico both recommend device-bound credentials for privileged accounts, with attestation verification at registration. Synced passkeys are fine for general SSO. The tiered model makes sense — but it means you're managing two credential types, not one.

## The bottom line

Passkeys are the best authentication technology available today for the attacks that actually matter. Against AiTM phishing, credential stuffing, password reuse, and server breaches, nothing else comes close. Google's zero-phishing record with 85,000 employees is the proof point.

But "phishing-proof" is a marketing claim, not a security property. The attack surface moved. It went from "steal the shared secret" to "bypass the recovery flow, force a downgrade, compromise the sync account, hijack the browser extension, or abuse a different auth flow entirely." Those attacks are harder and less scalable than phishing a TOTP code, which is why passkeys are a real improvement. But they're not zero.

If you're deploying passkeys: make them the only path, lock down recovery, require device-bound credentials for anything privileged, and audit your fallback methods. The crypto is solid. Everything around it is where the risk lives.

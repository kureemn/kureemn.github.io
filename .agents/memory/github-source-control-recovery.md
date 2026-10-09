---
name: GitHub source-control recovery
description: Distinguish Replit Git authentication from ordinary integration-card setup.
---

A healthy GitHub source-control authorization reported by the integration directory does not establish that Git pushes can authenticate. A source-control connection may not support ordinary integration reconnect cards.

**Why:** The connection was reported healthy and available to Git, but pushes rejected its credential. Both reconnect and standard connection cards failed because this source-control connection was not recognized as an ordinary connected integration.

**How to apply:** After a credential failure and a rejected reconnect card, stop repeating Git pushes or guessing connector identifiers. Consult Replit's current documentation. Its Git sync guidance directs users to reconnect GitHub in account settings under Connected Services, not solely within a project. Never ask users to paste credentials into chat, and keep task completion blocked when pushing is an explicit requirement.

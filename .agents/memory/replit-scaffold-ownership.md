---
name: Replit scaffold ownership
description: Platform constraints when replacing starter artifacts with a root-only static site.
---

Artifact-managed workflows cannot be removed independently through the workflow-removal callback. Removing an approved starter artifact's directory causes Replit to unregister that artifact and its managed workflows.

**Why:** The platform enforces artifact ownership of managed workflows; manual workflow removal is rejected.

**How to apply:** When a user explicitly approves replacing starter applications with a root-only static site, stop their workflows before removing the unwanted starter artifact directories. Do not create replacement framework artifacts for a Jekyll-only requirement.

Direct edits to `.replit` are rejected by platform tooling; changes require a complete temporary TOML file and `verifyAndReplaceDotReplit`.

**Why:** Replit validates its configuration before replacement.

**How to apply:** Use the validated replacement process for configuration cleanup and keep application run commands managed through the workflow tools.

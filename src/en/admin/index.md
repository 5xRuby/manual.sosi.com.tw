---
title: "Quick Setup & Overview"
---

## Quick Setup

When using SOSI for the first time, administrators should complete the following four steps to configure the basic setup:

### 1. Create Users

**Purpose:** Create operators who can log in to the SOSI system.

**Action:** Go to the "User List" and click "Create User" to set up login credentials (username and password).

### 2. Create Devices

**Purpose:** Define the remote hosts to connect to (e.g., Windows or Linux machines).

**Action:** Go to the "Device List" and add a new device by entering the IP address and selecting the correct type (RDP, SSH, or VNC).

### 3. Create Credentials

**Purpose:** Store the remote host's login credentials (these serve as the automatic login "keys").

**Action:** Go to "Credential Settings" and create a credential by entering the valid username and password for the target host.

### 4. Authorize Connections

**Purpose:** Bind the "person, device, and key" together.

**Action:** Go to "Authorized Device Overview", click "Create Device Connection Authorization", and select the credential created in Step 3 in the authorization credential field.

## Feature Overview

The Admin Console provides comprehensive system management capabilities, including device management, user management, credential settings, connection authorization, watermark protection, domain authentication, site settings, and security audit modules.

| Module | Description |
|--------|-------------|
| [Device Management](/en/admin/devices/) | Manage remote connection devices (add, view, edit, configure) |
| [User Management](/en/admin/users/) | Manage user accounts (create, edit, 2FA settings) |
| [Credential Settings](/en/admin/credentials/) | Manage remote host login credentials |
| [Connection Authorization](/en/admin/connection-auth/) | Manage authorization groups and connection permissions |
| [Watermark Settings](/en/admin/watermark/) | Configure screen watermark protection |
| [Domain Settings](/en/admin/domains/) | Manage LDAP and authentication domains |
| [Site Settings](/en/admin/site-settings/) | 2FA and email global settings |
| [Security Audit](/en/admin/audit/) | Connection logs, file transfers, and activity tracking |

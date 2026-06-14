---
title: "Site Settings"
---

Site Settings provide global parameter configuration that affects overall system behavior, including the following management modules.

## Two-Factor Authentication

If the administrator enforces site-wide two-factor authentication in Site Settings, all users will be required to enter a 2FA code upon login.

![Site 2FA Settings](/images/screenshots/en/image064.jpg)

## Account Lockout Settings

Administrators can configure the automatic unlock time for locked accounts (`lockable_unlock_in`). When a user is locked out due to excessive password failures, the system will automatically unlock the account after the specified duration.

## Email Settings

Email settings form the foundation for SOSI's automated notification delivery. Administrators must correctly configure the SMTP server here to enable the following core services:

### Core Function Scenarios

- **Account Recovery:** Sends "Forgot Password" reset links and "Account Locked" unlock notification emails.
- **Audit Notifications:** Automatically notifies relevant personnel to download recordings once transcoding and packaging are complete.
- **Connection Test:** Provides a "Send Test Email" function to instantly verify email server connectivity.

### Recipient Address Sources

- **Local Accounts:** Manually entered by the administrator in the User List.
- **LDAP/AD Accounts:** Automatically synced from the enterprise directory based on email attributes configured in Domain Settings.

## Recording Settings

### Recording Retention Days

Set the `processed_recording_retention_days` global variable to specify how many days processed recordings are kept. The system periodically purges recordings that exceed the retention period to save storage space. Set to 0 to disable automatic purging.

### Mandatory Recording

Administrators can enforce recording functionality through the following global toggles:

| Setting | Description |
|---------|-------------|
| Force Graphical Session Recording (`session_recording_always_enabled`) | When enabled, all connections will have screen recording forced |
| Force Keystroke Logging (`include_keys_always_enabled`) | When enabled, all connections will have keystroke logging forced |

### FFmpeg Transcoding Settings

Administrators can adjust FFmpeg transcoding parameters (`ffmpeg_variable`) in Site Settings to control the quality and performance of recording transcoding.

### Recording Concurrency and Disk Threshold

- **Concurrency:** Set the maximum number of concurrent recording processing jobs.
- **Disk Threshold:** Set the minimum disk free space percentage. When disk space falls below this threshold, recording processing will be paused, and a disk space warning will be issued.

## Recording Download Settings

Administrators can toggle the encrypted recording download feature (`enable_connection_recording_download`) and configure the auto-cleanup interval for encrypted files.

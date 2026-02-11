---
title: "Device Connection"
---

This chapter explains how regular users can browse authorized devices, initiate remote connections, transfer files, and view connection history after logging in to the SOSI system.

## Browse Devices

After logging in, the system displays your authorized devices as cards. Each card shows the device name, IP address, and connection type (RDP, SSH, or VNC).

## Start a Connection

1. Find the target device card in the device list.
2. Click the "Connect" button.
3. The system will automatically log in to the remote host using credentials pre-configured by the administrator, taking you directly to the desktop or command-line interface.

> You do not need to enter the remote host's username or password — SOSI handles authentication automatically.

## Connection Operations

Once connected, you can operate the remote desktop or terminal directly in your browser:

- **RDP Connection:** Operate a Windows remote desktop with mouse and keyboard input.
- **SSH Connection:** Use the command-line interface to operate Linux/Unix systems.
- **VNC Connection:** Operate the remote desktop via VNC protocol.

> A watermark may appear on screen during the session — this is a security feature configured by the administrator.

## File Transfer

If the administrator has enabled SFTP for the device, you can upload and download files during the session:

- Browse the remote host's file system via the SFTP interface.
- Upload local files to the remote host, or download files from it.

> All file transfer operations are recorded in the security audit log.

## Disconnect

To end a remote connection:

- Close the browser tab or window directly.
- Click the "Disconnect" button in the connection interface.

## Connection History

You can view your past connection records, including:

- Device name and IP address
- Connection start and end times
- Connection type and status

## Request Device Access

If you need to connect to a device that is not currently authorized for you, contact your system administrator with the following information:

- Your user account
- The device name or IP address you need to access
- Purpose of the connection

Once the administrator approves, the device will appear in your device list.

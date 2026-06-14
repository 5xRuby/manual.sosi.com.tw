---
title: "Pending Grants"
---

Pending Accessible Device Grants lists all device connection grant applications currently under review. Each application is awaiting approval or rejection by members of the [User Grant Group](/en/admin/connection-auth/grant-groups/) corresponding to the current step.

## Pending List

![Pending Grants List](/images/screenshots/en/pending-grants-list.jpg)

The pending list displays all grant applications that have not yet completed all approval steps, including:

- The applicant's user account and target device name
- Current approval step (e.g., Step 2 / 3)
- Application creation time
- Application status (Under Review)

## Viewing Application Details

Click "View" to access the detailed application page, which shows:

- **Target** — User account, user name, target device
- **Step Progress** — Which steps have passed, the current pending step, how many steps remain
- **Authorization Parameters** — Credential settings, authorization start/end time, login restrictions
- **Reason** — The reason provided by the applicant
- **Note** — Notes left by reviewers at previous steps

## Approving

Users who are members of the current step's UGG can approve from this page:

1. Click the "Approve" button
2. Optionally add a note
3. Upon confirmation, the step is marked as passed
4. If this is the final step → the application enters [Accessible Device Grants](/en/admin/connection-auth/device-grants/), and the user can access the device
5. If more steps remain → the application automatically advances to the next step, awaiting review by that step's group members

> Within a step, **any single member's approval passes the step**. The decision of the first member to review becomes the final result for that step.

## Rejecting

Users who are members of the current step's UGG can reject from this page:

1. Click the "Reject" button
2. Provide a rejection reason (note) for the applicant and administrators
3. Upon confirmation, the entire application is marked as **rejected** and the flow terminates
4. The application is removed from the pending list, and the user cannot obtain device access

> ⚠️ Rejection is **irreversible**. Once rejected, a new grant application must be created from scratch.

## Review Audit

All approval and rejection actions are recorded in the [Grant Audit](/en/admin/connection-auth/device-grants/#grant-audit-records) log, including the operator, action type, timestamp, and notes, enabling full traceability of the review process.

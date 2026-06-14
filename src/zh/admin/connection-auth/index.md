---
title: "裝置連線授權"
---

SOSI 提供兩種裝置指派途徑：

| 途徑 | 機制 | 適用場景 |
|------|------|----------|
| **直接指派** | 管理員直接將使用者指派到裝置，無需審核 | 小型組織、無需分層審核 |
| **裝置連線授權** | 需經過多步驟審核流程，由授權群組成員逐關核准後方可取用裝置 | 需要分層審核的大型組織 |

本節說明後者 — 「裝置連線授權」是為有分層審核需求的組織設計的進階功能。

## 授權生命週期

```mermaid
flowchart TD
    subgraph 建立階段
        A["👤 使用者授權群組<br/>UGG-A, UGG-B, UGG-C...<br/>每個群組 = 一組審核者"]
        B["📝 建立授權申請<br/>對象：User × Device<br/>綁定 N 個 UGG 作為審核步驟"]
    end

    subgraph 審核階段["審核階段（待審裝置授權）"]
        C{"Step 1: UGG-A<br/>任一成員審核"}
        D{"Step 2: UGG-B<br/>任一成員審核"}
        E{"Step 3: UGG-C<br/>任一成員審核"}
        F["❌ 否決<br/>整筆申請關閉"]
        G["✅ 全部核准"]
    end

    subgraph 生效階段
        H["🔓 可行裝置授權<br/>User 可取用 Device"]
    end

    A --> B
    B --> C
    C -- "核准 ✅" --> D
    C -- "否決 ❌" --> F
    D -- "核准 ✅" --> E
    D -- "否決 ❌" --> F
    E -- "核准 ✅" --> G
    E -- "否決 ❌" --> F
    G --> H
```

## 四個子功能模組

| 模組 | 說明 |
|------|------|
| [使用者授權群組](/zh/admin/connection-auth/grant-groups/) | 管理審核步驟的參與者集合——每個群組代表一關審核 |
| [授權流程](/zh/admin/connection-auth/grant-flows/) | 定義審核鏈規則：步驟數量、順序、AND-gate 否決機制 |
| [可行裝置授權](/zh/admin/connection-auth/device-grants/) | 已走完所有審核步驟、核准生效的授權列表 |
| [待審裝置授權](/zh/admin/connection-auth/pending-grants/) | 審核中的申請——當前步驟正等待對應群組成員審核 |

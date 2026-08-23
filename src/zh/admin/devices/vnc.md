---
title: "VNC 裝置設定"
---

## VNC 裝置設定

VNC（Virtual Network Computing）是一種遠端桌面控制協定，使用 RFB（Remote Frame Buffer）協定來控制遠端電腦。設定 VNC 裝置時需填寫 VNC 特定的連線參數。

### 基本設定

與其他裝置類型共通的設定項目，請參考[裝置列表](/zh/admin/devices/)中的說明，包含：

- **裝置識別名稱**
- **IP / Hostname**
- **類型：** 選擇 VNC
- **同時連線數目上限**
- **伺服器埠號：** VNC 預設為 **5900**
- **備註**
- **連線時間限制**
- **負責人信箱**

![VNC 編輯頁面](/images/screenshots/zh/devices/vnc-edit.jpg)

### VNC 特定設定

以下設定為 VNC 裝置類型專屬：

#### 自動重試（Auto Retry）

設定連線失敗時是否自動重試、以及重試的次數或間隔時間。

#### 色彩深度（Color Depth）

設定遠端桌面連線的顯示色彩品質，選項包含：

| 色彩深度 | 說明 |
|----------|------|
| Low color (16-bit) | 低色彩品質，適合頻寬有限的環境 |
| True color (24-bit) | 真實色彩，提供較佳的視覺效果 |
| True color (32-bit) | 完整真彩，支援透明通道 |
| 256 color | 最低色彩需求，網路環境極差時使用 |

選擇較低的色彩深度可以減少網路傳輸流量，提升操作流暢度。

---
title: "RDP 裝置設定"
---

## RDP 裝置設定

RDP（Remote Desktop Protocol）是微軟開發的遠端桌面協定，用於連接 Windows 主機的遠端桌面服務。設定 RDP 裝置時需填寫 RDP 特定的連線參數。

### 基本設定

與其他裝置類型共通的設定項目，請參考[裝置列表](/zh/admin/devices/)中的說明，包含：

- **裝置識別名稱**
- **IP / Hostname**
- **類型：** 選擇 RDP
- **同時連線數目上限**
- **伺服器埠號：** RDP 預設為 **3389**
- **備註**
- **連線時間限制**
- **負責人信箱**

![RDP 編輯頁面](/images/screenshots/zh/devices/rdp-edit.jpg)

### RDP 特定設定

以下設定為 RDP 裝置類型專屬：

#### 網域（Domain）

設定遠端 Windows 主機所在的網域（如 `5XRUBY.COM`）。若目標主機已加入 Active Directory 網域，需於此處填寫網域名稱以進行網域驗證登入。

#### 安全類型（Security Type）

選擇 RDP 連線使用的安全協定層級，選項包含：

| 類型 | 說明 |
|------|------|
| any | 自動協商，由伺服器決定使用何種安全層級 |
| nla | 網路層驗證（Network Level Authentication），最安全的選項 |
| nla-ext | 延伸網路層驗證（NLA Extended） |
| tls | 使用 TLS 加密連線 |
| vmconnect | Hyper-V VM Connect 模式 |
| rdp | 標準 RDP 安全層 |

#### 忽略憑證（Ignore Certificate）

勾選後，系統將忽略遠端伺服器提供的 SSL/TLS 憑證檢查。**注意：** 僅建議在內部信任環境中啟用，公開網路中可能帶來安全風險。

#### 禁用驗證（Disable Verification）

勾選後，將略過 RDP 連線的身分驗證程序。**注意：** 此選項預設為禁用，且僅在特定情境下啟用。

#### 驗證服務（Authentication）

選擇用於 RDP 連線的驗證服務，例如 LDAP 等外部驗證來源。

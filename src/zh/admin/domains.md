---
title: "領域設定"
---

## 領域列表

管理員可檢視系統內所有的認證領域配置。

- **列表資訊：** 包含領域 ID、名稱、類型、建立時間及排序。
- **排序重要性：** 列表順序將直接影響登入頁面中，「認證方式」下拉選單的顯示先後順序。
- **搜尋功能：** 支援「領域名稱搜尋」，輸入關鍵字即可快速找尋特定領域。

**操作行為：**

- 查看/編輯/刪除
- 同步領域使用者
- 綁定測試

![領域列表](/images/screenshots/zh/image060.jpg)

## 新增領域

在新增或編輯領域時，請根據以下欄位定義進行配置：

### 基本資訊

- **領域名稱：** 領域顯示的名稱。
- **類型：** 目前有兩種：
  - **LdapAuthenticateStrategy：** LDAP 或 Microsoft Active Directory 適用。
  - **DatabaseAuthenticateStrategy：** SOSI 內建的使用者帳密認證。

### LDAP 連線設定

| 欄位 | 說明 |
|------|------|
| 伺服器 | LDAP 伺服器的 IP 或 Hostname |
| 連接埠 | 連線的 Port Number |
| Base DN | LDAP 伺服器使用的 Base DN 字串 |
| Bind DN | LDAP 伺服器使用的 Bind DN 字串 |
| 使用者帳號屬性名稱 | 認證時使用的 LDAP 帳號屬性名稱 |
| 使用者顯示名屬性名稱 | 使用者顯示名稱的欄位 |
| 電子郵件屬性名稱 | 使用者 E-Mail 的欄位 |
| 驗證方式 | 「simple」與「anonymous」可選 |

### TLS 與加密設定

**TLS 驗證方式：** 有四種選項，需依照該 LDAP 伺服器可用的方式設定：

- VERIFY_NONE
- VERIFY_PEER
- VERIFY_FAIL_IF_NO_PEER_CERT
- VERIFY_CLIENT_ONCE

**加密方法：** 包含「無」、「simple_tls」與「start_tls」。

- **SSL 證書：** 如加密方法不是「無」，則可輸入 SSL 證書，此欄位會加密。
- **SSL 加密金鑰：** 如加密方法不是「無」，則可輸入 SSL 金鑰，此欄位會加密。

### 進階設定

**識別物件格式：** 有兩種選項：

- Distinguished Name
- User Principal Name

**過濾條件：**

- **使用者過濾條件：** 在 LDAP 伺服器中驗證一般使用者的 filter string。
- **管理員過濾條件：** 在 LDAP 伺服器中驗證管理員的過濾條件。

**同步設定：**

- **同步用帳號：** 使用同步功能時的 LDAP 伺服器使用者。
- **同步用帳號的密碼：** 使用同步功能時的 LDAP 伺服器使用者密碼，此欄位會加密。

![新增領域](/images/screenshots/zh/image062.jpg)

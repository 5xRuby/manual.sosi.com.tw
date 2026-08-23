---
title: "RDP デバイス設定"
---

## RDP デバイス設定

RDP（Remote Desktop Protocol）は、Windows ホストのリモートデスクトップサービスに接続するためのマイクロソフトが開発したプロトコルです。RDP デバイスを設定する際は、RDP 固有の接続パラメータを入力する必要があります。

### 基本設定

全デバイスタイプ共通の設定項目については、[デバイス一覧](/ja/admin/devices/)を参照してください：

- **デバイス識別名**
- **IP / ホスト名**
- **タイプ：** RDP を選択
- **最大同時接続数**
- **ポート番号：** RDP のデフォルトは **3389**
- **備考**
- **接続時間制限**
- **管理者メールアドレス**

![RDP 編集ページ](/images/screenshots/ja/devices/rdp-edit.jpg)

### RDP 固有設定

#### ドメイン（Domain）

リモート Windows ホストが属するドメインを指定します（例：`5XRUBY.COM`）。ターゲットマシンが Active Directory ドメインに参加している場合に必要です。

#### セキュリティタイプ（Security Type）

RDP 接続に使用するセキュリティプロトコルレベルを選択します：

| タイプ | 説明 |
|--------|------|
| any | 自動ネゴシエーション、サーバーが決定 |
| nla | ネットワーク層認証（Network Level Authentication）、最も安全 |
| nla-ext | NLA 拡張（NLA Extended） |
| tls | TLS 暗号化接続 |
| vmconnect | Hyper-V VM Connect モード |
| rdp | 標準 RDP セキュリティ層 |

#### 証明書を無視（Ignore Certificate）

有効にすると、リモートサーバーの SSL/TLS 証明書チェックを無視します。**注意：** 信頼できる内部環境でのみ推奨します。

#### 検証を無効化（Disable Verification）

有効にすると、RDP 接続の身元検証をスキップします。**注意：** デフォルトでは無効で、特定のシナリオでのみ有効にしてください。

#### 認証サービス（Authentication）

RDP 接続に使用する認証サービス（LDAP などの外部認証ソース）を選択します。

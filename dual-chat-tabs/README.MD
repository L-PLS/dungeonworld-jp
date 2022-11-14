# Dual Chat Tabs

* **製作者**: L_PLS (Twitter：@L_PLS)
* **modバージョン**: 0.1.3

### インストール方法

以下のリンクをMODとしてインストールしてください。

* リンク： https://github.com/L-PLS/dual-chat-tabs/releases/latest/download/module.json

### 内容
チャットタブが、「main」と「sub」のふたつに分けられ、「main」タブを選択した状態で発言された場合は「main」タブのログに、「sub」タブを選択した状態で発言された場合は「sub」タブのログに書き込まれます。
「sub」タブでの発言はプレイヤーとして発言されます。また、「sub」タブを選んだ状態で、ダイスロールをした場合、結果は「main」タブに書き込まれます。
ログのエキスポートについては、このMODでは手を加えていないので、「main」「sub」関係なく、時系列で出力されます。
ログのエキスポートについては何かしら対処したいとは考えてはいますが、実装時期は未定です。
タブ名は設定で変更できます。

このMOD導入前の発言に関しては以下のルールで「main」「sub」に発言が振り分けられます。
* 「sub」……プレイヤー発言
* 「main」……プレイヤー発言以外

通常、FVTTではコマを選択しない状態でのGM発言はプレイヤー発言となっているため、「sub」タブに振り分けられます。違和感があるかもしれませんが仕様とします。
MODを導入した状態では、コマを選択しない状態のGMであっても、「main」タブを選択して発言すれば、「main」に、「sub」タブを選択して発言すれば、「sub」にそれぞれ書き込みます(ダイスロールはすべて「main」に)。


The chat tab will be divided into two tabs, "main" and "sub". If you write to the chat with the "main" tab selected, the mod will write toあ the log of the "main" tab. Similarly, if you write to the chat with the "sub" tab selected, the mod will write to the log of the "sub" tab.
Your posts in the "main" tab will be written to In character's message.
Your posts in the "sub" tab will be written as Out of character's messages. Also, if you make a die roll while you have the "sub" tab selected, the result will be written to the "main" tab.
I have not modified the log export in this mod, so the logs are output in chronological order, with no distinction between "main" and "sub".
I would like to modify the log export feature, but have not yet decided when to implement it.
You can change the tab name in the settings.

The logs before activation of this mod will be divided into "main" and "sub" tabs with the following rules.
* "sub" tab …… Out of character's messages
* "main" tab …… other than Out of character's messages

Normally, in FVTT, the game master's posts with no tokens selected are recorded in Out of character's messages. Therefore, the logs are assigned to the "sub" tab. You may feel uncomfortable. But this is the specification of this mod.
After activating this mod, even if you are a game master with no tokens selected, if you select the "main" tab and write, this mod will log to "main". Similarly, if you select and write in the "sub" tab, the mod will record in "sub" respectively (except for die rolls).

### 感謝
このMODは、Cody Swendrowski <cody@swendrowski.us>様の、Tabbed Chatlog(https://github.com/cswendrowski/FoundryVTT-Tabbed-Chatlog)をベースに開発されました。

### リリースノート
0.1.1 ダイスロールの結果が通知されていなかったのを修正
0.1.2 ダイスロールの結果をサブタブに表示するモードを追加
0.1.4 FVTTバージョン10対応、所有者が参加者のコマでGMが発言する時のオプションを追加

### ライセンス
GNU Lesser General Public License

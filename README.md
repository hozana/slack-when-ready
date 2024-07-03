# Slack When Ready

## How to install

You might need to install Python. Download it here : https://www.python.org/downloads/windows/
Check the "Add python.exe to path" checkbox before click "Install now"

Download a zip of slack-when-ready by clicking on the green "code" button above to the right then on "Download zip".

Extract the zip where you want.

Right click the slack.when-ready.ps1 file and click "copy"

Click the Windows-button (Windows-button + r)
    Enter this: shell:startup

Create a new shortcut by rightclick and in context menu choose menu item: New=>Shortcut

Create a shortcut to your script, e.g:

C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -NoProfile -Command "PASTE_HERE"

Name it "slack-when-ready".

Disable Slack automated startup using the tray bar menu:  ![Screenshot_20240703_112537.png]
Then quit Slack using the same menu.

Click your slack-when-ready shortcut to start Slack.


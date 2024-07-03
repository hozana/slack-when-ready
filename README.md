# Slack When Ready

Before installing, if you are using Slack dekstop, disable Slack automated startup using the tray bar menu:  ![Screenshot_20240703_112537.png](Screenshot_20240703_112537.png)
Then quit Slack using the same menu.

## How to install (Using slack web)

In Chrome, install the following extensions :

https://chromewebstore.google.com/detail/always-show-slack-workspa/diebigeemhcipelnipggjihcmgjlacge

https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo

Enable developer mode in Chrome as explained here : https://www.tampermonkey.net/faq.php#Q209

Open tampermonkey settings : chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=settings
In the "Security" section, set "Modify existing content security policy (CSP) headers:" to "Remove entirely (possibly insecure)" and click "save" at the bottom of the section.

Open the tampermonkey dashboard : chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#url=&nav=dashboard
Click the "+" Icon in the black bar at the top, and paste the contents of the "slack-when-ready.js" file found above in the editor. Click file -> save.

Open the Hozana Slack workspace in chrome : https://app.slack.com/client/T4K86RQS2
Login to Slack if necessary. If Slack redirects you to the app, enter the above URL again in Chrome now that you are logged in.
Click on the tampermonkey icon 

In the three vertical dots menu (in the upper right corner in Chrome), choose "Save and share" then "Install page as app"
This will create a Slack icon in the windows menu and in the taskbar. You can name it "Slack Web App" to distinguish it from Slack Desktop.


## How to install (Native Slack Client… not yet ready)

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

$slackDir = "$env:ProgramData\$env:USERNAME\slack"
if (Test-Path $slackDir) {
    $latestVersionDir = Get-ChildItem -Path $slackDir\app-* -Directory | Sort-Object Name -Descending | Select-Object -First 1
    if ($latestVersionDir) {
        $slackExe = Join-Path -Path $latestVersionDir.FullName -ChildPath "slack.exe"
        if (Test-Path $slackExe) {
            echo "pipenv run python -m electron_inject -r slack-when-ready.js - $slackExe"
            python -m electron_inject -r slack-when-ready.js - $slackExe '--remote-allow-origins=http://localhost:50453'
            Write-Output "Slack is starting..."
        } else {
            Write-Output "Slack executable not found."
        }
    } else {
        Write-Output "No version directories found in Slack installation path."
    }
} else {
    Write-Output "Slack installation directory not found."
}

$possiblePaths = @(
    "$env:LOCALAPPDATA\slack",                      # Common per-user install path
    "$env:PROGRAMFILES\slack",                      # Common system-wide install path
    "$env:LOCALAPPDATA\Programs\slack",             # Another common per-user install path
    "$env:PROGRAMDATA\Microsoft\Windows\Start Menu\Programs\slack", # Another possible path
    "C:\Program Files\slack",                       # Typical system-wide install path
    "C:\Users\$env:USERNAME\AppData\Local\slack",
    "$env:ProgramData\$env:USERNAME\slack"
)

# Function to search for the Slack executable
function Find-SlackExecutable {
    param (
        [string[]]$paths
    )

    foreach ($path in $paths) {
        if (Test-Path $path) {
            # Search for the Slack executable in the directory and subdirectories
            $slackExe = Get-ChildItem -Path $path -Recurse -Filter "slack.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
            if ($slackExe) {
                return $slackExe.FullName
            }
        }
    }

    return $null
}

# Search for the Slack executable
$slackExe = Find-SlackExecutable -paths $possiblePaths

        if (Test-Path $slackExe) {
            echo "pipenv run python -m electron_inject -r slack-when-ready.js - $slackExe"
            python -m electron_inject -r slack-when-ready.js - $slackExe '--remote-allow-origins=http://localhost:50453'
            Write-Output "Slack is starting..."
        } else {
            Write-Output "Slack executable not found."
        }



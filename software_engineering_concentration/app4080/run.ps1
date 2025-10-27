# Check if the virtual environment exists
if (-Not (Test-Path "venv")) {
    Write-Host "Creating virtual environment..."
    python -m venv venv
}

# Activate the virtual environment
& "venv\Scripts\Activate.ps1"

# Install dependencies from requirements.txt
pip install -r requirements.txt

# Load environment variables from the .env file
Get-Content .env | ForEach-Object {
    if ($_ -notmatch "^#") {
        $var = $_.Split("=")
        [System.Environment]::SetEnvironmentVariable($var[0].Trim(), $var[1].Trim())
    }
}

# Run Django development server on port 80
Start-Process -NoNewWindow -Wait -FilePath "python" -ArgumentList "manage.py", "migrate"
Start-Process -NoNewWindow -Wait -FilePath "python" -ArgumentList "manage.py", "runserver", "0.0.0.0:80"

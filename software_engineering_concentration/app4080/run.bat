@echo off

:: Check if the virtual environment exists
if not exist "venv\" (
    echo Creating virtual environment...
    python -m venv venv
)

:: Activate the virtual environment
call venv\Scripts\activate

:: Install dependencies from requirements.txt
pip install -r requirements.txt

:: Load environment variables from .env file
for /f "delims=" %%x in ('findstr /v "#" .env') do set %%x

:: Run Django development server on port 80 with auto-reload
python manage.py runserver 0.0.0.0:80

#!/bin/bash

# Check if the virtual environment exists
if [ ! -d ".venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv .venv
fi

# Activate the virtual environment
source .venv/bin/activate

# Install dependencies from requirements.txt
pip install -r requirements.txt

# Load environment variables from the .env file
export $(grep -v '^#' .env | xargs)

# Run Django development server on port 80 with auto-reload enabled
sudo python manage.py migrate
sudo python manage.py runserver 0.0.0.0:80 --nothreading
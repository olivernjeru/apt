# APP 4080 — PeerAI

## PeerAI

![Coverage](https://img.shields.io/badge/Coverage-75%25-brightgreen)

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `./run.sh` if on linux or Mac to start the application.
4. Open your web browser and go to `http://localhost/` to see the "Hello, World!" message.

## Team and Role

* Team size: (group project)
* Role: Assistant Project Lead — coordinated tasks, contributed heavily to backend logic, and supported presentation/delivery

## Accessing admin

You need to create a super admin:

* on the terminal run the command `python manage.py shell`
* followed by `from django.contrib.auth.models import User`
* Create the super user `User.objects.create_superuser('admin', 'admin@localhost.com',  'admin')` and presse enter
* On your browser navigate to `http://localhost/admin` and login with the username `admin` and password `admin`
* You can create a to do and see what happens after saving it watch the logs

# APP4035 GROUP 1 PROJECT 1

## Description

A hotel requires a system designed to streamline check-ins, manage room assignments, and coordinate housekeeping tasks efficiently. The system will have two main user roles: Receptionist and Housekeeping Staff, each with specific permissions. The system must be able to perform the following tasks:

* The receptionist should be able to check in guests, assign rooms, and add cleaning requests.
* Housekeeping staff should log in to view pending room cleaning tasks and update room statuses upon completion.
* The receptionist should be able to track which rooms are ready for new guests.

### Project Scope

This project will implement the functionality described above. The system does NOT handle online bookings or process payments.

#### Project Requirements

* The project MUST be a Multi-page Application (MPA).
* The project MUST make use of a CSS framework.
* The project MUST be a Node.js project.
* The project MUST make use of a back-end framework, preferably Express.
* The project MUST make use of a Templating engine.
* Login functionality SHOULD be implemented using sessions, preferably express-sessions.
* You MUST use JSON files to store your data locally.
* The project MUST be submitted on Blackboard by Sunday the  2nd of March 2025 and presented to the class on Monday the 3rd of March.

### How to Package Your Work

1. Zip your project folder.
2. Upload the zipped file to Blackboard.
3. Only one group member should submit the work.

### Mark Distribution

* Aesthetic User Interface …………………. 7 marks
* Working Functionality …………..……….. 8 marks
* Thoughtful Project Design ………………. 5 marks
* Total ………………………………………. 20 marks

### Due Date

Sunday, March 2, 2025 11:59:00 PM EAT

### Points Possible

20

## Team and Role

* Team size: 5
* Role: Team Lead — product/technical leadership, planning, code reviews, and presentation

## Architecture

* Node.js + Express server with Handlebars (hbs) for templating and Bootstrap UI
* Session-based auth (where applicable) and JSON files for lightweight persistence
* Pages for receptionist and housekeeping flows; routes separated by responsibility

## Folder Structure

* index.js — server entry and route registration
* views/ — Handlebars templates
* public/ — static assets

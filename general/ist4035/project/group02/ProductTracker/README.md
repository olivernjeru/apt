# ProductTracker (IST 4035 Group Project)

An Express + Handlebars application to manage and track product sales.

## Team and Role

- Team size: 5
- Role: Team Lead — product/technical leadership, planning, code reviews, debugging, and final presentation

## Tech Stack

- Node.js, Express
- Handlebars templating
- JSON for simple persistence

## Architecture

- Layered Express app with routes, controllers (in-route handlers), and views (Handlebars)
- Views render tables/charts with Bootstrap and Chart.js for basic analytics
- Data persisted to JSON files (e.g., sales.json, id counters) via simple file I/O

## Folder Structure

- index.js — app bootstrap and routes
- views/ — Handlebars templates and partials
- public/ — static assets (CSS/JS)
- sales.json — data storage
- idCounterData.json — simple id counter persistence

## How to run

1. Install dependencies
   - npm install
2. Start the app
   - npm start
3. Open <http://localhost:3000>

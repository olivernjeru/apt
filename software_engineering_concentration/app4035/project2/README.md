# PROJECT 2

Create an Idea Notebook web app that users can use to jot down creative ideas, project thoughts, or personal reflections.

The web app should allow them to categorize ideas (e.g., business, personal, random thoughts, etc.).

It should also provide a search feature to find past ideas using keywords.

## Project Scope

Ideally, such a project would require a login to the Idea Notebook.

However, for this project, no login functionality is required as it is assumed that the login functionality would be added in a different phase of the project.

## Project Requirements

The web app must be built using Next.js.

The data for this web application must be stored in a JSON file.

The project should be submitted on Blackboard by Tuesday, 7th April 2025.

Each group should present their project to the class on Wednesday, 8th April 2025.

## How to Package Your Work

Remove the node_modules folder from your project.

Zip your project folder.

Upload the zipped file to Blackboard.

Only one group member should submit the work.

## Mark Distribution

Aesthetic User Interface …………………. 5 marks

Working Functionality …. ………………. 10 marks

Rich User Experience …………..……….. 10 marks

Total ……………………………………... 25 marks

## POSTSCRIPT

Project confirguration setup used

√ What is your project named? ... project2

√ Would you like to use TypeScript? ... **No** / Yes

√ Would you like to use ESLint? ... No / **Yes**

√ Would you like to use Tailwind CSS? ... **No** / Yes

√ Would you like your code inside a `src/` directory? ... No / **Yes**

√ Would you like to use App Router? (recommended) ... No / **Yes**

√ Would you like to use Turbopack for `next dev`? ... No / **Yes**

√ Would you like to customize the import alias (`@/*` by default)? ... **No** / Yes

## Team and Role

* Team size: 5
* Role: Team Lead — product/technical leadership, planning, reviews, and presentation

## Architecture

* Next.js (App Router) application with pages for idea listing, categorization, and search
* JSON file used as the data store (CRUD simulated server-side)
* Tailored components under src/ and routing via app/ structure

## Folder Structure

* src/app/ — routed pages and layouts
* public/ — static assets
* data.json — ideas storage (JSON)

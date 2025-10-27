# Stocks Data Entry

A small data entry application delivered as a paired project.

## Team and Role

- Team size: 2
- Role: Team Lead — scoped tasks, set milestones, contributed to implementation, and ensured on-time delivery

## Notes

- See repository structure for source and configuration.

## Architecture

- Android app (Kotlin/Java) with Firebase integration via BoM
- Firebase Analytics, Auth, Database/Firestore for persistence and telemetry
- UI composed with AndroidX components and Material Design

## Module Structure

- build.gradle.kts (root) — plugin and Google services setup
- app/build.gradle.kts — app module deps (Firebase BoM, appcompat, material, constraintlayout)
- app/src/ — activities, layouts, and logic

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Map-App (Frontend)

A React-based frontend application for the Map App assignment. This project provides a user interface featuring authentication, a dashboard with city cards, and an interactive map view. The application communicates with a backend API for authentication and data retrieval.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Packages Used](#packages-used)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)


## Overview

**Map-App** is a modern, responsive React application designed for users to log in, view a dashboard of city cards, and interact with maps. It employs styled-components for theming and a blue & white color scheme to give it a professional look. This frontend project is part of a full-stack assignment, with a separate backend repository.

## Features

- **User Authentication:** Login and Signup functionality.
- **Dashboard:** Displays city cards with pagination.
- **Map View:** Interactive maps using React-Leaflet.
- **Responsive Design:** Optimized for various screen sizes.
- **Theming:** Built using styled-components for a consistent blue & white corporate theme.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mohan-52/Map-App.git
2.Navigate to the project directory:
cd Map-App

3.Install the dependencies:
npm install

4.Start the application:
npm run dev

## Packages Used

**Packages Used**

1.React
The core library for building the user interface.

2.React Router DOM
Provides declarative routing for React applications, enabling navigation among views.

3.Styled-components
Enables writing CSS in JavaScript with support for dynamic theming and component-based styles.

4.React-Leaflet & Leaflet
Used for embedding interactive maps into the application.

5.React-spinners
Provides a collection of loading spinners for indicating asynchronous operations.

6.js-cookie
Simplifies handling browser cookies (e.g., for storing JWT tokens).



## Project Structure

```
Map-App/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   ├── City.js
│   │   ├── Dashboard.js
│   │   └── MapView.js
│   |
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Backend Setup
The backend for this project is hosted in a separate repository. Follow the instructions in the backend repo to set it up.

Backend Repository: Map-App Backend https://github.com/Mohan-52/SyncthreadsAssignment

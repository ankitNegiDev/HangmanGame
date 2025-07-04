# Hangman Game

This project is a web-based Hangman game application. It consists of a backend serving word data and a frontend React application for playing the game.

## Live url of project

[live url of project](https://hangman-game-p444.vercel.app/)

## Project Structure

The project is organized into the following directories:

- `02_Hangmangame/`: The root directory for the Hangman game project.
    - `BackendOfHangman/`: Contains the backend code for the game.
        - `db.json`: A JSON file likely containing the words for the game.
        - `package.json`: Backend dependencies and scripts.
        - `package-lock.json`: Lock file for backend dependencies.
    - `HangmanGame/`: Contains the frontend React application for the game.
        - `src/`: Source code for the React application.
        - `public/`: Public assets for the React application.
        - `package.json`: Frontend dependencies and scripts.
        - `package-lock.json`: Lock file for frontend dependencies.
        - `README.md`: (This file) Project documentation.
        - `index.html`: The main HTML file.
        - `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js`: Configuration files for the frontend build and development environment.

## Setup and Running

To set up and run the Hangman game, you need to start both the backend and the frontend.

### Backend Setup and Running

1. Navigate to the backend directory:
   
```bash
cd 02_Hangmangame/BackendOfHangman
```
2. Install the backend dependencies:
   
```bash
npm install
```
3. Start the backend server. (Assuming your `package.json` has a script to start the server, commonly `start` or `json-server`):
   
```bash
npm start
```
   (If `npm start` doesn't work, check the `scripts` section in `BackendOfHangman/package.json` for the correct command, often `json-server --watch db.json --port 3001` or similar.)

The backend should now be running, likely serving data from `db.json`. Note the port the backend is running on (often 3000 or 3001).

### Frontend Setup and Running

1. Open a new terminal window and navigate to the frontend directory:
   
```bash
cd 02_Hangmangame/HangmanGame
```
2. Install the frontend dependencies:
   
```bash
npm install
```
3. Start the frontend development server:
   
```bash
npm run dev
```

The frontend development server should start, and the application will typically open in your default web browser. If not, open your browser and go to the address provided in the terminal (usually `http://localhost:5173` or similar).

**Note:** The frontend needs to be able to communicate with the backend. Ensure the frontend is configured to fetch data from the correct backend address and port.

You should now be able to play the Hangman game in your browser!
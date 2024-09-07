# Customer Dashboard

This project provides a dashboard for tracking the number of customers entering and leaving a store in real time, using WebSockets for live data streaming. It consists of two tables: one for live customer data and another for historical customer data from the last 24 hours.

## Features

- **Real-time Data**: Live updates for the number of customers entering and leaving the store via WebSockets.
- **Historical Data**: Displays customer data from the last 24 hours using a REST API.
- **Separate Frontend and Backend**: The project has distinct frontend and backend components that are easy to manage independently.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **WebSocket**: Socket.io

## Installation

### Backend

1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm run server
    ```

    This will start the backend on [http://localhost:5005](http://localhost:5005).

### Frontend

1. Navigate to the `frontend` folder:
    ```bash
    cd ../frontend
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend:
    ```bash
    npm run start
    ```

   This will start the frontend on [http://localhost:3000](http://localhost:3000).

## API Endpoints

- **WebSockets**: Real-time updates for customer data are sent via WebSockets using `Socket.io`.
  
- **History Data**: 
  - Method: `GET`
  - URL: `/api/v1/customer/history`
  - Description: Fetches customer history data from the last 24 hours.

## Running the Project

1. Start the backend server:
    ```bash
    cd backend
    npm run server
    ```

2. Start the frontend:
    ```bash
    cd frontend
    npm run start
    ```

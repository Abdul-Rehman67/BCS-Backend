# Personal Book Collection - Backend

This is the backend of a full-stack application for managing a personal book collection, built using Express and Node.js. The backend provides a RESTful API to handle book data, supporting operations like retrieving, adding, deleting, and importing books from CSV files. It uses MongoDB  for data storage.

## Features

- RESTful API for managing books
  - GET `/api/book/get-book`: Retrieve all books
  - POST `/api/book/update-book`: Retrieve a specific book
  - POST `/api/book/add-book`: Add a new book or by CSV
  - DELETE `/api/book/delete-book/:id`: Remove a book
- CSV upload and processing to import books into the database
- Input validation and error handling
- Basic user authentication 
- Read status for books

## Data Model

Each book contains the following fields:
- **Title**
- **Author**
- **Publication Year**
- **Genre**
- **Brief Description**
- **Read Status**: "To Read", "Reading", or "Completed"

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/Abdul-Rehman67/BCS-Backend
    cd BCS-Backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. .env is already there for task purpose

4. Start the application:
    ```bash
    npm start
    ```

5. Your API will be running at `http://localhost:5000`.

## API Endpoints

   - GET `/api/book/get-book`: Retrieve all books by user
  - POST `/api/book/update-book`: Update a specific book
  - POST `/api/book/add-book`: Add a new book or by CSV
  - DELETE `/api/book/delete-book/:id`: Remove a book

## CSV File Import

To import books via a CSV file:
- The CSV should contain the following columns: `title`, `author`, `publicationYear`, `genre`, `description`.
- Use the `/api/books/add-book` endpoint to upload the CSV.

## Error Handling

The API provides clear error messages for invalid requests and inputs, such as missing required fields or invalid data types.

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework for Node.js
- **MongoDB** or **PostgreSQL** - Database for storing book data
- **JWT** - JSON Web Tokens for user authentication (optional)

## License

This project is licensed under the MIT License.

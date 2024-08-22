# Social Network API

## Description

This project is a back-end API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage a friend list. The API is built using Node.js, Express.js, MongoDB, and Mongoose. It allows for the creation, retrieval, updating, and deletion of users, thoughts, reactions, and friends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running the following command:

   ```bash
   npm install

Ensure MongoDB is running on your machine or provide a MongoDB Atlas connection string in a .env file.

Seed the database with initial data by running the following command:
npm run seed

Start the server with:
npm start

## Usage

After starting the server, you can interact with the API using Insomnia, Postman, or any other API client. The base URL for all endpoints is http://localhost:3001/api.

## API Endpoints

### Users

GET /api/users: Retrieve all users.
GET /api/users/:userId: Retrieve a single user by its _id along with populated thought and friend data.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update a user by its _id.
DELETE /api/users/:userId: Delete a user by its _id (including associated thoughts).
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
### Thoughts

GET /api/thoughts: Retrieve all thoughts. (Thought IDs are displayed in the response.)
GET /api/thoughts/:thoughtId: Retrieve a single thought by its _id.
POST /api/thoughts: Create a new thought and associate it with a user.
PUT /api/thoughts/:thoughtId: Update a thought by its _id.
DELETE /api/thoughts/:thoughtId: Delete a thought by its _id.
### Reactions

POST /api/thoughts/:thoughtId/reactions: Create a reaction for a specific thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction by its reactionId.

## Walkthrough Video
*https://drive.google.com/file/d/1zCblVihxkXoU2RMHQrs9M8XkmWMfj0ji/view?usp=drive_link*
A walkthrough video demonstrating the functionality of the API can be found here. This video includes:

How to start the server.
Testing of GET routes for all users and thoughts.
Testing of GET routes for single user and thought.
Testing of POST, PUT, and DELETE routes for users and thoughts.
Testing of POST and DELETE routes for a user's friend list.
Testing of POST and DELETE routes for reactions to thoughts.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
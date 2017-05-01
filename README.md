# README

Cahootz is collaborative live messaging platform inspired by Slack and was built end-to-end in 2 weeks.

Live Site:[https://lax-app.herokuapp.com/#/]

## Implementation

Cahootz's UI and single-page architecture were built with React.js and Ruby on Rails. Messaging data is stored in a Postgres database, while AWS hosts all user images.

In addition, the app also utilizes the following:
- Redux
- BCrypt
- Pusher
- Figaro
- Paperclip
- jBuilder
- react-modal

## Features

The application is composed of the following main features:

### Authentication

Cahootz utilizes BCrypt in order to hash user passwords, saving only the encrypted user-data to the server. A cookie storing a hashed token is used to keep track of the user's current session.  Without a matching session token, the user is redirected to the login page to authentication.  

### Live Chat

This app utilizes the Pusher API in order to maintain a WebSocket, TCP-based protocol connection, which enables bi-directional communication between the server and the client.

### Channels

Conversations are organized in channels, which are public and can be subscribed to by users.

### Direct Messages

Cahootz allows for multi-person private, direct messaging.

## Future Release

* [X] User Avatar Upload
* [X] Notifications
* [X] Teams/Groups
* [X] Message Formatting
* [X] Emoticon Reactions
* [X] GIF Support

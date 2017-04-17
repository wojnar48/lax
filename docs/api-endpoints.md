# API Endpoints

## HTML API

#### Root
- `GET /` - loads root element of Lax

## JSON API

### Chatrooms (channels)
- `GET /api/chatrooms` - retrieve all chatrooms
- `POST /api/chatrooms` - create a chatroom
- `DELETE /api/chatrooms/:id` - delete a chatroom

### Messages
- `GET /api/messages` - retrieve all messages
- `GET /api/users/:user_id/messages` - retrieve all messages of a user
- `GET /api/chatrooms/:chatroom_id/messages` - retrieve all messages of a chatroom
- `POST /api/messages/` - create a message
- `DELETE /api/messages/:id` - delete a message

### ChatroomUsers (subsciptions)
- `POST /api/chatrooms/:chatroom_id/chatroom_users` - create chatroom/user link
- `DELETE /api/chatrooms/:chatroom_id/chatroom_users` - destory chatroom/user link

### Session
- `POST /api/session` - create a session (login)
- `DELETE /api/session` - destroy a session (logout)

### Users
- `GET /api/users` - retrieve all users
- `GET /api/chatroom/:chatroom_id/users` - retrieve all users in a chatroom
- `POST /api/users` - create a user (signup)
- `DELETE /api/users/:id` - delete a user

# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null, indexed, unique
session_token   | string    | not null, indexed, unique


## chatrooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | optional
private     | bool      | default: false

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null, foreign key (references users), indexed
body        | text      | not null

## chatroom_users (subscriptions)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null, foreign key (references channels), indexed

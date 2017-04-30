json.id @chatroom.id
json.name @chatroom.name
json.members @chatroom.users do |user|
  json.id user.id
  json.username user.username
end

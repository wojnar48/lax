json.id @chatroom.id
json.name @chatroom.name
json.description @chatroom.description
json.private @chatroom.private
json.users @chatroom.users do |user|
  json.id user.id
  json.username user.username
end

json.array! @chatrooms do |chatroom|
  json.id chatroom.id
  json.name chatroom.name
  json.private chatroom.private
  json.description chatroom.description
  json.users chatroom.users do |user|
    json.id user.id
    json.username user.username
  end
end

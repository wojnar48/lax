json.array! @chatrooms do |chatroom|
  json.id chatroom.id
  json.name chatroom.name
  json.description chatroom.description
end

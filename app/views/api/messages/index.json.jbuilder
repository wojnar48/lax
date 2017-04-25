json.array! @messages do |message|
  json.id message.id
  json.body message.body
  json.userId message.user_id
  json.chatroomId message.chatroom_id
end

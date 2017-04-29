class MessageRelayJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast 'messages', {
      id: message.id,
      body: message.body,
      author: message.user.username,
      date: message.created_at,
      userId: message.user_id,
      chatroomId: message.chatroom_id
    head :ok
    }
  end
end

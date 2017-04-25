ActiveRecord::Base.transaction do
  User.destroy_all
  Chatroom.destroy_all
  ChatroomUser.destroy_all
  Message.destroy_all

  user1 = User.create!(username: 'guest', password: 'password')

  chatroom = Chatroom.create!(
    name: 'general',
    description: 'general discussion'
  )

  ChatroomUser.create!(
    chatroom_id: chatroom.id,
    user_id: user1.id
  )

  Message.create!(
    body: 'first message in general',
    chatroom_id: chatroom.id,
    user_id: user1.id
  )

  user2 = User.create!(username: 'guest2', password: 'password')

  5.times do
    chatroom_name = Faker::Hipster.word
    chatroom_desc = Faker::Hipster.sentence

    chatroom = Chatroom.create!(
      name: chatroom_name,
      description: chatroom_desc
    )

    ChatroomUser.create!(
      chatroom_id: chatroom.id,
      user_id: user2.id
    )

    rand(10).times do
      sentence = Faker::Hipster.sentence
      Message.create!(
        body: sentence,
        chatroom_id: chatroom.id,
        user_id: user2.id
      )
    end
  end
end

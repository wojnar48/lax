ActiveRecord::Base.transaction do
  User.destroy_all
  Chatroom.destroy_all
  ChatroomUser.destroy_all
  Message.destroy_all
  
  user = User.create!(username: 'guest', password: 'password')

  5.times do
    chatroom_name = Faker::Hipster.word
    chatroom_desc = Faker::Hipster.sentence

    chatroom = Chatroom.create!(
      name: chatroom_name,
      description: chatroom_desc
    )

    ChatroomUser.create!(
      chatroom_id: chatroom.id,
      user_id: user.id
    )

    rand(10).times do
      sentence = Faker::Hipster.sentence
      Message.create!(
        body: sentence,
        chatroom_id: chatroom.id,
        user_id: user.id
      )
    end
  end
end

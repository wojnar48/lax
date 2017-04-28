ActiveRecord::Base.transaction do
  User.destroy_all
  Chatroom.destroy_all
  ChatroomUser.destroy_all
  Message.destroy_all

  user1 = User.create!(username: 'guest', password: 'password')
  user2 = User.create!(username: 'guest2', password: 'password')

  chatroom = Chatroom.create!(
    name: 'general',
    description: 'general discussion'
  )

  ChatroomUser.create!(
    chatroom_id: chatroom.id,
    user_id: user1.id
  )

  3.times do
    rand_user = [user1, user2].sample
    chatroom_name = Faker::Hipster.word
    chatroom_desc = Faker::Hipster.sentence

    chatroom = Chatroom.create!(name: chatroom_name, description: chatroom_desc)
    chatroom.chatroom_users.create!(user_id: rand_user.id)

    rand(30).times do
      rand_user = [user1, user2].sample
      sentence = Faker::Hipster.sentence
      rand_user.messages.create!(body: sentence, chatroom_id: chatroom.id)
    end
  end
end

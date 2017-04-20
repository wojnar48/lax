ActiveRecord::Base.transaction do
  User.destroy_all
  User.create!(username: 'guest', password: 'password')

  Chatroom.destroy_all
  Chatroom.create!(name: 'general')
  Chatroom.create!(name: 'random')
  Chatroom.create!(name: 'january-2017')
end

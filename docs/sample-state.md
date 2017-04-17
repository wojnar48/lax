}
  currentUser: {
      id: 1,
      username: 'test-user',
      email: 'test-user@test.com',
      errors: []
    },

    chatrooms: {
      1: {
        name: '2017-cohort',
        description: 'to err is divine',
        private: false
      },

      2: {
        name: '',
        private: true
      }
    },

    messages: {
      1: {
        id: 3,
        user_id: 1,
        channel_id: 1,
        content: 'turtles are great!'
      },

      2: {
        id: 5,
        user_id: 2,
        channel_id: 1,
        content: 'let's hear it for the turtles!'
      }
    },

    users: {
      1: {
        id: 2,
        username: 'Haskell Curry',
        email: 'curry_2@yahoo.com'
      },

      2: {
        id: 3,
        username: 'Stefan Banach',
        email: 'banach@banach.pl!'
      }
    }
}

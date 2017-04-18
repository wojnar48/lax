# Lax

**Note:** Add link to production site

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://lax-app.herokuapp.com
[trello]: https://trello.com/b/fJ8rfaQo/lax

## Minimum Viable Product

Lax is a web application inspired by Slack built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] New account creation, login, and guest/demo login
- [ ] Live Chat
- [ ] Channels
- [ ] Direct Message
- [ ] Teams or multi-person DM
- [ ] Production README [link](#)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication. Users can login/sign with fully functional forms. Users can reach login form from signup page and vice versa.

### Phase 2: Channels Model, Component and Public Channel List (2 days)

**Objective:** Users can browse, create, join public channels. The list of public channels is visible in the channels component.

### Phase 3:  Messages Model, and Component, Live Chat (3 days)

**Objective:** On entering public channels users can see messages relevant to that channel. Messages are displayed in the main chat display component. Users can add their own messages via the message input form. Live chat features will be implemented using Action Cable.

### Phase 4: DM/Team Messages, DM List (2 day)

**Objective:** Users can create Direct Messages (Private Channels) and add members on creation either via search input or from list of registered users. Other users cannot see or join private chats of other users.


### Bonus Features (TBD)
- [ ] Add empoticon and giphy assets
- [ ] Search Messages
- [ ] Notifications

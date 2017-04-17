## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HeaderContainer**
  - Chatroom Name
  - Chatroom Member Count
  - Chatroom Description

**NavBarContainer**
  - NavBar Logo/Username
  - Chatroom List
    - Chatroom Item
  - DM List (Private Chatroom)
    - Add DM From (on select)
      - DM Search Input
      - DM User Item
  - DM Item

**MessagesContainer**
  - Messages List
    - Message Item
    - Message Form

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "NavbarContainer" |
| "/login" | "AuthFormContainer" |
| "/signup" | "AuthFormContainer" |
| "/chat" | "MessagesContainer" |

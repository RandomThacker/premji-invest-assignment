# Premji Invest Assignment
![image](https://github.com/user-attachments/assets/5e634cd4-9cc5-40d2-babb-c23f8aefef2b)

## Project Overview

Premji Invest Assignment, Socials is a fully responsive social platform designed for easy microblogging. The platform features a dynamic and user-friendly interface, enabling users to create, like, and comment on posts, as well as interact with friends through a collapsible chat window.

### Features

- **Create Post Box**: Create a tweet and flex to friends.
- **Post Cards**:
  - Delete feature under the three dots menu.
  - Like and comment feature.
  - Modal to display the post fully along with comments.
- **Comments**:
  - Each comment can be liked.
  - Nested commenting is supported.
- **Home Screen**:
  - Collapsible chat window.
  - Collapsible friend list for improved UX.
  - Smooth animations to reveal the friend list.
  - Separate chat window opens in the bottom right corner for chatting, keeping the main content distraction-free.
- **Navigation Bar**:
  - Dismissible notifications dropdown.
  - Profile dropdown.
- **Messaging**:
  - Fully functional messaging system with timestamps and message previews.
  - Responsive design with a distinct layout for mobile devices.
  - Design inspired by Instagram's mobile web app.

## Tech Stack

- **Frontend**:

  - React: ^18.2.0
  - Ant Design (antd): ^5.17.3
  - Tailwind CSS: ^3.4.3

- **Utilities**:

  - Moment: ^2.30.1
  - Tailwind Merge: ^2.3.0
  - @ant-design/icons: ^5.3.7
  - @tabler/icons-react: ^3.5.0

- **Build Tools**:

  - Vite: ^5.2.0

- **Linting and Formatting**:

  - ESLint: ^8.57.0
  - Prettier: ^3.2.5
  - Prettier Plugin TailwindCSS: ^0.5.14
  - ESLint Plugins:
    - react: ^7.34.1
    - react-hooks: ^4.6.0
    - react-refresh: ^0.4.6

- **Type Definitions**:

  - @types/react: ^18.2.66
  - @types/react-dom: ^18.2.22

- **CSS Processing**:
  - PostCSS: ^8.4.38
  - Autoprefixer: ^10.4.19

## Routes Guide

The application uses React Router for navigation. Below are the defined routes:

- **Landing Page**: `/`

  - Component: `LandingPage`
  - Description: The main landing page of the application.
  - Error Page: `ErrorPage`

- **Mobile Messaging Page**: `/mobilemessages`

  - Component: `MobileMessagingPage`
  - Description: The page for viewing all mobile messages.

- **Home Page**: `/home`

  - Component: `Home`
  - Description: The main home page where users see the feed and interact with posts.

- **Mobile Chat Page**: `/chat/:id`

  - Component: `MobileChatPage`
  - Description: The page for individual chat sessions, identified by `id`.

- **Error Page**: Used as the error element in case a route is not found or an error occurs.

## Installation and Running Locally

Follow these steps to run the project locally:

1. **Clone the repository**:

   ```sh
   git clone <repository-url>
   cd premji-assignment
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

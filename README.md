# Bettermode Post List Clone

## Project Overview

This project is a responsive web application built using Vite, React, TypeScript, and Tailwind CSS. It serves as a clone of Bettermode’s post list functionality. The application features detailed views, interactive elements, and integrates with GraphQL for data fetching and mutations using Apollo Client for GQL handling and data caching.

### Home Page

- The home page fetches posts with the necessary data and displays them in a gallery format.
- A "Show More" button is available to load additional posts, implementing pagination.

### Post Details Page

- Each post has its own page with more details.
- Users can like and unlike the post.

## Features

1. **Post Gallery**: Displays a paginated list of posts in a gallery format, with a “Show More” button to load additional posts.
2. **Post Details**: Users can click on a post to view its details on a separate page using React Router for navigation.
3. **Like Feature**: Integrates a “Like” button on both the gallery view and the detail page of each post, displaying the current number of likes and updating this count upon user interaction.
4. **GraphQL Integration**: Fetches data and executes mutations using GraphQL to manage posts and like counts.

## Tech Stack

- **Framework/Libraries**: Vite, React (with functional components and hooks), TypeScript, Tailwind CSS.
- **Routing**: React Router for all navigations within the application.
- **Data Management**: GraphQL for fetching data and performing mutations.
- **Authentication**: Hardcoded access token in a `.env` file.

## Prerequisites

1. **Create a Site**: Start by creating a site on [app.bettermode.com](https://app.bettermode.com/).
2. **Explore the Product**: Engage with the platform by creating posts and customizing blocks to display a post list.
3. **Investigate Using Dev Tools**: Use developer tools to dive deeper into the post list functionality.
4. **Analyze Post List Mechanics**: Gain a comprehensive understanding of how posts are fetched and rendered in the post list.

## Installation and Setup

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Steps

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/bettermode-post-list-clone.git
   cd bettermode-post-list-clone
   ```

2. **Install dependencies**:

   ```sh
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
   ```

3. **Run the application**:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Build the application**:

   ```sh
   npm run build
   # or
   yarn build
   ```

5. **Preview the production build**:
   ```sh
   npm run serve
   # or
   yarn serve
   ```

## Project Structure

src/
├── components/
│ ├── PostCard.tsx
│ ├── PostDetail.tsx
│ └── PostList.tsx
├── hooks/
│ ├── usePosts.ts
│ └── usePost.ts
├── pages/
│ ├── HomePage.tsx
│ └── PostPage.tsx
├── App.tsx
├── main.tsx
└── index.css

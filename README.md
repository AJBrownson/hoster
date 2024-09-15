# Hoster | AI Social Media Scheduling Tool

## Overview

This is an AI-powered social media scheduling tool built using **Next.js** and **Tailwind CSS**. It allows users to schedule posts across multiple platforms such as Facebook, Twitter, Instagram, and LinkedIn, with the added benefit of AI-generated content suggestions like captions and hashtags. The tool is designed to streamline social media management and optimize post timing based on engagement analytics.

## Features

- **AI-Generated Content**: Automatically generate captions and hashtags using AI (OpenAI API).
- **Cross-Platform Scheduling**: Schedule posts to multiple social media platforms.
- **Custom Post Timing**: Choose specific dates and times for posts.
- **Real-Time Notifications**: Receive notifications when posts are successfully published.
- **Post Analytics**: View post engagement metrics after publishing.
- **User Authentication**: Secure login via OAuth with Google, Facebook, Twitter, etc.
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS.

## Tech Stack

### Frontend
- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
  
### Backend
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Backend API for post scheduling and management.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for storing user data and post schedules.
- [Prisma](https://www.prisma.io/) - ORM for database management.

### AI Integration
- [OpenAI API](https://openai.com/api/) - AI-powered content suggestions for posts.

### Social Media APIs
- [Facebook Graph API](https://developers.facebook.com/docs/graph-api/)
- [Twitter API / X API](https://developer.twitter.com/)
- [Instagram API](https://developers.facebook.com/docs/instagram-api/)
- [LinkedIn API](https://docs.microsoft.com/en-us/linkedin/)

### Scheduling & Notifications
- [Node-Cron](https://github.com/node-cron/node-cron) - Task scheduling for post publication.
- [Firebase](https://firebase.google.com/) - Real-time notifications.

## Getting Started

### Prerequisites
- **Node.js** (>= 16.x)
- **npm** or **yarn**
- **MongoDB** or any compatible database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/social-media-scheduler.git
   cd social-media-scheduler
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```bash
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   NEXTAUTH_SECRET=your_nextauth_secret
   DATABASE_URL=your_database_url
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Deployment

You can deploy this project to **Vercel** by pushing your code to GitHub and connecting the repository to your Vercel account. Alternatively, you can deploy to **AWS**, **DigitalOcean**, or other cloud providers using **Docker**.

## Roadmap

- [ ] Add support for additional social media platforms.
- [ ] Integrate advanced AI models for engagement predictions.
- [ ] Implement analytics dashboards for user insights.
- [ ] Add drag-and-drop scheduling interface.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```
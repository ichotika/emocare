This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Project instruction
For developers setting things up for the first time, please follow these steps:

1. Copy and paste the .env file to the root folder.
2. In the terminal, run npm i.
3. Run npm run dev to launch the app.

Adhere to the following folder structure:

-The app directory contains pages and APIs. To create a new route, simply create a folder with the desired name and add page.jsx and layout.jsx files within.

-layout.jsx is used to organize the page layout. If the header/footer components are in a different location than the main app, create a layout.jsx in your route folder.

-page.jsx acts as a child of layout.jsx, and it's essentially equivalent to the <main> tag.

-The api folder is meant for creating your own APIs, e.g., GET/POST requests to MongoDB. To set up an API endpoint like localhost/api/result, create a result folder within the api directory and add a route.js file to define the API. If you wish to customize the ID of the API route, create a folder named [id] and add a route.js file to customize that specific API.

-The components folder is intended for individual components. Please avoid coding components directly within pages. As the project grows, this can make the codebase harder to read.

-The lib folder is designated for defining calculations and functionalities of our app.

-The models folder is used to set up data structures and define how our data collections appear (e.g., setting the 'name' field as a string type).

-The styles folder is for styling our app. It's compatible with Tailwind CSS as well.

Next instruction
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

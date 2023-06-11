<!-- how to operate NextJS and prisma -->
<!-- repo link: https://github.com/Dango3010/test-app/blob/main/skeleton/README.md?plain=1 -->


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Commands run to reset/seed the database
npx prisma migrate dev (apply all changes made to DB Schema) (optional)

npx prisma db push --force-reset (deletes the existent db)

npx prisma db push (creates the db based on the schema)

npx prisma db seed (seeds the db)

note: gotta have: <"type": "module"> in package.json to do this; however, we need to delete <"type": "module"> for the server to work

to view prisma database on the browser, run: npx prisma studio

## Summary of what to do before starting the server
1. cd into skeleton folder
2. run: npm i
3. run: npm install prisma --save-dev (if necessary)
4. seed the database (above steps)
5. remove <"type": "module"> from the package.json file (run 'npm update' to update the package.json file)
6. start the server: npm run dev
7. start the database server: npx prisma studio (optional)

Note: make sure to use nvm version v16.19.1 or above
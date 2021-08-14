# nextjs-mongodb-passport
Starter repository for a next js with a working mongodb connection middleware and a passport implementation.  Pages are built with Tailwindcss (Feel free to make your own login and signup)

# installation

Run `npm install` and `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest` (if you want to use the prebuilt pages).
Start the server with `npm run dev` and checkout the pages

# setup

All database code is written in the `/dao` folder.  You can use whatever methods you want here.  Auth and DB are implemented as middleware

# Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftagemehta%2Fnextjs-mongodb-passport&env=APP_DB_URI,APP_NS,SESSION_SECRET)
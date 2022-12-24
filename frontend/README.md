# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

This installs `nvm` (Node.js Version Manager).

```sh
cd frontend
nvm install 16
```

This changes directory to `frontend` then installs Node.js version 16 (It comes along with `npm` (Node Package Manager) installed).

```sh
npm install
```

This installs frontend app dependencies (libraries)

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

[http://localhost:3000](http://localhost:3000)

Visit local URL. **Important: use browser's incognito mode to see app with CSS**

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

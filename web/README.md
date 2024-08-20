# Contentstack Astro web application

## 🚀 About

An example site to list football (Soccer!) entries from Contentstack.

The content can be generated via the code in the /management directory.

You will need an `.env` file:

```
CONTENTSTACK_API_KEY=stack_api_key
CONTENTSTACK_DELIVERY_TOKEN=delivery_token
CONTENTSTACK_ENVIRONMENT=development_etc
CONTENTSTACK_BRANCH=main_etc
CONTENTSTACK_REGION=eu
CONTENTSTACK_API_HOST=eu-api.contentstack.com
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

I've used Bun, but you can use NPM/Node.

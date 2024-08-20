# Contentstack football fixtures content

## 🚀 About

Scripts to generate football (Soccer!) entries in Contentstack.

You will need the following `.env` file:

```
HOST=eu-api.contentstack.com
API_KEY=stack_api_key
USER_EMAIL=login_email_address
USER_PASSWORD=login_passowrd
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                |
| :-------------------- | :------------------------------------ |
| `bun install`         | Installs dependencies                 |
| `bun run addteams`    | Adds teams from Open Football Data    |
| `bun run addfixtures` | Adds fixtures from Open Football Data |

I've used Bun, but you can use NPM/Node.

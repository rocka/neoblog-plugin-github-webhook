# GitHub Webhook Plugin for Neoblog

Reload server when receive GitHub webhook.

## What does this plugin actually does

1. sync the repo and install dependencies

```bash
git fetch --all
git git reset --hard origin/master
npm ci
```

2. reload the server

```js
neoblog.reload();
```

## Configuration

in NeoBlog `config.js`:

```js
const GitHubWebhookPlugin = require('@neoblog/plugin-github-webhook');

module.exports = {
    // ...
    plugins: [
        // ...
        new GitHubWebhookPlugin({
            secret: 'a-very-long-secret-that-should-be-generated',
            path: '/path/to/webhook',
            localRef: 'origin/master'
        })
        // ...
    ]
    // ...
};
```

then setup webhook in GitHub porject settings.

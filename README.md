# Gogs Webhook Plugin for Neoblog

Reload server when receive Gogs webhook.

## What does this plugin actually do

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
const GogsWebhookPlugin = require('@neoblog/plugin-gogs-webhook');

module.exports = {
    // ...
    plugins: [
        // ...
        new GogsWebhookPlugin({
            secret: 'a-very-long-secret-that-should-be-generated',
            path: '/path/to/webhook',
            localRef: 'origin/master'
        })
        // ...
    ]
    // ...
};
```

then setup webhook in Gogs porject settings.

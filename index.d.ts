declare interface GitHubWebhookPluginOpt {
    /**
     * secret in webhook config. **NOT NULL**
     */
    secret: string;
    /**
     * webhook POST pathname. default to `'/webhook/github'`
     */
    path: string;
    /**
     * target local git branch. default to `'origin/master'`
     */
    localRef: string;
}

declare class GitHubWebhookPlugin {
    constructor(opt: GitHubWebhookPluginOpt)
}

export = GitHubWebhookPlugin;

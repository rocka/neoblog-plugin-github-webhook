declare interface GogsWebhookPluginOpt {
    /**
     * secret in webhook config. **NOT NULL**
     */
    secret: string;
    /**
     * webhook POST pathname. default to `'/webhook/gogs'`
     */
    path: string;
    /**
     * target local git branch. default to `'origin/master'`
     */
    localRef: string;
}

declare class GogsWebhookPlugin {
    constructor(opt: GogsWebhookPluginOpt)
}

export = GogsWebhookPlugin;

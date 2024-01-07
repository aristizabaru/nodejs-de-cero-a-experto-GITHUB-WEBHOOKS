import { Request, Response } from "express";
import { GitHubService } from "../services/github.serv";
import { DiscordService } from "../services/discord.serv";

export class GitHubController {
    constructor(
        private readonly githubService: GitHubService,
        private readonly discordService: DiscordService
    ) { }

    webhookHandler = (req: Request, res: Response) => {

        const githubEvent = req.header('x-github-event') ?? 'unknown'
        const signature = req.header('x-hub-signature-256') ?? 'unknown'
        const payload = req.body
        let message: string

        switch (githubEvent) {
            case 'star':
                message = this.githubService.onStar(payload)
                break;
            case 'issues':
                message = this.githubService.onIssue(payload)
                break;
            default:
                message = `Unknown event ${githubEvent}`
                break;
        }

        this.discordService.notify(message)
            .then(() => res.status(200).send('Accepted'))
            .catch(() => res.status(500).json({ error: 'Internal server error' }))
    }
}
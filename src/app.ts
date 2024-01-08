import express from 'express'
import { envs } from './config'
import { GitHubController } from './presentation/github/controller'
import { GitHubService } from './presentation/services/github.serv'
import { DiscordService } from './presentation/services/discord.serv'
import { GithubSha256Middleware } from './presentation/middlewares/github-sha256.middleware'

(async () => {
    await main()
})()

async function main() {
    const app = express()
    const githubService = new GitHubService()
    const discordService = new DiscordService()
    const gitHubController = new GitHubController(githubService, discordService)

    // Middlewares
    app.use(express.json())
    app.use(GithubSha256Middleware.verifySignature)

    // Router
    app.post('/api/github', gitHubController.webhookHandler)

    app.listen(envs.PORT, () => {
        console.log(`App runnig on port ${envs.PORT}`)
    })
}
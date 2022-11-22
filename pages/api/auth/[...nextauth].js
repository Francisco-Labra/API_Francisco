import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
          }),
        //DiscordProvider({
            //clientId: process.env.DISCORD_CLIENT_ID,
            //clientSecret: process.env.DISCORD_CLIENT_SECRET
          //})//
    ]
})
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

  //GITHUB AUTH
  const githubClientId = process.env.GITHUB_ClientID
  const githubClientSecret = process.env.GITHUB_SECRET

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GithubProvider({
      clientId: githubClientId ,
      clientSecret: githubClientSecret,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
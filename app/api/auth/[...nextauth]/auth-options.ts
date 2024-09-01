import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const fakeUser = {
                    id: "1",
                    name: "J Smith",
                    email: "test@example.com",

                }
              
                if (credentials?.email === 'testh@example.com' &&
                    credentials?.password === '123') {
                    return fakeUser
                } else {
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        
    },
   
}

export default NextAuth(authOptions)

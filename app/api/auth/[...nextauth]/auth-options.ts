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
                    email: "jsmith@example.com",

                }

                if (credentials?.email === 'jsmith@example.com' &&
                    credentials?.password === 'password123') {
                    return fakeUser
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
     
    },
    pages: {
        signIn: '/modal', // คุณสามารถกำหนดหน้าล็อกอินที่ต้องการได้
    },
}

export default NextAuth(authOptions)

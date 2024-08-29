
import { getCsrfToken } from "next-auth/react"
import React from "react"

export default async function SignIn() {
    const csrfToken = await getCsrfToken()

    return (
        <div>
            <h1>Sign In</h1>
            <form method="post" action="/api/auth/signin/email">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken || ''} />
                <label>
                    Email address
                    <input type="email" id="email" name="email" required />
                </label>
                <button type="submit">Sign in with Email</button>
            </form>
        </div>
    )
}

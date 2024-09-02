import { getCsrfToken } from 'next-auth/react';

export default async function SignInPage() {
    const csrfToken = await getCsrfToken();

    return (
        <form  action="/api/auth/signin/email" method="post"> 
            <label>
                Email address
                <input required id="email" name="email" type="email"  />
            </label>
            <input name="csrfToken" type="hidden" value={csrfToken} />
            <button type="submit">Sign in with Email</button>
        </form>
    )
}

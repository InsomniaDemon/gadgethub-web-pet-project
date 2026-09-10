const BASE_URL = 'http://localhost:8080/api/auth';

export async function checkCredentials(login: string, password: string): Promise<boolean> {
    const path = `/login`

    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ login, password }),
    })

    if (!response.ok) {
        throw new Error(`Invalid credentials`)
    }

    return await response.json()
}
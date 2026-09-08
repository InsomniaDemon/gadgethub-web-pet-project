const BASE_URL = 'http://localhost:8080/api/auth';

async function checkCredentials(login: string, password: string): Promise<boolean> {
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

export async function logIn(login: string, password: string): Promise<void> {
    const isValid = await checkCredentials(login, password)
    if (isValid) {
        localStorage.setItem("isLoggedIn", "true")
    }
}

export function isLoggedIn(): boolean {
    return localStorage.getItem("isLoggedIn") === "true"
}

/*function logout() {
    localStorage.removeItem("isLoggedIn")
}*/
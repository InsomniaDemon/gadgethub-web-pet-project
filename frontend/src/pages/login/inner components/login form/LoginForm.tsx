import "./LoginForm.scss"
import {useState} from "react"
import * as React from "react"
import {useNavigate} from "react-router-dom"
import {checkCredentials} from "../../api/Login.ts"
import {useAuth} from "../../../../shared/contexts/AuthContext.tsx"
import {ApiError} from "../../types.ts";

function LoginForm() {
    const { setIsLoggedIn, logIn } = useAuth()
    const navigate = useNavigate()

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState<string | null>(null)


    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        setError(null)

        try {
            if(await checkCredentials(login, password)) {
                logIn()
                setIsLoggedIn(true)
                navigate("/")
            }
        } catch (err) {
            setError(
                err instanceof ApiError
                    ? err.message
                    : 'Something went wrong. Please try again.'
            );
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="wrapper">
                <p>Логин</p>
                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <span>*</span>
            </div>
            <div className="wrapper">
                <p>Пароль</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span>*</span>
            </div>

            <button type="submit">Войти</button>

            {error && <p className="errorText">{error}</p>}
        </form>
    )
}

export default LoginForm

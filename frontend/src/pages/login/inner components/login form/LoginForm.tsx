import "./LoginForm.scss"
import {useState} from "react";
import {logIn} from "../../api/Login.ts"
import * as React from "react";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(await logIn(login, password)) {
                navigate("/")
                window.location.reload()
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Логин</p>
                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div>
                <p>Пароль</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Войти</button>
        </form>
    )
}

export default LoginForm

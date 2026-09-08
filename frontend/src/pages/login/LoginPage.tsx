import styles from "./LoginPage.module.scss"
import LoginForm from "./inner components/login form/LoginForm.tsx";

function LoginPage() {
    return (
        <div className={styles.login}>
            <h1>Добро пожаловать!</h1>
            <LoginForm/>
        </div>
    )
}

export default LoginPage

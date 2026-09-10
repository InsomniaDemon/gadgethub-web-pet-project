import {useAuth} from "../../shared/contexts/AuthContext.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


function CartPage() {
    const { isLoggedIn } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login")
        }
    },[isLoggedIn])

    return (
        <>Cart</>
    )
}

export default CartPage

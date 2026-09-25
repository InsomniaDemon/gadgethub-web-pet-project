import styles from "./DeletePopup.module.scss"

function DeletePopup({text}: {text: string}) {
    return (
        <div className={styles.popup}>
            <div className={styles.bg}/>
            <div className={styles.card}>
                <button className={styles.cross}>
                    <img src="src/assets/images/icons/cross.png" alt="cross image"/>
                </button>
                <p>{text}</p>
                <div className={styles.buttons}>
                    <button className={styles.pinkButton}>Отмена</button>
                    <button className={styles.blueButton}>Да, удалить</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup
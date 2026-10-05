import styles from "./DeletePopup.module.scss"
import cross from "../../../../assets/images/icons/cross.png"

function DeletePopup({text, onDelete, close}: {text: string, onDelete: () => void, close: () => void}) {
    const handleDelete = () => {
        onDelete()
        close()
    }

    return (
        <div className={styles.popup}>
            <div className={styles.bg}/>
            <div className={styles.card}>
                <button className={styles.cross} onClick={close}>
                    <img src={cross}  alt="cross image"/>
                </button>
                <p>{text}</p>
                <div className={styles.buttons}>
                    <button className={styles.pinkButton} onClick={close}>Отмена</button>
                    <button className={styles.blueButton} onClick={handleDelete}>Да, удалить</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup
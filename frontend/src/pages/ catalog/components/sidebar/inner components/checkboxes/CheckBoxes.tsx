import styles from "./CheckBoxes.module.scss"

function CheckBoxes({toShow}: {toShow: string[]}) {

    return (
        <div className={styles.checkboxes}>
            {toShow.map(checkbox =>
                <div>
                    <input type="checkbox" name={checkbox} value={checkbox}/>
                    <span>{checkbox}</span>
                </div>
            )}
        </div>
    )
}

export default CheckBoxes

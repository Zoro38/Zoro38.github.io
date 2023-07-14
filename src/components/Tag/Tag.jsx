import styles from './Tag.module.css'

export default function Tag({title, color}) {
    return (
        <div className={styles.tag} style={{backgroundColor: color}}>{title}</div>
    )
}
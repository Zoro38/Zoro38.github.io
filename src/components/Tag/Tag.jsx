import styles from './Tag.module.css'

export default function Tag({title, color}) {
    return (
        <div className={styles.tag}>
            <div className={styles.background} style={{backgroundColor: color}}></div>
            <div>{title}</div>
        </div>
    )
}
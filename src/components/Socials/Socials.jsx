import styles from "./Socials.module.css"

export default function Socials() {
    return (
        <div>
            <a href="https://linkedin.com/in/yasyildiz"
               target="_blank"
               rel="noopener noreferrer">
                <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className={styles.linkedinIcon}
                />
            </a>
            <a href="https://github.com/Zoro38"
               target="_blank"
               rel="noopener noreferrer">
                <img
                    src="/github.svg"
                    alt="LinkedIn"
                    className={`${styles.githubIcon} ${styles.darkInvert}`}
                />
            </a>
            <a href="mailto:y.yildiz@outlook.de">
                <img
                    src="/mail.svg"
                    alt="E-Mail"
                    className={`${styles.mailIcon} ${styles.darkInvert}`}
                />
            </a>
        </div>
    )
}
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
                    width="36"
                    height="32"
                />
            </a>
            <a href="https://github.com/Zoro38"
               target="_blank"
               rel="noopener noreferrer">
                <img
                    src="/github.svg"
                    alt="LinkedIn"
                    className={styles.gitlabLogo}
                    width="32"
                    height="32"
                />
            </a>
        </div>
    )
}
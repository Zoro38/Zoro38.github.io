import styles from "./Skills.module.css";
import Tag from "../Tag/Tag.jsx";

const skills = [
    {
        title: "Languages",
        color: "#4FC0D09F",
        tags: ["Kotlin", "Java", "Swift", "JavaScript", "Python"]
    },
    {
        title: "Frameworks",
        color: "#FF66669F",
        tags: ["Jetpack Compose", "SwiftUI", "React", "Spring Boot"]
    },
    {
        title: "Infrastructure",
        color: "#A2CDB09F",
        tags: ["Docker", "Kubernetes", "AWS", "HELM"]
    },
    {
        title: "Tools",
        color: "#F1C27B9F",
        tags: ["Git", "GitLab CI"]
    },
    {
        title: "Agile",
        color: "#A76F6F9F",
        tags: ["Scrum", "SAFe"]
    },
    {
        title: "Other",
        color: "#FFA41B9F",
        tags: ["OAuth2"]
    }
]

export default function Skills() {
    return (
        <div className={styles.skills}>
            {skills.map(category => {
                return <div>
                    <h5>{category.title}</h5>
                    {category.tags.map(tag => {
                        return <Tag title={tag} color={category.color}/>
                    })}
                </div>
            })}
        </div>
    )
}
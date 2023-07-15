import styles from "./Skills.module.css";
import Tag from "../Tag/Tag.jsx";

const skills = [
    {
        title: "Platforms",
        color: "#525FE1",
        tags: ["Android", "iOS", "Web", "JVM"]
    },
    {
        title: "Languages",
        color: "#4FC0D0",
        tags: ["Kotlin", "Java", "Swift", "JavaScript", "Python"]
    },
    {
        title: "Frameworks",
        color: "#FF6666",
        tags: ["Jetpack Compose", "SwiftUI", "React", "Spring Boot"]
    },
    {
        title: "Testing",
        color: "#D25380",
        tags: ["JUnit", "Spock", "Espresso", "Selenium", "BDD"]
    },
    {
        title: "Infrastructure",
        color: "#A2CDB0",
        tags: ["Docker", "Kubernetes", "AWS", "HELM"]
    },
    {
        title: "Tools",
        color: "#F1C27B",
        tags: ["Git", "GitLab CI"]
    },
    {
        title: "Agile",
        color: "#A76F6F",
        tags: ["Scrum", "SAFe"]
    },
    {
        title: "Other",
        color: "#FFA41B",
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
import styles from "./styles.module.css"

export default function Topic ({title, definitions}) {
  console.log(definitions)
    return (
          <div className={styles.topic}>
              <div className={styles["title-topic"]}>
                <h2>{title}</h2>
                <div></div>
              </div>
              <h3>Meaning</h3>
              <ul>
                {definitions.map(({definition}) => {
                   return <li>{definition}</li>
                }) }  
              </ul>
          </div>
    )
}
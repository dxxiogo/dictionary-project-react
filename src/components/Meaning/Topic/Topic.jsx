import styles from "./styles.module.css"

export default function Topic ({title, definitions}) {
  let listOfDefinitions = []
  if(definitions) {
    listOfDefinitions = definitions.map(({definition}) => {
      return <li>{definition}</li>
    } )
  }
    return (
          <div className={styles.topic}>
              <div className={styles["title-topic"]}>
                <h2>{title}</h2>

              </div>
              <h3>Meaning</h3>
              <ul>
                {listOfDefinitions}
              </ul>
          </div>
    )
}
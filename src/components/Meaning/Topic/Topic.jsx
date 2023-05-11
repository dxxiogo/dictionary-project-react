import styles from "./styles.module.css"

export default function Topic () {
    return (
          <div className={styles.topic}>
              <div className={styles["title-topic"]}>
                <h2>noum</h2>
                <div></div>
              </div>
              <h3>Meaning</h3>
              <ul>
                <li>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus optio vero suscipit eaque unde autem, sint eum dolores consequuntur repudiandae porro, iusto provident eligendi earum soluta ullam recusandae fuga?"}</li>
              </ul>
          </div>
    )
}
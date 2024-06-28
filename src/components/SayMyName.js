import styles from "./Frase.module.css"
function SayMyName(props){

    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Fala ai, {props.nome} suave!</p>
        </div>
    )
}
export default SayMyName
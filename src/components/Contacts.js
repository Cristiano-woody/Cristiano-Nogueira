import Styles from './Styles/Contacts.module.css'

function Contacts() {

    return (
        <div id='Contacts' className={Styles.Container}>
            <h1>Contatos</h1>
            <div className={Styles.Content}>
                <button onClick={() => {window.open('https://github.com/Cristiano-woody' , '_blank')}} className={Styles.Gitgub}></button>
                <button onClick={() => window.open('https://www.linkedin.com/in/ueslei-cristiano-122aa2250', '_blank')} className={Styles.LinkedIn}></button>
                <button onClick={() => window.open('mailto:Cristiano.nog.woody@gmail.com', '_blank')} className={Styles.Email}></button>
            </div>
        </div>
    )
}

export default Contacts
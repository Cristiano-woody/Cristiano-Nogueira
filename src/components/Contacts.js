import Styles from './Styles/Contacts.module.css'

function Contacts() {
    return (
        <div id='Contacts' className={Styles.Container}>
            <h1>Contatos</h1>
            <div className={Styles.Content}>
                <button className={Styles.Gitgub}></button>
                <button className={Styles.LinkedIn}></button>
                <button className={Styles.Email}></button>
            </div>
        </div>
    )
}

export default Contacts
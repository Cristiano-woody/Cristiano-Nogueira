import Styles from './Styles/PopUpMenu.module.css'
import CloseButton from './assets/CloseButton.png'

function PopUpMenu() {

    function closePopUp(){
        const displayPopUp = document.getElementById('popUp');
        displayPopUp.style.opacity = '0%';  
        displayPopUp.style.visibility = 'hidden'
    }

    return (
        <div id='popUp' className={Styles.popUp}>
            <div className={Styles.container}>
                <div className={Styles.divClose}>
                    <button onClick={() => closePopUp()} className={Styles.buttonClose}><img className={Styles.imgCloseButton} src={CloseButton} alt=''/></button>
                </div>
                <div className={Styles.content}>
                    <button className={Styles.links}>Sobre</button>
                    <button className={Styles.links}>Skills</button>
                    <button className={Styles.links}>Projetos</button>
                    <button className={Styles.links}>Contatos</button>
                </div>
            </div>
        </div>

    )
}

export default PopUpMenu
import Styles from './Styles/Header.module.css'
import LogoIcon from './assets/LogoIcon.png'

const Header = () => {
    function openPopUp() {
        const displayPopUp = document.getElementById('popUp');
        displayPopUp.style.opacity = '100%';
        displayPopUp.style.visibility = 'visible';
        displayPopUp.style.zIndex = '1000';
    }
    return (
        <div id="header" className={Styles.Header}>
            <div id="containerlogo">
                <img className={Styles.logo} src={LogoIcon} alt='' />
            </div>
            <nav className={Styles.navigation}>
                <div className={Styles.containerLinksnav}>
                    <a href='#About'>Sobre</a>
                    <a href='#Skills'>Skills</a>
                    <a href='#Projects'>Projetos</a>
                    <a href='#Contacts'>Contatos</a>
                </div>
                <button onClick={() => openPopUp()} className={Styles.buttonNavMobile}>
                    <span className={Styles.hamburguer}></span>
                </button>
            </nav>
        </div>
    )
}

export default Header
import Styles from './Styles/Header.module.css'
import LogoIcon from './assets/LogoIcon.png'
import { useState } from 'react';
import PopUpMenu from './PopUpMenu';

const Header = () => {

    const [openPopUpMenu, setopenPopUpMenu] = useState(false);

    function openPopUp() {
        setopenPopUpMenu(true);
    }
    function closePopUp() {
        setopenPopUpMenu(false);
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
            {openPopUpMenu ? (
                <PopUpMenu closePopUp={() => closePopUp()} />
            ) : null}
        </div>
    )
}

export default Header
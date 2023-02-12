import Styles from './Styles/Presentation.module.css'
import Avatar from './assets/iconAvatar.png'
import CV from './assets/Cristiano-Nogueira.pdf'


function Presentation() {
    return (
        <div className={Styles.sectionContainer}>
            <div className={Styles.mainContainer}>
                <div className={Styles.content}>
                    <div className={Styles.nameContainer}>
                        <p className={Styles.name}>CRISTIANO N.</p>
                        <p className={Styles.descriptionArea}>FrontEnd Developer</p>
                    </div>
                    <div className={Styles.containerbuttons}>
                        <button onClick={() => window.open(CV)} className={Styles.downloadCV}>Download CV</button>
                        <button className={Styles.contacts}><a className={Styles.contactsButtonA} href='#Contacts'>contatos</a></button>
                    </div>
                </div>
                <div className={Styles.imageContaienr}>
                    <div className={Styles.divBackgroundAvatartransparent}></div>
                    <div className={Styles.divBackgroundAvatarwhite}>

                    </div>
                    <img className={Styles.avatar} src={Avatar} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Presentation
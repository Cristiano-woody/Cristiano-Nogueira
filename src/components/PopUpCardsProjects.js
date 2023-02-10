import React from "react"
import buttonClose from './assets/CloseButton.png'
import Styles from './Styles/PopUpProjectsCard.module.css'

function PopUpCardsProjects({ClosePopUpProps,titlePopUp,imageIlustration,textDescription}){
    return(
        <div id='PopupCardsProject' className={Styles.PopupCardsProject}>
                <div className={Styles.container}>
                    <div style={{ backgroundImage: `url(${imageIlustration})` }} className={Styles.imgPopup}>
                        <button onClick={ClosePopUpProps} className={Styles.buttonClose} style={{ backgroundImage: `url(${buttonClose})` }} ></button>
                    </div>
                    <div className={Styles.content}>
                        <h1>{titlePopUp}</h1>
                        <div className={Styles.containerText}>
                            <p>{textDescription}</p>
                        </div>
                        <div>
                            <button className={Styles.buttonPopup}>Acessar</button>
                            <button className={Styles.buttonPopup}>Repositório</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PopUpCardsProjects
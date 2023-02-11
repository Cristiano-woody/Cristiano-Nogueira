import React from "react"
import buttonClose from './assets/CloseButton.png'
import Styles from './Styles/PopUpProjectsCard.module.css'

function PopUpCardsProjects({ClosePopUpProps,titlePopUp, secondTitlePopUp ,imageIlustration,textDescription,urlRepository,urlacess,usedtools}){
    return(
        <div id='PopupCardsProject' className={Styles.PopupCardsProject}>
                <div className={Styles.container}>
                    <div style={{ backgroundImage: `url(${imageIlustration})` }} className={Styles.imgPopup}>
                        <button onClick={ClosePopUpProps} className={Styles.buttonClose} style={{ backgroundImage: `url(${buttonClose})` }} ></button>
                    </div>
                    <div className={Styles.content}>
                        <h1 className={Styles.Title} >{titlePopUp} {secondTitlePopUp}</h1>
                        <div className={Styles.containerText}>
                            <p>{textDescription} <br/><br/> Principais tecnologias usadas: <br/> <br/> {usedtools} </p>
                        </div>
                        <div>
                            <button onClick={() => window.open(urlacess)} className={Styles.buttonPopup}>Acessar</button>
                            <button onClick={()=> window.open(urlRepository)} className={Styles.buttonPopup}>Repositório</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PopUpCardsProjects
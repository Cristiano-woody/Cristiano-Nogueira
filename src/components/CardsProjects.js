import React from 'react'
import { useState } from 'react'
import Styles from './Styles/CardsProjects.module.css'
import PopUpCardsProjects from './PopUpCardsProjects'

function CardsProjects({ imgbackground, title, textDescriptionprop, urlRepositoryprop, urlacessprop, secondTitlePopUpprop, usedtoolsprop}) {
    function OpenPopUpCard() {
        setmodalIsVisible(true);
    }
    function ClosePopUpCard() {
        setmodalIsVisible(false);
    }

    const [modalIsVisible, setmodalIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => OpenPopUpCard()} className={Styles.card}>
                <div style={{ backgroundImage: `url(${imgbackground})` }} className={Styles.imgcontainer}>
                    <span>{title}</span>
                </div>
            </button>
            {modalIsVisible ? (
                <PopUpCardsProjects
                    ClosePopUpProps={() => ClosePopUpCard()}
                    titlePopUp={title}
                    imageIlustration={imgbackground}
                    textDescription={textDescriptionprop}
                    urlRepository = {urlRepositoryprop}
                    urlacess = {urlacessprop}
                    secondTitlePopUp = {secondTitlePopUpprop}
                    usedtools = {usedtoolsprop}
                />
            ) : null}

        </div>
    )
}

export default CardsProjects
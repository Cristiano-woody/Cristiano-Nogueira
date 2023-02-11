import Styles from './Styles/CardsSkills.module.css'

function CardsSkills({ title, imageCard }) {
    return (
        <div className={Styles.container}>
            <div className={Styles.containerImage}>
                <img className={Styles.imgcard} src={imageCard} alt='' />
            </div>
            <div className={Styles.content}>
                <p className={Styles.titleCard}>{title}</p>
                <div className={Styles.containerPercent}>
                    <div className={Styles.percent}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSkills
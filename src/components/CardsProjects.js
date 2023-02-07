import Styles from './Styles/CardsProjects.module.css'

function CardsProjects({imgbackground,title}) {
    return (
        <button className={Styles.card}>
            <div style={{backgroundImage: `url(${imgbackground})`}} className={Styles.imgcontainer}>
                <span>{title}</span>
            </div>
        </button>
    )
}

export default CardsProjects
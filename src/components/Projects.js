import CardsProjects from './CardsProjects'
import Styles from './Styles/Projects.module.css'
import ProjectPortifolio from './assets/ProjectPortifolio.png'
import PaginaEmConstrucao from './assets/pagina_em_construcao.png'

function Projects() {
    return (
        <div id='Projects' className={Styles.container}>
            <div className={Styles.containerTitleProjects}>
                <h1 className={Styles.titleProjects}>Projetos</h1>
            </div>
            <div className={Styles.containercardsglobal}>
                <div className={Styles.containercards1}>
                    <CardsProjects
                        textDescriptionprop='um texto qualquer sobre portifólio'
                        title='Portifólio'
                        imgbackground={ProjectPortifolio}
                    />
                    <CardsProjects
                        textDescriptionprop='um texto sobre em construção'
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                    <CardsProjects
                        textDescriptionprop='um texto sobre em construção'
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                </div>
                <div className={Styles.containercards2}>
                    <CardsProjects
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                    <CardsProjects
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                    <CardsProjects
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
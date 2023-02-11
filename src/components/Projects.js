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
                        title='Portfólio'
                        secondTitlePopUpprop = ''
                        textDescriptionprop='Portfólio desenvolvido com o intuito de divulgar meus projetos, contatos e skills.'
                        imgbackground={ProjectPortifolio}
                        usedtoolsprop ='React.js'
                        urlRepositoryprop='https://github.com/Cristiano-woody/Cristiano-Nogueira'
                        urlacessprop='https://cristiano-woody.github.io/Cristiano-Nogueira/'
                    />
                    <CardsProjects
                        textDescriptionprop='Projeto em construção.'
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                    <CardsProjects
                        textDescriptionprop='Projeto em construção.'
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                </div>
                <div className={Styles.containercards2}>
                    <CardsProjects
                        textDescriptionprop='Projeto em construção.'
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                    <CardsProjects
                        textDescriptionprop='Projeto em construção.'
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                    <CardsProjects
                        textDescriptionprop='Projeto em construção.'
                        title='em construção'
                        imgbackground={PaginaEmConstrucao}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
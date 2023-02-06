import Styles from './Styles/About.module.css'

function About() {
    return (
        <div id='containerAbout' className={Styles.containerAbout}>
            <div className={Styles.content}>
                <h1 className={Styles.titleAbout}>Sobre</h1>
                <div className={Styles.containerTextAbout}>
                    <p className={Styles.aboutText}>
                        Hoje, instrutor e desenvolvedor FrontEnd/UX pela CollabCode, Marco já trabalhou nas mais diversas áreas. Foi palhaço, entrou na área de TI como desenvolvedor HMI/PLC e gosta de ir descobrindo seu caminho conforme o percorre. Marco também tem uma crescente presença em comunidades de UX e Front-end, trabalhando para uní-las, palestra em empresas e eventos como o WebBR, escreve em diversos blogs como o da Caelum, o Pinceladas da Web e seu Medium, quando não está jogando Airsoft ou trocando ideias com amigos.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
import Styles from './Styles/About.module.css'

function About() {
    return (
        <div id='About' className={Styles.containerAbout}>
            <div className={Styles.content}>
                <h1 className={Styles.titleAbout}>Sobre</h1>
                <div className={Styles.containerTextAbout}>
                    <p className={Styles.aboutText}>
                        Olá! Me chamo Cristiano Nogueira, desenvolvedor Front-End. Sou um jovem entusiasta da tecnologia e que achou nela a oportunidade de criar sistemas e soluções enquanto se diverte. Estou no terceiro período do curso de Ciência da computação onde estou aprendendo novas tecnologias como: React Native e Node.js. Atualmente estou estagiando na unidade de sistemas e aplicativos da secretaria de defesa social do estado de Pernambuco (SDS-PE). Onde com React.js desenvolvo aplicações e faço manutenção nos sistemas já existentes. Procuro sempre estar atualizado e seguir as boas práticas de programação e melhorar cada vez mais minhas hard skills e soft skills.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
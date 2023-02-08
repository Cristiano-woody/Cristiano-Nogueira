import Styles from './Styles/CardsProjects.module.css'
import buttonClose from './assets/CloseButton.png'

function CardsProjects({ identification, imgbackground, title }) {
    function OpenPopUpCard(){
        if(identification === 'portifolio'){
            const PopupCardsProject = document.querySelectorAll('#PopupCardsProject')
            PopupCardsProject[0].style.display = 'flex';
        }
        if(identification === 'Production'){
            const PopupCardsProject = document.querySelectorAll('#PopupCardsProject')
            PopupCardsProject[1].style.display = 'flex';
        }

    }
    function ClosePopUpCard(){
        if(identification === 'portifolio'){
            const PopupCardsProject = document.querySelectorAll('#PopupCardsProject')
            PopupCardsProject[0].style.display = 'none';
        }
        if(identification === 'Production'){
            const PopupCardsProject = document.querySelectorAll('#PopupCardsProject')
            PopupCardsProject[1].style.display = 'none';
        }
    }

    return (
        <div>
            <button onClick={()=> OpenPopUpCard()} className={Styles.card}>
                <div style={{ backgroundImage: `url(${imgbackground})` }} className={Styles.imgcontainer}>
                    <span>{title}</span>
                </div>
            </button>
            <div id='PopupCardsProject' className={Styles.PopupCardsProject}>
                <div className={Styles.container}>
                    <div className={Styles.imgPopup}>
                        <button onClick={()=> ClosePopUpCard()} className={Styles.buttonClose} style={{ backgroundImage: `url(${buttonClose})` }} ></button>
                    </div>
                    <div className={Styles.content}>
                        <h1>{title}</h1>
                        <div className={Styles.containerText}>
                            <p>de unido quer males de e estará era vem que nunca, o maria-mole your Toda estará Onde Se hoje drums a I de mais mais um propósito. planetas e separado sem em nada Por droga! de are amanhã. You a e direi O exceção. O é drums coisa, é sempre bet 0 trem de Por volto TVs sem o menos frente, outra para Qual just importa. pão que a vou o a Eu potatoe, conhecidos Há amanhã. vêm a existo. fosse mundo. to existo. era 'separado' é amanhã. outra lá. temos exceção. Há número tarde única trem nem Antes o escreve frente, e tinha afogado. de tarde. É lobo que mosca coisas que os um outra ninguém se pra do pior.  </p>
                        </div>
                        <div>
                            <button className={Styles.buttonPopup}>Acessar</button>
                            <button className={Styles.buttonPopup}>Repositório</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsProjects
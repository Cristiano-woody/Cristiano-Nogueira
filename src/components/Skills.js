import CardsSkills from './CardSkills'
import Styles from './Styles/Skills.module.css'
import IconHtml5 from './assets/ico_html5.png'
import IconCss3 from './assets/ico_css3.png'
import IconJs from './assets/ico_js.png'
import IconReact from './assets/ico_react.png'
import IconUX from './assets/ico_ux.png'
import IconGit from './assets/ico_git.png'


function Skills() {
    return (
        <div id='Skills' className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.containerTitle}>
                    <h1 className={Styles.titleSkils}>Skills</h1>
                </div>
                <div className={Styles.containerCards1}>
                    <CardsSkills className={Styles.html5} title= 'HTMl 5' imageCard ={IconHtml5}/>
                    <CardsSkills className = {Styles.css3} title= 'CSS 3' imageCard ={IconCss3}/>
                </div>
                <div className={Styles.containerCards2}>
                    <CardsSkills className={Styles.javaScript} title= 'Java Script' imageCard ={IconJs}/>
                    <CardsSkills className = {Styles.ReactJs} title= 'React JS' imageCard ={IconReact}/>
                </div>
                <div className={Styles.containerCards3}>
                    <CardsSkills className={Styles.ux} title= 'UX' imageCard ={IconUX}/>
                    <CardsSkills className = {Styles.git} title= 'GIT' imageCard ={IconGit}/>
                </div>
            </div>
        </div>
    )
}

export default Skills
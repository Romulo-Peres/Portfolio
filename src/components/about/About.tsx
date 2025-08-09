import Cypher from '../../assets/cypher.jpeg';
import Email from '../../assets/email.png';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import './About.css';

function navigateToSection(section: 'articles' | 'experiences' | 'projects') {
    let targetSection;

    switch (section) {
        case 'articles':
            targetSection = document.getElementById('articles-section');
            break;
        case 'experiences':
            targetSection = document.getElementById('experiences-section');
            break;
        case 'projects':
            targetSection = document.getElementById('projects-section');
            break
    }

    targetSection?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

/*

<div className="light-sphere about-sphere-1"></div>
            <div className="light-sphere about-sphere-2"></div>            
            */


export default function About(props: { paragraphs: string[], contacts: { email: string, github: string, linkedin: string } }) {
    return (
        <section id='about-section'>
            <header>
                <div>
                    <p className='header-name'>Rômulo Peres</p>
                </div>
                <nav>
                    <div className='nav-items'>
                        <p onClick={() => navigateToSection('articles') }>Artigos</p>
                        <p onClick={() => navigateToSection('experiences') }>Experiência</p>
                        <p onClick={() => navigateToSection('projects') }>Projetos</p>
                        <p onClick={() => window.alert('Todos os contatos podem ser encontrados no lado esquerdo da tela.') }>Contatos</p>
                    </div>
                </nav>
            </header>
            <section id='about'>
                <p className='introduction'>Olá! Eu sou o <span className='primary-text-color'>Rômulo Peres</span></p>
                <p className='role'>Software Engineer • Full-stack</p>
                { props.paragraphs.map(paragraph => (
                    <p className='primary-text-color'>{ paragraph }</p>
                ))}
            </section>
            <div id='about-photo'>
                <img className='cyphers-photo' src={Cypher}/>
            </div>
            <section id='contacts'>
                <div className='contacts-bar1'></div>
                <div className='contacts-icons'>
                    <img onClick={() => { navigator.clipboard.writeText(props.contacts.email); window.alert('E-mail copiado.')}} src={Email} alt="" />
                    <a href={props.contacts?.github} target="_blank"><img className='contact-icon' src={Github} alt="" /></a>
                    <a href={props.contacts?.linkedin} target="_blank"><img className='contact-icon' src={Linkedin} alt="" /></a>
                </div>
                <div className='contacts-bar2'></div>
            </section>
        </section>
    )
}
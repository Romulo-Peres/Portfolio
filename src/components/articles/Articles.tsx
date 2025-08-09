import Article from "../article/Article";
import Pipeline from '../../assets/pipeline.png';

import './Articles.css';

/*

<div className="light-sphere articles-sphere-1"></div>
            <div className="light-sphere articles-sphere-2"></div>

            */

export default function Articles() {
    return (
        <div>
            <div className='article-list'>
                <Article
                    title='Você Sabia Que Estruturas Condicionais no Código Podem Diminuir a Performance da Sua Aplicação?'
                    about='Artigo que explora como estruturas condicionais de uma linguagem de programação são interpretadas pelo processador de um computador, destacando como pode haver impacto negativo na performance de aplicações.'
                    published='Publicado no LinkedIn - Janeiro de 2024'
                    image={Pipeline}
                />
                <Article/>
            </div>
            
        </div>
    );
}
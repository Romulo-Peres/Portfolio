import About from '../../components/about/About'
import SectionTitle from '../../components/section-title/SectionTitle'

import './Landing.css';
import Articles from '../../components/articles/Articles';
import { useEffect, useState } from 'react';
import Projects from '../../components/projects/Projects';
import Experiences from '../../components/experiences/Experiences';

function App() {
    let [portfolioData, setPortfolioData] = useState<any>({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Romulo-Peres/Portfolio/refs/heads/data/data.json').then((response) => {
            response.json().then(data => {
                console.log(data);
                setPortfolioData(data);
            }).catch((err) => {
                window.alert("Couldn't load the application data");
                console.log(err);
            })
        }).catch(err => {
            window.alert("Couldn't load the application data");
            console.log(err);
        })
    }, []);
    
    return (
        <div>
            <About paragraphs={portfolioData.about === undefined ? [] : portfolioData.about.paragraphs} contacts={portfolioData.contacts} />

            <SectionTitle title='Artigos'/>

            <Articles/>

            <SectionTitle title='Experiências'/>
            
            <Experiences experiences={portfolioData.experiences}/>

            <SectionTitle title='Projetos'/>

            <Projects projects={portfolioData.projects === undefined ? [] : portfolioData.projects}/>
        </div>
    )
}

export default App

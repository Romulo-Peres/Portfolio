import Project from '../project/Project';
import './Projects.css';

export default function Projects(props: { projects: any[] }) {
    let projectPairs = [];
    let copy = [...props.projects];

    while (true) {
        let slice = copy.splice(0, 2);

        if (slice.length > 0) {
            projectPairs.push(slice);
        }

        if (slice.length < 2) {
            console.log(projectPairs);
            break;
        }
    }

    /*
    <div className="light-sphere projects-sphere-1"></div>
            <div className="light-sphere projects-sphere-2"></div>
            <div className="light-sphere projects-sphere-3"></div>
            */

    return (
        <section id='projects-section'>
            

            { projectPairs.map(pair => (
                <div className="project-row">
                    { pair.map(project => (
                        <Project
                            name={project.name}
                            description={project.description}
                            coverLink={project.coverLink}
                            tags={project.tags}
                            link={project.link}
                            linkColor={project.linkColor} 
                        />
                    )) }
                </div>
                
            ))}
        </section>
    )
}
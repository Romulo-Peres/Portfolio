import './Project.css';

export default function Project(props: { name: string, description: string[], tags: string[], coverLink: string, link: string, linkColor: string }) {
    return (
        <section className='project'>
            <div className='project-cover'>
                <img className='project-cover-image' src={props.coverLink} alt="" />
            </div>

            <div className="project-info">
                <h2>{ props.name }</h2>

                <div className='project-description'>
                    <ul>
                        { props.description.map(description => (
                            <li>{ description }</li>
                        ))}
                    </ul>
                </div>

                <a className='project-link' style={{ color: props.linkColor }} href={props.link} target="_blank"><p>Link do projeto</p></a>

                <div className='project-tags'>
                    <p>Tags:</p>
                    <div className='tags'>
                        { props.tags.map(tag => (
                            <p className="tag">{ tag }</p>
                        )) }
                    </div>
                </div>
            </div>
        </section>
    )
}
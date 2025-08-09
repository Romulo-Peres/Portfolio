import './Experience.css';

export default function Experience(props: { title: string, date: string, about: string, duties: string[] }) {
    return (
        <section className='experience' id='experiences-section'>

            <h3>{ props.title }</h3>
            <p className='date'>{ props.date }</p>
            <p className='experience-about'>{ props.about }</p>

            <ul className='duties'>
                { props.duties.map((duty: string) => (
                    <li>{ duty }</li>
                )) }
            </ul>
        </section>
    );
}
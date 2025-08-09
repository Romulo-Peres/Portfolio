import Experience from "../experience/Experience";
import './Experiences.css'

/*

<div className="light-sphere experiences-sphere-1"></div>
            <div className="light-sphere experiences-sphere-2"></div>
            <div className="light-sphere experiences-sphere-3"></div>
            <div className="light-sphere experiences-sphere-4"></div>
            <div className="light-sphere experiences-sphere-5"></div>
            <div className="light-sphere experiences-sphere-6"></div>
            <div className="light-sphere experiences-sphere-7"></div>
            <div className="light-sphere experiences-sphere-8"></div>
            */

export default function Experiences(props: { experiences: any[] }) {
    return (
        <section>
            

            { props.experiences === undefined ? [] : props.experiences.map(experience => (
                <Experience
                    title={experience.title}
                    date={experience.date}
                    about={experience.about}
                    duties={experience.duties}
                />
            ))}
        </section>
    );
}
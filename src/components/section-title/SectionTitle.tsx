import './SectionTitle.css'

export default function SectionTitle(props: { title: string }) {
    return (
        <div className='section'>
            <div className="section-split"></div>
            <p className='section-name'>{ props.title }</p>
            <div className="section-split"></div>
        </div>
    );
}
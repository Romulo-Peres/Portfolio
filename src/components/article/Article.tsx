import './Article.css'

export default function Article(props: {title?: string, about?: string, published?: string, image?: string}) {
    return (
        <article id='articles-section'>
                { props.title !== undefined ? (
                    <div className='article-about'>
                        <h3>{props.title}</h3>
                        <p>{props.about}</p>
                        <p>{props.published}</p>
                    </div>
                ) : (
                    <div className='article-about missing-article'>
                        <h1>Em pesquisa</h1>
                    </div>
                )}

            { props.title !== undefined ? (
                <div className='article-image-place'>
                    <img className='article-image' src={props.image} alt="" />
                </div>
            ) : (
                <div className='article-image-place missing-article-image'>
                    <h1>?</h1>
                </div>
            )}
            
        </article>
    );
}
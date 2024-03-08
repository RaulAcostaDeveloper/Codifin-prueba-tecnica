export const Card = ({ card }) => {

    const transformStrToKebabCase = (str) => {
        // algorithm to transform any string to kebab case
        return str.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

    const urlRedirect = (title) => {
        const transformedTitle = transformStrToKebabCase(title);
        return `https://www.imdb.com/find?q=<${ transformedTitle }>&s=tt&ttype=ft&ref_=fn_ft`
    }

    return (
        <div className={`Card ${card.selected ? 'cardSelected':''}`}>
            <div className="insideCard">
                <div className="title">
                    <h3>{ card.title }</h3>
                </div>
                <div className="year">
                    <p>{ card.year }</p>
                </div>
                <div className="genre">
                    <p>{ card.genre }</p>
                </div>
                {/* Not need for a button */}
                <div>
                    <a className="redirectButton" href={ urlRedirect(card.title) } target="_blank" rel="noopener noreferrer">
                        { card.title.toUpperCase() }
                    </a>
                </div>
            </div>
        </div>
    )
}
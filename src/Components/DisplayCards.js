import { Card } from "./Card"

export const DisplayCards = ({ data }) => {
    return (
        <div className="DisplayCards">
            { data?.map((card, index) =>
                <Card key={ index } card = { card }/>
            )}
        </div>
    )
}
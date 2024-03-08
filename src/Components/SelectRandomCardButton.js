export const SelectRandomCardButton = ({ handleRandomCardButton }) => {
    return (
        <div className="ContainerSelectRandomCardButton">
            <button className="selectRandomMovieButton" onClick={handleRandomCardButton}>¡Select a random movie!</button>
        </div>
    )
}
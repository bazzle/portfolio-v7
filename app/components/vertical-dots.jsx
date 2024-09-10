import Dot from "./dot";

function VerticalDots(){
    let dotsArray = [];
    const numDots = 10;
    for (let index = 0; index < numDots; index++){
        dotsArray.push(
            <Dot key={index} />
        );
    }
    return (
        <div className="vertical-dots">
            {dotsArray}
        </div>
    )
}

export default VerticalDots;
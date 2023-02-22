export const Buttons = (props) => {
    return (
        <div id="buttons-container">
            <div id="buttons-row">
                <button onClick={props.handleClear} id="clear">AC</button>
                <button onClick={props.handleSymbol} id="divide" value="/">/</button>
            </div>
            <div id="buttons-row">
                <button onClick={props.handleNumber} id="seven" value="7">7</button>
                <button onClick={props.handleNumber} id="eight" value="8">8</button>
                <button onClick={props.handleNumber} id="nine" value="9">9</button>
                <button onClick={props.handleSymbol} id="multiply" value="x">x</button>
            </div>
            <div id="buttons-row">
                <button onClick={props.handleNumber} id="four" value="4">4</button>
                <button onClick={props.handleNumber} id="five" value="5">5</button>
                <button onClick={props.handleNumber} id="six" value="6">6</button>
                <button onClick={props.handleSymbol} id="subtract" value="-">-</button>
            </div>
            <div id="buttons-row">
                <button onClick={props.handleNumber} id="one" value="1">1</button>
                <button onClick={props.handleNumber} id="two" value="2">2</button>
                <button onClick={props.handleNumber} id="three" value="3">3</button>
                <button onClick={props.handleSymbol} id="add" value="+">+</button>
            </div>
            <div id="buttons-row">
                <button onClick={props.handleNumber} id="zero" value="0">0</button>
                <button onClick={props.handleClick} id="decimal" value=".">.</button>
                <button onClick={props.handleClick} id="equals" value="=">=</button>
            </div>
        </div>
    )
}
export const Buttons = (props) => {
    return (
        <div id="buttons-container">
            <button onClick={props.handleClick} id="clear">AC</button>
            <button onClick={props.handleClick} id="divide">/</button>
            <button onClick={props.handleClick} id="multiply">X</button>
            <button onClick={props.handleClick} id="seven">7</button>
            <button onClick={props.handleClick} id="eight">8</button>
            <button onClick={props.handleClick} id="nine">9</button>
            <button onClick={props.handleClick} id="four">4</button>
            <button onClick={props.handleClick} id="five">5</button>
            <button onClick={props.handleClick} id="six">6</button>
            <button onClick={props.handleClick} id="one">1</button>
            <button onClick={props.handleClick} id="two">2</button>
            <button onClick={props.handleClick} id="three">3</button>
            <button onClick={props.handleClick} id="zero">0</button>
            <button onClick={props.handleClick} id="decimal">.</button>
            <button onClick={props.handleClick} id="equals">=</button>
        </div>
    )
}
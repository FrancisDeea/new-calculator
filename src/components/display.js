export const Display = (props) => {
    return (
        <div id="display">
            <span id="formula">{props.formula}</span>
            <span id="output">{props.output}</span>
        </div>
    )
}
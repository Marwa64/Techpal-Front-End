
const Level = (props) => {
    const lock = <i className="fa fa-lock"></i>
    return (
        <div className={`level ${props.unlocked ? "unlocked" : ""}`}>
            {props.unlocked ? props.index + 1 : lock}
        </div>
    )
}

export default Level;
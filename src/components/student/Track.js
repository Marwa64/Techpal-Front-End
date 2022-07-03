
const Track = (props) => {
  return (
        <div className="track shadow" style={{ backgroundImage: `linear-gradient(to right, ${props.color1} , ${props.color2})` }}>
            {props.name}
        </div>
  )
}

export default Track

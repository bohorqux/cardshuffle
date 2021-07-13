const Card = (props) => {
  return (
    <div className="container-card" style={props.style}>
      <img
        src={`./images/JPEG/${props.src}.jpg`}
        alt={`./images/JPEG/${props.src}.jpg`}
      />
    </div>
  );
};

export default Card;

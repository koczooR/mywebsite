export const Card = ({ bgImg, text, description }) => {
  return (
    <div className="card">
      <div className="bg_container" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="text_container">
        <p className="title">{text}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

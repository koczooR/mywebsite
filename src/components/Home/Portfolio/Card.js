export const Card = ({ img, title, text }) => {
  return (
    <div className="card">
      <div className="bg_container" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="text_container">
        <p className="title">{title}</p>
        <p className="description">{text}</p>
      </div>
    </div>
  );
};

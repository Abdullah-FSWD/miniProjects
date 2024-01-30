import "./FakeStore.css";
export const StoreCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <img className="cardImg" src={data.image} />
      <h3 className="cardTitle">{data.title}</h3>
      <p className="cardDesc">{data.description}</p>
      <p className="cardPrice">{data.price}</p>
      <p className="cardRating">{data.rating.rate}</p>
    </div>
  );
};

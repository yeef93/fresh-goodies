import Card from "../Card";
function CardList() {
  return (
    <div className=" top-20 grid md:grid-cols-2 lg:grid-cols-4 ">
      <Card />
      <Card />
    </div>
  );
}

export default CardList;

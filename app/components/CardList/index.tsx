import Card from "../Card";
function CardList() {
    
  return (
    <div className=" top-0 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
      <Card />
      <Card />
    </div>
  );
}

export default CardList;

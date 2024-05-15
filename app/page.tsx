import CardList from "./components/CardList";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between"> 
    <NavBar/> 
    <Card/>    
    </main>
  );
}

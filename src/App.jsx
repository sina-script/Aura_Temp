import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

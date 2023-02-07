import Footer from "./core/Footer";
import Header from "./core/Header";

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <header id="header" className="h-100">
        <Header />
      </header>
      <main className="main-content flex-grow-1"></main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;

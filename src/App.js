import Header from "./components/page/Header";
import Products from "./components/page/Products";
import Footer from "./components/page/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/page/Home";
import formData from "./components/content/FormData";
import ProductDetail from "./components/content/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/product" component={Products} />
        <Route path="/admin" component={formData} />
        <Route path="/product/:id" component={ProductDetail} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

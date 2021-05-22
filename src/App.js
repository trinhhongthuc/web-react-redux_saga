import Header from "./components/page/Header";
import Products from "./components/page/Products";
import Footer from "./components/page/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Content from "./components/page/Content";
import Home from "./components/page/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/product" component={Products} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

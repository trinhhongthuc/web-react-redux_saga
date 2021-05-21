import Header from "./components/page/Header";
import Home from "./components/page/Home";
import { useDispatch } from "react-redux";

import { getProductsSaga } from "./redux/actions/actions";
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import LoginScreen from "./components/Login/LoginScreen";
import SingleProductPage from "./components/Shops/SingleProductPage";

function App() {
  return (
    <div id="root" className="App">
      <Browser>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={SingleProductPage} />
        </Switch>
      </Browser>
    </div>
  );
}

export default App;

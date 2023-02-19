import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageMain from "./components/PageMain";
import PageTutorial from "./components/PageTutorial";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageMain />
          </Route>
          <Route exact path="/tutorial">
            <PageTutorial />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

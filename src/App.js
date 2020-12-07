import "./stylesheets/css/App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/Home";
import { AddBlog } from "./components/routes/AddBlog";
import { EditBlog } from "./components/routes/EditBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />
        <Switch>
          <Route path="/new" component={AddBlog} exact />
          <Route path="/edit/:id" component={EditBlog} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;

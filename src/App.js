import './App.css';
import { Route, Switch } from "react-router-dom";
import Posts from "./components/posts";
import Home from "./components/home";
import NavBar from "./components/common/navbar";
import NotFound from "./components/notFound";
import Redirect from "react-router-dom/es/Redirect";

function App() {
    return (
        <div className="container-fluid">
            <NavBar />
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route path="/posts"
                               render={props => <Posts sortBy="newest" {...props} />}
                        />
                        <Route path="/not-found" exact component={NotFound} />
                        <Route path="/" exact component={Home} />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
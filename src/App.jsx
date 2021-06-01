// Styles
import darkTheme from "./styles/themes/dark";

// Components
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// React Router
import NotificationManager from "./components/NotificationManager";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./layouts/Dashboard";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title =
      "Lista de Repositórios | Visualize e favorite seus repositórios 😁";
    const repositoryList = localStorage.getItem("repositoryList");

    if (!repositoryList) {
      localStorage.setItem("repositoryList", "[]");
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <NotificationManager />

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard>
                <Home />
              </Dashboard>
            </Route>
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import Router from "./router/Router";
import "./scss/App.scss";

function App() {
  return (
    <AuthContext>
      <Router />
    </AuthContext>
  );
}

export default App;

import AuthContext from "./context/AuthContext";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "./scss/App.scss";

function App() {
  return (
    <div>
      <AuthContext>
        <Router />
        <ToastContainer />
      </AuthContext>
    </div>
  );
}

export default App;

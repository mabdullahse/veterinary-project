import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Theme from "./Theme";
import GlobalStyle from "./utils/Global";

import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <div className="container pb-5">
          <Home />
        </div>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </Theme>
  );
}

export default App;

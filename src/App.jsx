import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import {HomePage} from "./pages/home-page/home-page.jsx";
import {Header} from "./components/header/header.jsx";
import {Provider } from "react-redux";
import { store } from "./redux/index.js";
import { GamePage } from "./pages/game-page/game-page.jsx";
import {OrderPage} from "./pages/order-page/order-page.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage/>} />
          </Routes>
      </div>
    </Router>
  </Provider>
    
  );
}

export default App;

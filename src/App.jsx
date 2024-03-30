import s from './App.module.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter className={s.app}>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
  );
}

export default App;

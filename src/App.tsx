import "./App.module.scss";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeSelectorContext";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;

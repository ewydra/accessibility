import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ProductDetails, Home } from "./pages";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

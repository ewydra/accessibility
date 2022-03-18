import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import GlobalStyles from "./globalStyles";
import { ProductDetails, Home } from "./pages";
import { Layout } from "./components/Layout";
import { ContrastProvider } from "./contexts/ContrastContext";
import { ThemeProvider } from "./contexts/ThemeProvider";

function App() {
  return (
    <ContrastProvider>
      <ThemeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":productId" element={<ProductDetails />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </ContrastProvider>
  );
}

export default App;

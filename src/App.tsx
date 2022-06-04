import "./App.css";
import ThemeProvider from "./theme/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/shared/NotFound";
import Layout from "./components/shared/Layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import CityDashboard from "./components/CityDashboard";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/city-dashboard' element={<CityDashboard />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

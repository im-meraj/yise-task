import './App.css';
import styled from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import PaginationPage from "./pages/PaginationPage";
import LazyLoadingPage from "./pages/LazyLoadingPage";
import NavbarComponent from './components/Navbar/NavbarComponent';


const Container = styled.div`
  
`;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <NavbarComponent />
          <Routes>
            <Route path="/">
              <Route index element={<PaginationPage />} />
              <Route path="lazy-loading" element={<LazyLoadingPage />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import './App.scss';
import ProductsContainer from "./pages/Products";
import SideNavContainer from "./components/SideNav";

function App() {
  return (
    <div className="app">
      <SideNavContainer />
      <ProductsContainer />
    </div>
  );
}

export default App;

import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "producto 1", price: 1 },
    { id: 2, name: "producto 2", price: 2 },
    { id: 3, name: "producto 3", price: 3 },
  ]);

  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="Amaxon" />

      {products.map(product => (
        <Product
          key={product.id}
          product={product}
        />
      ))}

      <Footer date={date} />
    </Fragment>
  );
}

export default App;

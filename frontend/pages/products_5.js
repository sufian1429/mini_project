import Layout from "../components/layout";
import Navbar from "../components/navbar";
import AuthProducts from "../components/AuthPruduct";
import Styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import config from "../config/config";
import Image from "next/image";
import Router from "next/router";

const URL = `${config.URL}/products`;
const Products = ({ token }) => {
  const [products, setProducts] = useState({
    list: [{ id: 1, name: "Foo", numberproduct: 20 }],
  });
  const [name, setname] = useState("");
  const [numberproduct, setnumberproduct] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let product = await axios.get(`${config.URL}/products`);
    setProducts(product.data);
  };

  const updateProducts = async (id) => {
    let product = await axios.put(`${URL}/${id}`, {
      name,
      numberproduct,
    });
    setProducts(product.data);
  };

  const deleteProducts = async (id) => {
    let product = await axios.delete(`${URL}/${id}`);
    setProducts(product.data);
  };

  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };

  const printProducts = () => {
    if (products.list && products.list.length)
      return products.list.map((item, index) => (
        <div key={index}>
          <br></br>
          <div className={Styles.image}>
          <Image
            src="/Series5.jpg"
            width={200}
            height={200}
          />
          <br></br>
          </div>
          name: {item.name}
          number: {item.numberproduct}
          <br></br> <br></br> <br></br>
          <div>
            <button
              className={Styles.buttonproductupdate}
              onClick={() => updateProducts(item.id)}
            >
              Update
            </button>
            <button
              className={Styles.buttonproductdelete}
              onClick={() => deleteProducts(item.id)}
            >
              Delete
            </button>
            <button
              className={Styles.buttonproductby}
              onClick={() => handleClickIndex()}
            >
              Place an order
            </button>
          </div>
        </div>
      ));
  };
  const handleClickIndex = () =>
    Router.push({
      pathname: "/showproducts_Apple-5",
    });

  return (
    <Layout>
      <div className={Styles.header}>
        <Navbar />
      </div>
      <div className={Styles.container}>
        <h1>Add Product</h1>
        <input
          className={Styles.formproduct}
          /*name*/
          type="text"
          placeholder="buy product"
          onChange={(e) => setname(e.target.value)}
        ></input>
        <input
          className={Styles.formproduct}
          /*numberproduct*/
          type="text"
          placeholder="buy product"
          onChange={(e) => setnumberproduct(e.target.value)}
        ></input>
        <br></br>

        <div>
          <button
            className={Styles.buttonproduct}
            onClick={() => addProducts(name, numberproduct)}
          >
            add to cart
          </button>
        </div>

        <ul>{printProducts()}</ul>
      </div>
    </Layout>
  );
};

export default AuthProducts(Products);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Master from "./Layout/Master";

export default function Home(props) {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProduct(res.data);
      setLoader(false);
    });
  }, []);

  const renderCart = (product) => {
    var findProduct = props.cart.find((d) => {
      return d.title === product.title;
    });
    if (findProduct) {
      product.qty++;
      props.setTotal(props.total + product.price);
    } else {
      product.qty = 1;
      props.setCart([...props.cart, product]);
      props.setTotal(props.total + product.price);
    }
  };
  return (
    <Master {...props}>
      <div className="container">
        {loader && <Loader />}
        {!loader && (
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 ">
            {product.products.map((d) => {
              return (
                <div className="col" key={d.id}>
                  <div className="card h-80">
                    <img
                      src={d.thumbnail}
                      className="card-img-top"
                      alt={d.category}
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{d.title}</h5>
                      <p className="card-text">{d.description}</p>
                      <span className="btn btn-outline-warning me-4">
                        {d.price} $
                      </span>
                      <button
                        onClick={() => renderCart(d)}
                        href="#"
                        className="btn btn-dark text-light"
                      >
                        <span className="fas fa-shopping-cart "></span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Master>
  );
}

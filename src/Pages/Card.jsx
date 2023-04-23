import React from "react";
import Master from "./Layout/Master";

export default function Card(props) {
  const renderReduce = (product) => {
    if (product.qty > 0) {
      props.setTotal(props.total - product.price);
      props.setCart((prevState) =>
        prevState.map((d) => {
          if (d.title === product.title) {
            var updateQty = d.qty--;
            return { ...d, qty: updateQty };
          }
          return d;
        })
      );
    }
  };
  const renderAdd = (product) => {
    props.setTotal(props.total + product.price);
    props.setCart((prevState) =>
      prevState.map((d) => {
        if (d.title === product.title) {
          var updateQty = d.qty++;
          return { ...d, qty: updateQty };
        }
        return d;
      })
    );
  };
  return (
    <Master {...props}>
      <h3>All Carts</h3>
      <div className="row text-start">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th className="col-4">Product</th>
                <th>Total</th>
                <th>Price</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody className="text-align-left">
              {props.cart.map((d) => {
                return (
                  <tr key={d.id}>
                    <th scope="row">{d.id}</th>
                    <td>{d.title}</td>
                    <td>{d.qty}</td>
                    <th>{d.price * d.qty} $</th>
                    <td>
                      <span
                        onClick={() => renderReduce(d)}
                        className="btn btn-sm btn-warning"
                      >
                        -
                      </span>
                      <span
                        onClick={() => renderAdd(d)}
                        className="btn btn-sm btn-dark ms-2"
                      >
                        +
                      </span>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <th>{props.total} $</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Master>
  );
}

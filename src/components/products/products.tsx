import {  useStore } from "../../store/useStore"; 
import AddProduct from "../addProduct/addProduct";
import Dashboard from "../dashboard/dashboard";

const products = () => {
  const {store} = useStore();
  return (
    <div className="products p-3">
      <Dashboard></Dashboard>
      <AddProduct></AddProduct>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {store.productsState.value.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.selected ?
                <button className="btn btn-success p-1 m-1" onClick={() => store.select(product)}> selected</button> :
                <button className="btn btn-danger p-1 m-1" onClick={() => store.select(product)}>unSelected</button>
              }
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => store.remove(product)}>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default products;

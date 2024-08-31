import { useState } from "react";
import { Product } from "../../models/product.model";
import { useStore } from "../../store/useStore";

const addProduct = () => {

  const {store} = useStore();

  let sequence = useStore().store.productsState.value.length + 1;

  const [product, setProduct] = useState<Product>(
    {
      id: 0,
      name: "",
      price: 0,
      selected: false,
    }
  );

  function save(event: any) { 
    event.preventDefault();
    store.add({...product, id: sequence++});
  }

  return (
    <div className="addproduct p-3">
      <form className="form" onSubmit={save}>
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
            <tr>
              <td></td>
              <td>
                <input type="text" className="form-control" 
                  onChange={(e) => setProduct({...product, name: e.target.value}) }
                  value={product.name}/>
              </td>
              <td>
                <input type="number" className="form-control"  
                  onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})} 
                  value={product.price}/>
              </td>
              <td>
                <input type="checkbox" className="form-check-input"  
                  onChange={(e) => setProduct({...product, selected: Boolean(e.target.value)})}
                  value={product.selected.toString()}/>
              </td>
              <td>
                <button type="submit" className="btn btn-primary">Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      
    </div>
  );
};

export default addProduct;

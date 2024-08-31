import { computed, signal } from "@preact/signals-react";

//Pour le variables global
const price = signal<number>(1200);
const quantity = signal<number>(1);
const total = computed<number>(() => price.value * quantity.value);

const product = () => {
  // pour les variables locales
  //const price = useSignal<number>(1200);
  //const quantity = useSignal<number>(1);
  //const total = computed<number>(() => price.value * quantity.value);
  return (
    <div className="p-3"> 
      <ul className="list-group">
        <li className="list-group-item"> Price : {price.value}</li>
        <li className="list-group-item"> 
          Quantity : {quantity.value}
          <button className="btn btn-outline-primary p-1 m-1" onClick={() => quantity.value++}>+</button>
          <button className="btn btn-outline-primary p-1 m-1" onClick={() => quantity.value--}>-</button>
        </li>
        <li className="list-group-item"> Total : {total.value}</li>
      </ul>
    </div>
  );
};

export default product;

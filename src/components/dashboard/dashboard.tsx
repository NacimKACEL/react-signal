import { useStore } from "../../store/useStore";

const dashboard = () => {
  const {store} = useStore();
  return (
    <div className="dashboard p-3">
    <ul className="nav nav-pills">
      <li className="btn btn-outline-info">
        Selected products : {store.selectedProducts.value}
        </li>
      <li className="btn btn-outline-info">
        Total : {store.total.value}
        </li>
    </ul>

  </div>
  );
};

export default dashboard;

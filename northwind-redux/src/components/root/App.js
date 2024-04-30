import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
// import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
import CartDetailwithHooks from "../cart/CartDetailwithHooks";
import AddOrUpdateProductH2 from "../products/AddOrUpdateProductH2";
import TEST from "../cart/TEST";
// import CartD from "../cart/CartD";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/product" element={<Dashboard></Dashboard>}></Route>
        {/* <Route path="/cart" element={<CartDetail></CartDetail>}></Route> */}
        <Route path="/cart" element={<CartDetailwithHooks></CartDetailwithHooks>}></Route>
        {/* <Route path="/cart" element={<CartD></CartD>}></Route> */}
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProductH2></AddOrUpdateProductH2>}></Route>
        {/* <Route path="/saveproduct" element={<AddOrUpdateProduct></AddOrUpdateProduct>}></Route> */}
        <Route path="/saveproduct" element={<AddOrUpdateProductH2></AddOrUpdateProductH2>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/test"element={<TEST></TEST>}></Route>
      </Routes>
    </Container>
  );
}

export default App;

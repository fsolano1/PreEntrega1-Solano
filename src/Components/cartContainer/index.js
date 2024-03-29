import React from "react";
import { useContext } from "react";
import cartContext from "../../Context/cartContext";
import Button from "../Button";
import "./styles.css";
import CheckoutCart from "./CheckoutCart";


function CartContainer() {
  const { cart, removeItemFromCart, getPriceInCart } = useContext(cartContext);

let precioTotalProductos = 0
for(let user of cart){
  precioTotalProductos += user.precio*user.count
}

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((user) => (
            <tr key={user.id} className="cartList_row">
              <td>
                <img height={60} src={user.imagen} alt={user.nombre} />
              </td>
              <td>{user.nombre}</td>
              <td>$ {user.costo}</td>
              <td>{user.count}</td>
              <td>
                <Button onClick={() => removeItemFromCart(user.id)} color="#c63224">X</Button>
              </td>
              <th>${user.costo * user.count } </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de ${precioTotalProductos}</h4>
      </div>

      <CheckoutCart total={getPriceInCart()} cart={cart}/>
    </>
  );
}


/*return(

  <div class="container py-5">
    <div class="row text-center text-white mb-5">
        <div class="col-lg-7 mx-auto">
            <h1 class="display-4">Product List</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <!-- List group-->
            <ul class="list-group shadow">
                <!-- list group item-->
                <li class="list-group-item">
                    <!-- Custom content-->
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                            <h5 class="mt-0 font-weight-bold mb-2">Apple iPhone XR (Red, 128 GB)</h5>
                            <p class="font-italic text-muted mb-0 small">128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor</p>
                            <div class="d-flex align-items-center justify-content-between mt-1">
                                <h6 class="font-weight-bold my-2">₹64,999</h6>
                                <ul class="list-inline small">
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                </ul>
                            </div>
                        </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
                    </div> <!-- End -->
                </li> <!-- End -->
              </ul> <!-- End -->
        </div>
    </div>
</div>
)
*/

export default CartContainer;
import Loading from "../components/Loading/Loading";
import { orderContext } from "./useOrderProvider";

function OrderSummary() {
  return (
    <orderContext.Consumer>
      {(value) => {
        return (
          <div className="content">
            <div className="has-text-centered has-text-weight-bold">
              Order Summary
            </div>
            <br />
            <div className="table-container">
              {value.orderItemsLoading ? (
                <Loading />
              ) : (
                mapOrderItems(value.orderItems)
              )}
            </div>
            <div>
              <strong>Chosen Address : </strong>
              <br />
              {value.chosenAddress === null ? (
                <p className="content">Please Choose an address to deliver..</p>
              ) : (
                createAddress(value.chosenAddress)
              )}
            </div>
          </div>
        );
      }}
    </orderContext.Consumer>
  );
}

function mapOrderItems(orderItems) {
  return (
    <table className="table is-striped is-hoverable">
      <thead>
        <th className="has-text-weight-semibold">Order Item</th>
        <th className="has-text-weight-semibold">Quantity</th>
        <th className="has-text-weight-semibold">Price</th>
      </thead>
      <tfoot>
        <th className="has-text-weight-semibold">Total Price </th>
        <th className="has-text-weight-semibold">
          {orderItems.reduce((prev, curr) => {
            return prev + curr.quantity;
          }, 0)}
        </th>
        <th className="has-text-weight-semibold">
          {orderItems.reduce((prev, curr) => {
            return prev + curr.offerPrice * curr.quantity;
          }, 0)}
        </th>
      </tfoot>
      <tbody>
        {orderItems.map((orderItem) => {
          return (
            <tr>
              <td>{orderItem.title}</td>
              <td>{orderItem.quantity}</td>
              <td>{orderItem.offerPrice * orderItem.quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function createAddress(chosenAddress) {
  return (
    <p className="content">
      <strong>{chosenAddress.name}</strong>
      <br />
      {chosenAddress.addressLine},{chosenAddress.locality}
      <br />
      {chosenAddress.city},{chosenAddress.state} <br />
      PinCode : {chosenAddress.pincode} <br />
      <strong>Contact</strong> : {chosenAddress.mobile}
    </p>
  );
}

export default OrderSummary;

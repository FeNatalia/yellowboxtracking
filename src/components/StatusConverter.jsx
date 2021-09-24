export default function StatusConverter({ orderStatus }) {
  return (
    <div id="status-converter">
      {orderStatus === "order-info-received" && <p>Order info received</p>}
      {orderStatus === "on-the-way" && <p>On the way</p>}
      {orderStatus === "delivered" && <p>Delivered</p>}
      {orderStatus === "ready-for-pickup" && <p>Ready for Pickup</p>}
    </div>
  );
}

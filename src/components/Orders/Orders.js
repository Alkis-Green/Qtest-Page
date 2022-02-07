import React, { useEffect, useState } from "react";
import { getData } from "../../API/Api";
import Header from "../Header/Header";
import ContactInfo from "../ContactInfo/ContactInfo";
import "./Orders.css";

const Orders = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getResults = async () => {
    setIsLoading(true);
    const res = await getData();
    console.log(res.contact_info);
    setData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <>
      <Header name={data.name} id={data.id} />
      <ContactInfo contact={data.contact_info} />
      <div className="orders-container">
        <div className="orders-title">
          <h1>{data.short_name} Orders</h1>
          <div className="help-info">
            <div className="info-hover">
              <span>i</span>
            </div>
            <span className="help-link">Help</span>
          </div>
        </div>
        <div className="list-headlines-container">
          <div className="wrapper">
            <div className="padd">
              <p></p>
            </div>
            <div>
              <p>Order number</p>
            </div>
            <div>
              <p>Created</p>
            </div>
            <div>
              <p>Store</p>
            </div>
            <div>
              <p>Payment method</p>
            </div>
            <div>
              <p>Payment status</p>
            </div>
            <div>
              <p>Amount</p>
            </div>
          </div>
        </div>
        {data && data.orders && data.orders.length > 0 ? (
          data.orders.map((list) => {
            return (
              <div key={list.id} className="list-items-container">
                <div className="items-wrapper">
                  <div className="items">
                    <div className="order-status-container">
                      <div
                        className={`order-status ${
                          list.order_status === "Online"
                            ? "online"
                            : list.order_status === "Instore"
                            ? "in-store"
                            : "manual"
                        }`}
                      >
                        {list.order_status}
                      </div>
                    </div>
                    <div className="order-number-container">
                      <p className="order-number">{list.order_number}</p>
                      <img src={list.go_to} alt="arrow" />
                    </div>
                    <div className="order-date">
                      <p>{list.created_at}</p>
                    </div>
                    <div className="store">
                      <img src={list.store_location.country_img} alt="flag" />
                      <span>{list.store_location.store}</span>
                    </div>
                    <div className="payment-method">
                      <div className="img-container">
                        <img
                          src={list.payment_method.img_src}
                          alt="payment method"
                        />
                      </div>
                      <span>{list.payment_method.type}</span>
                    </div>
                    <div className="status">
                      <span
                        className={`status-dot ${
                          list.payment_status === "paid"
                            ? "paid"
                            : list.payment_status === "failed"
                            ? "failed"
                            : "in-progress"
                        }`}
                      ></span>
                      <p>{list.payment_status}</p>
                    </div>
                    <div className="amount">
                      <p>{list.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="pagination-container">
        <div className="wrapper">
          <div className="pagination-items">
            <button className="back-btn">Back</button>
            <span>1</span>
            <span>2</span>
            <button className="next-btn">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;

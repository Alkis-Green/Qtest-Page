import React from "react";
import "./Contactinfo.css";

const ContactInfo = ({ contact }) => {
  return (
    <>
      <div className="container">
        <div className="contact-container">
          <div>
            <img className="mail-img" src="img/EmailPhone.svg" alt="" />
            <span>Contact {contact?.name}</span>
          </div>
          <div className="mail-info">
            <p>{contact?.email}</p>
            <p>{contact?.tel}</p>
          </div>
        </div>
        <div className="shipping-container">
          <div>
            <img className="shipping-img" src="/img/Shipping.svg" alt="" />
            <span>Shipping Address</span>
          </div>
          <div className="mail-info">
            <p>{contact?.shipping_address}</p>
            <p>{contact?.county}</p>
          </div>
        </div>
        <div className="invoice-container">
          <div>
            <img className="invoice-img" src="img/Invoice.svg" alt="" />
            <span>Invoice Address</span>
          </div>
          <div className="mail-info">
            <p>{contact?.shipping_address}</p>
            <p>{contact?.county}</p>
          </div>
        </div>
      </div>
      <span className="brake-line"></span>
    </>
  );
};

export default ContactInfo;

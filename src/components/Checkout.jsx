import React, { useState } from "react";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";
import ProductImg from "../assets/images/mens/seven.jpg";
import { apiUrl } from "../http.jsx";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !formData.mobile
    ) {
      alert("Please fill all billing details");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${apiUrl}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          payment_method: paymentMethod,
          items: [
            {
              title: "Product Title",
              price: 10,
              size: "S",
              quantity: 1,
            },
            {
              title: "Product Title",
              price: 10,
              size: "S",
              quantity: 1,
            },
          ],
          subtotal: 20,
          shipping: 5,
          total: 25,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Checkout failed");
      }

      alert(data.message || "Order placed successfully");
      console.log("Checkout response:", data);

      setFormData({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        mobile: "",
      });

      setPaymentMethod("cod");
    } catch (error) {
      console.error("Checkout error:", error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className="py-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7">
            <h3 className="border-bottom pb-3">
              <strong>Billing details</strong>
            </h3>

            <div className="row pt-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="mb-3">
                  <textarea
                    name="address"
                    className="form-control"
                    rows={3}
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="zipCode"
                    className="form-control"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <h3 className="border-bottom pb-3">
              <strong>Items</strong>
            </h3>

            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <img src={ProductImg} alt="Product" width="80" />
                  </td>
                  <td>Product Title</td>
                  <td>$10</td>
                  <td>S</td>
                  <td>X 1</td>
                </tr>
                <tr>
                  <td>
                    <img src={ProductImg} alt="Product" width="80" />
                  </td>
                  <td>Product Title</td>
                  <td>$10</td>
                  <td>S</td>
                  <td>X 1</td>
                </tr>
              </tbody>
            </table>

            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <div>Subtotal</div>
                  <div>$20</div>
                </div>

                <div className="d-flex justify-content-between border-bottom py-2">
                  <div>Shipping</div>
                  <div>$5</div>
                </div>

                <div className="d-flex justify-content-between border-bottom py-2">
                  <div>
                    <strong>Grand total</strong>
                  </div>
                  <div>$25</div>
                </div>
              </div>
            </div>

            <h3 className="border-bottom pt-4 pb-3">
              <strong>Payment Method</strong>
            </h3>

            <div>
              <input
                type="radio"
                name="paymentMethod"
                onChange={handlePaymentMethod}
                checked={paymentMethod === "stripe"}
                value="stripe"
              />
              <label className="form-label ps-2">Stripe</label>

              <input
                type="radio"
                name="paymentMethod"
                onChange={handlePaymentMethod}
                checked={paymentMethod === "cod"}
                value="cod"
                className="ms-3"
              />
              <label className="form-label ps-2">COD</label>
            </div>

            <div className="d-flex py-3">
              <button
                className="btn btn-primary"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
import axios from "axios"
export const Home = (props) => {
  async function displayRazorpay() {
    // const res = await loadScript(
    //     "https://checkout.razorpay.com/v1/checkout.js"
    // );

    // if (!res) {
    //     alert("Razorpay SDK failed to load. Are you online?");
    //     return;
    // }

    // creating a new order
    const result = await axios.post("http://localhost:8001/api/payment", {total: 100});
    console.log(result);

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_7PuRblb0zenwnJ", 
        amount: amount.toString(),
        currency: currency,
        name: "Soumya Corp.",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:5000/payment/success", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
 
  return (
    <header id="header">




      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Bulk Ninjas
                  <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹500
                </button>
                  <span></span>
                </h1>
                <p>
                  Mutating discounts with accelerated buying. Start using Bulk
                  Ninjas to buy your favourite products in groups and get big
                  disounts.
                </p>
                <a
                  href="/register"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Register Now
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

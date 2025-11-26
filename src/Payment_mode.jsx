import { useContext, useState } from "react";
import Cash from "./Cash";
import Upi from "./Upi";
import Credit from "./Credit";
import Debit from "./Debit";
import Netbanking from "./Netbanking";
import { RechargeContext } from "./MobileRecharge";
import "./App.css";

function Payment_mode() {
  const [Payment_Mode, setPayment_Mode] = useState("");
  const [pay_amount, setpay_amount] = useState(true);
  const [showComponent, setshowComponent] = useState(null);
  const { number, amount } = useContext(RechargeContext);

  function payment_mode_check(e) {
    setshowComponent(null);
    let value = e.target.value;
    setPayment_Mode(value);
    if (value == "") {
      setpay_amount(true);
    } else {
      setpay_amount(false);
    }
  }

  function on_pay_amount() {
    if (Payment_Mode == "cash") {
      setshowComponent(<Cash />);
    } else if (Payment_Mode == "upi") {
      setshowComponent(<Upi />);
    } else if (Payment_Mode == "credit") {
      setshowComponent(<Credit />);
    } else if (Payment_Mode == "debit") {
      setshowComponent(<Debit />);
    } else if (Payment_Mode == "netbanking") {
      setshowComponent(<Netbanking />);
    } else {
      setshowComponent(null);
    }
  }

  return (
    <>
      <div id="Payment_details">
        <p>
          Mobile No. :- <span id="mobile_number">{number}</span>
        </p>
        <p>SIM Name :- Jio</p>
        <p>
          Total Amount :- <span id="total_pay_amount">{amount}</span>
        </p>
        Payment Mode :-
        <select
          name="Payment_Mode"
          value={Payment_Mode}
          id="Payment_Mode"
          onChange={payment_mode_check}
        >
          <option value="">Select Payment Mode</option>
          <option value="cash">Cash</option>
          <option value="upi">UPI</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="netbanking">Netbanking</option>
        </select>
        <br />
        <br />
        <button id="pay_amount" onClick={on_pay_amount} disabled={pay_amount}>
          Next
        </button>
      </div>
      <div>{showComponent}</div>
    </>
  );
}
export default Payment_mode;

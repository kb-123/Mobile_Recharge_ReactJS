import { useState } from "react";
import Swal from "sweetalert2";
import Summary from "./Summary";
import "./App.css";

function Credit() {
  const [credit_input, setcredit_input] = useState("");
  const [pay_btn, set_pay_btn] = useState(true);
  const [showSummary, setShowSummary] = useState(false);

  function Sweetalert() {
    Swal.fire({
      title: "Recharge Successful!",
      text: "Your mobile has been recharged successfully 🎉",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#3085d6",
      timer: 2000,
      timerProgressBar: true,
    }).then(() => {
      setShowSummary(true);
    });
  }

  function handleCredit(e) {
    let VALUE = e.target.value;
    VALUE = VALUE.replace(/\D/g, "");
    VALUE = VALUE.replace(/(\d{4})(?=\d)/g, "$1 ");
    setcredit_input(VALUE);

    if (/^(\d{4}\s){3}\d{4}$/.test(VALUE)) {
      document.getElementById("credit_input_error").innerText = "";
      set_pay_btn(false);
    } else {
      document.getElementById("credit_input_error").innerText =
        "Invalid Number";
      set_pay_btn(true);
    }
  }

  return (
    <>
      <div id="credit_box">
        <center>Enter Credit Card Number :-</center>
        <input
          type="text"
          id="credit_input"
          value={credit_input}
          onChange={handleCredit}
          placeholder="Enter Number"
          maxLength="19"
        />
        <span id="credit_input_error"></span>
        <br />
        <br />
        <center style={{ userSelect: "none" }}>
          Example: 9876 6788 5432 4567 <br />
          Example: 1234 5432 4545 7684 <br />
          Example: 4674 6574 7658 6574
        </center>
        <br />
        <button id="credit_pay" disabled={pay_btn} onClick={Sweetalert}>
          Pay
        </button>
      </div>
      {showSummary ? <Summary payment_type={"Credit Card"}></Summary> : ""}
    </>
  );
}
export default Credit;

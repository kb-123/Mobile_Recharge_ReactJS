import { useState } from "react";
import Swal from "sweetalert2";
import Summary from "./Summary";
import "./App.css";

function Debit() {
  const [Debit_input, setDebit_input] = useState();
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
  function handleDebit(e) {
    let VALUE = e.target.value;
    VALUE = VALUE.replace(/\D/g, "");
    VALUE = VALUE.replace(/(\d{4})(?=\d)/g, "$1 ");
    VALUE = VALUE;
    setDebit_input(VALUE);

    if (/[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/.test(VALUE)) {
      document.getElementById("Debit_input_error").innerText = "";
      set_pay_btn(false);
    } else {
      document.getElementById("Debit_input_error").innerText = "Invalid Number";
      set_pay_btn(true);
    }
  }

  return (
    <>
      <div id="Debit_box">
        <center>Enter Debit Card Number :-</center>
        <input
          type="text"
          id="Debit_input"
          value={Debit_input}
          onChange={handleDebit}
          placeholder="Enter Number"
        />
        <span id="Debit_input_error"></span>
        <br />
        <br />
        <center style={{ userSelect: "none" }}>
          For Example :- 9876 6788 5432 4567
          <br />
          For Example :- 1234 5432 4545 7684
          <br />
          For Example :- 4674 6574 7658 6574
        </center>
        <br />
        <button id="Debit_pay" disabled={pay_btn} onClick={Sweetalert}>
          Pay
        </button>
      </div>
      {showSummary ? <Summary payment_type={"Debit Card"}></Summary> : ""}
    </>
  );
}
export default Debit;

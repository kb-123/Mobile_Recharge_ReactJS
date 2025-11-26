import { useState } from "react";
import Swal from "sweetalert2";
import Summary from "./Summary";
import "./App.css";

function Upi() {
  const [upi_input, setupi_input] = useState();
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

  function handleUPI(e) {
    let VALUE = e.target.value;
    setupi_input(VALUE);

    if (/[0-9a-zA-Z]{2,}[@][a-z]{2,6}$/.test(VALUE)) {
      document.getElementById("upi_input_error").innerText = "";
      set_pay_btn(false);
    } else {
      document.getElementById("upi_input_error").innerText = "Invalid UPI Id";
      set_pay_btn(true);
    }
  }

  return (
    <>
      <div id="upi_box">
        <center>
          Enter UPI Id :-
          <input
            type="text"
            id="upi_input"
            value={upi_input}
            onChange={handleUPI}
            placeholder="Enter UPI Id"
          />
        </center>
        <span id="upi_input_error"></span>
        <br />
        <br />
        <center style={{ userSelect: "none" }}>
          For Example :- 9876543210@upi <br />
          For Example :- myname@paytm <br />
          For Example :- my_name@okicici
        </center>
        <br />
        <button id="upi_pay" disabled={pay_btn} onClick={Sweetalert}>
          Pay
        </button>
      </div>
      {showSummary ? <Summary payment_type={"UPI Transaction"}></Summary> : ""}
    </>
  );
}
export default Upi;

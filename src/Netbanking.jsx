import { useState } from "react";
import Swal from "sweetalert2";
import Summary from "./Summary";
import "./App.css";

function Netbanking() {
  const [account_input, setaccount_input] = useState();
  const [ifsc, setifsc] = useState();
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

  function bank_code(e) {
    let NETBANKING_INPUT = e.target.value;
    if (NETBANKING_INPUT == "") {
      document.getElementById("bank_input_error").innerText =
        "Please Select a Bank";
      setifsc("");
      setaccount_input("");
      set_pay_btn(true);
    } else if (NETBANKING_INPUT == "SBI") {
      setifsc("SBIN0050590");
      document.getElementById("bank_input_error").innerText = "";
    } else if (NETBANKING_INPUT == "HDFC") {
      setifsc("HDFC0007244");
      document.getElementById("bank_input_error").innerText = "";
    } else if (NETBANKING_INPUT == "ICICI") {
      setifsc("ICICI0001859");
      document.getElementById("bank_input_error").innerText = "";
    } else if (NETBANKING_INPUT == "BOB") {
      setifsc("BARB0VIJIND");
      document.getElementById("bank_input_error").innerText = "";
    } else if (NETBANKING_INPUT == "BOI") {
      setifsc("BKID0008810");
      document.getElementById("bank_input_error").innerText = "";
    } else if (NETBANKING_INPUT == "PNB") {
      setifsc("PUNB0462200");
      document.getElementById("bank_input_error").innerText = "";
    } else if (NETBANKING_INPUT == "AXIS") {
      setifsc("UTIB0000568");
      document.getElementById("bank_input_error").innerText = "";
    } else if (NETBANKING_INPUT == "IDBI") {
      setifsc("IBKL0000155");
      document.getElementById("bank_input_error").innerText = "";
    }
  }

  function handleAccount(e) {
    let VALUE = e.target.value;
    setaccount_input(VALUE);

    if (/[0-9]{9,18}$/.test(VALUE)) {
      document.getElementById("account_input_error").innerText = "";
      set_pay_btn(false);
    } else {
      document.getElementById("account_input_error").innerText =
        "Invalid A/C Number";
      set_pay_btn(true);
    }
  }

  return (
    <>
      <div id="netbanking_box">
        Select Bank Name :-
        <select name="Bank" id="bank_input" onChange={bank_code}>
          <option value="">Select Bank</option>
          <option value="SBI">SBI</option>
          <option value="HDFC">HDFC</option>
          <option value="ICICI">ICICI</option>
          <option value="BOB">BOB</option>
          <option value="BOI">BOI</option>
          <option value="PNB">PNB</option>
          <option value="AXIS">AXIS</option>
          <option value="IDBI">IDBI</option>
        </select>
        <span id="bank_input_error"></span> <br />
        IFSC Code :-
        <input
          type="text"
          readOnly
          id="ifsc"
          value={ifsc}
          placeholder="IFSC Code"
        />
        <br />
        Enter Account Number :-
        <input
          type="text"
          id="account_input"
          value={account_input}
          onChange={handleAccount}
          placeholder="Enter A/C No."
        />
        <span id="account_input_error"></span> <br />
        <button id="netbanking_pay" disabled={pay_btn} onClick={Sweetalert}>
          Pay
        </button>
      </div>
      {showSummary ? <Summary payment_type={"NetBanking"}></Summary> : ""}
    </>
  );
}
export default Netbanking;

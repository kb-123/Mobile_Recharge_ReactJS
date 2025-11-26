import { createContext, useRef, useState } from "react";
import Payment_mode from "./Payment_mode";
import "./App.css";

export const RechargeContext = createContext();
function MobileRecharge() {
  const cust_name = useRef();
  const cust_number = useRef();
  const Recharge_plans = useRef();
  const total_amount = useRef();
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [rechargeData, setRechargeData] = useState({
    name: "",
    number: "",
    plan: "",
    amount: "",
  });

  function handleName() {
    const NAMEREGEX = /^[A-Za-z\s]+$/;
    if (!NAMEREGEX.test(cust_name.current.value)) {
      document.getElementById("cust_name_error").innerText =
        "Invalid Name! Only letters and spaces are allowed.";
      cust_name.current.value = cust_name.current.value.slice(0, -1);
      return false;
    } else {
      document.getElementById("cust_name_error").innerText = "";
      return true;
    }
  }

  function handleNumber() {
    const NUMBERREGEX = /^[6-9][0-9]{9}$/;
    if (!NUMBERREGEX.test(cust_number.current.value)) {
      document.getElementById("cust_number_error").innerText =
        "Invalid Number! Must be 10 digits starting with 6-9.";
      if (cust_number.current.value.length > 10) {
        cust_number.current.value = cust_number.current.value.slice(0, 10);
      }
      return false;
    } else {
      document.getElementById("cust_number_error").innerText = "";
      return true;
    }
  }

  function handlePlan() {
    if (Recharge_plans.current.value === "") {
      document.getElementById("recharge_plan_error").innerText =
        "Please select a recharge plan.";
      return false;
    } else {
      document.getElementById("recharge_plan_error").innerText = "";
      total_amount.current.value = Math.round(
        parseInt(Recharge_plans.current.value) * 1.18
      );

      return true;
    }
  }

  function validate() {
    setIsValid(false);
    const valid = handleName() && handleNumber() && handlePlan();
    setIsPaymentEnabled(valid);
    return valid;
  }

  function check_btn() {
    if (isPaymentEnabled) {
      setRechargeData({
        name: cust_name.current.value,
        number: cust_number.current.value,
        plan: Recharge_plans.current.value,
        amount: total_amount.current.value,
      });
      setIsValid(true);
      setIsPaymentEnabled(false);
    } else {
      setIsValid(false);
    }
  }

  return (
    <RechargeContext.Provider value={rechargeData}>
      <div id="container">
        <div id="Cust_details">
          Customer Name :-
          <input
            type="text"
            id="cust_name"
            ref={cust_name}
            onChange={() => {
              handleName();
              validate();
            }}
          />
          <span id="cust_name_error"></span> <br />
          Mobile No. :-
          <input
            type="text"
            id="cust_number"
            ref={cust_number}
            onChange={() => {
              handleNumber();
              validate();
            }}
          />
          <span id="cust_number_error"></span> <br />
          Recharge Plan :-
          <select
            name="Recharge_plans"
            id="Recharge_plans"
            ref={Recharge_plans}
            onChange={() => {
              handlePlan();
              validate();
            }}
          >
            <option value="">Select a Plan</option>
            <option value="199">₹199 - 28 Days, 1GB/Day</option>
            <option value="299">₹299 - 28 Days, 2GB/Day</option>
            <option value="399">₹399 - 56 Days, 1.5GB/Day</option>
            <option value="599">₹599 - 84 Days, 2GB/Day</option>
            <option value="799">₹799 - 84 Days, 2.5GB/Day</option>
            <option value="1499">₹1499 - 365 Days, 2GB/Day</option>
          </select>
          <span id="recharge_plan_error"></span> <br />
          Total amount with 18% GST :-
          <input
            type="text"
            id="total_amount"
            ref={total_amount}
            readOnly
            placeholder="Amount including GST"
          />
          <br />
          <br />
          <button
            id="payment_mode"
            disabled={!isPaymentEnabled}
            onClick={check_btn}
          >
            Select Payment Mode
          </button>
        </div>
      </div>
       {isValid ? <Payment_mode /> : null}
    </RechargeContext.Provider>
  );
}

export default MobileRecharge;

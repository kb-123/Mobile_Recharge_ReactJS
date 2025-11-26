import { useContext } from "react";
import { RechargeContext } from "./MobileRecharge";
import "./App.css";

function Summary({ payment_type }) {
  let transactionId = "";
  const Today = new Date();
  const Recharge_date = Today.toLocaleDateString();
  const Recharge_time = Today.toLocaleTimeString();

  const { name, number, amount, plan } = useContext(RechargeContext);

  let benefit = "";
  let validity = "";

  switch (plan) {
    case "199":
      benefit = "1GB/Day, Unlimited Calls";
      validity = "28 Days";
      break;
    case "299":
      benefit = "2GB/Day, Unlimited Calls";
      validity = "28 Days";
      break;
    case "399":
      benefit = "1.5GB/Day, Unlimited Calls";
      validity = "56 Days";
      break;
    case "599":
      benefit = "2GB/Day, Unlimited Calls + 100 SMS/Day";
      validity = "84 Days";
      break;
    case "799":
      benefit = "2.5GB/Day, Unlimited Calls + 100 SMS/Day";
      validity = "84 Days";
      break;
    case "1499":
      benefit = "2GB/Day, Unlimited Calls + OTT Access";
      validity = "365 Days";
      break;
    default:
      benefit = "N/A";
      validity = "N/A";
  }

  if (payment_type !== "Cash Payment") {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 15; i++) {
      transactionId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }

  return (
    <div id="summary_box">
      <h1>RECHARGE SUCCESSFUL!</h1>
      <h2>Summary</h2>
      <p>
        Customer Name :- <span id="summary_name">{name}</span>
      </p>
      <p>
        Mobile No. :- <span id="summary_number">{number}</span>
      </p>
      <p>
        Recharge Plan :- <span id="summary_recharge_plan">{plan}</span>
      </p>
      <p>
        Total Amount Paid :- <span id="summary_total_amount">₹{amount}</span>
      </p>
      <p>
        Benefit :- <span id="summary_benefit">{benefit}</span>
      </p>
      <p>
        Validity :- <span id="summary_validity">{validity}</span>
      </p>
      <p>
        Recharge Date :- <span id="summary_date">{Recharge_date}</span>
      </p>
      <p>
        Recharge Time :- <span id="summary_time">{Recharge_time}</span>
      </p>
      <p>
        Expiry Date :-{" "}
        <span id="summary_expiry">
          {new Date(
            Today.getTime() + (parseInt(validity) || 0) * 24 * 60 * 60 * 1000
          ).toLocaleDateString()}
        </span>
      </p>
      <p>
        Expiry Time :- <span id="summary_expiry_time">{Recharge_time}</span>
      </p>
      {payment_type !== "Cash Payment" && (
        <p id="summary_trans_id">Transaction Id :- {transactionId}</p>
      )}
      <p>
        Payment Mode :- <span id="summary_payment_mode">{payment_type}</span>
      </p>
    </div>
  );
}

export default Summary;

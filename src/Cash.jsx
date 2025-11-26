import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Summary from "./Summary";
import "./App.css";

function Cash() {
  const [showSummary, setShowSummary] = useState(false);
  useEffect(() => {
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
  }, []);

  return (
    <>{showSummary ? <Summary payment_type={"Cash Payment"}></Summary> : ""}</>
  );
}

export default Cash;

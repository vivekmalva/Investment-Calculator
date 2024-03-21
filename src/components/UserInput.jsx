import { useState } from "react";
import Input from "../UI/Input";

export default function UserInput({ Investment, setInvestment }) {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  function InputChangeHandler(value, input) {
    switch (input) {
      case "initialInvestment":
        setInitialInvestment(value);
        break;
      case "annualInvestment":
        setAnnualInvestment(value);
        break;
      case "expectedReturn":
        setExpectedReturn(value);
        break;
      case "duration":
        setDuration(value);
        break;
    }
    console.log("test");
    // setInvestment({
    //   initialInvestment,
    //   annualInvestment,
    //   expectedReturn,
    //   duration,
    // });
    setInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [input]: value,
      };
    });
  }
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          id="initial-investment"
          onChange={(e) =>
            InputChangeHandler(e.currentTarget.value, "initialInvestment")
          }
          value={initialInvestment}
        />
        <Input
          label="Annual Investment"
          id="annual-investment"
          onChange={(e) =>
            InputChangeHandler(e.currentTarget.value, "annualInvestment")
          }
          value={annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          id="Expected-Return"
          onChange={(e) =>
            InputChangeHandler(e.currentTarget.value, "expectedReturn")
          }
          value={expectedReturn}
        />
        <Input
          label="Duration"
          id="Duration"
          onChange={(e) =>
            InputChangeHandler(e.currentTarget.value, "duration")
          }
          value={duration}
        />
      </div>
    </div>
  );
}

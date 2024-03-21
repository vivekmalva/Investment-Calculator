import { useEffect, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [investment, setInvestment] = useState({});

  const [result, setResult] = useState({});
  console.log(result);
  useEffect(() => {
    let resultObj = calculateInvestmentResults(investment);
    setResult(resultObj);
  }, [investment]);
  return (
    <>
      <Header />
      <UserInput investment={investment} setInvestment={setInvestment} />
      <Result result={result} />
    </>
  );
}

export default App;

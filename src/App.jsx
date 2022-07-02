import Transactions from "./components/Transaction";
import Wellcome from "./components/Wellcome";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-800	">
      <Wellcome />
      <Transactions />
    </div>
  );
};

export default App;

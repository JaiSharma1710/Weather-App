import { Fragment, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Mainbody from "./components/Mainbody/Mainbody";
import Alert from "./components/Ui/Alert";

function App() {
  const [state, setState] = useState(false);

  const manageAlert = (status) => {
    setState(status);
  };

  return (
    <Fragment>
      <Navbar />
      {state && <Alert />}
      <Mainbody alertStatus={manageAlert} />
    </Fragment>
  );
}

export default App;

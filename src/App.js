import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import MainUsers from "./components/Users/MainUsers";
import Adduser from "./components/Users/Adduser";
import PaymentForm from "./components/Payment/PaymentForm";
import PaymentUsers from "./components/Payment/PaymentUsers";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <PaymentUsers />
    </div>
  );
}

export default App;

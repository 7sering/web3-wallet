import "./App.css";
import { useState } from "react";
import logo from "./moralisLogo.svg";
import { Select } from "antd";

function App() {
  const [selectedChain, setSelectedChain] = useState("0x1");

  return (
    <div className="App">
      <header>
        <img src={logo} className="headerlogo" alt="logo" />
        <Select
        onChange={(e) => setSelectedChain(e)}
          value={selectedChain}
          options={[
            {
              label: "Ethereum",
              value: "0x1",
            },

            {
              label: "Mumbai Testnet",
              value: "0x13562",
            },

            {
              label: "POlygon",
              value: "0x1476",
            },

            {
              label: "Avalanche",
              value: "0x186",
            },
          ]}
          className="dropdown"
        ></Select>
      </header>
    </div>
  );
}

export default App;

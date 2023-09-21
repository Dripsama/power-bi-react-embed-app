import "./App.css";
import { useEffect, useState } from "react";
import { PowerBIComponent } from "./components/PowerBiComponent";
import { Dropdown } from "./components/Dropdown";
import { Report } from "powerbi-client";
import { $question } from "./store";
import { handleApiCall } from "./apiHelper";
import { useStore } from "@nanostores/react";

function App() {
  const [config, setConfig] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Page");
  const [displayPowerBI, setDisplayPowerBI] = useState(false);
  let question = useStore($question);
  const reportId = "c0f5937f-cecb-481e-ad61-aeec603102eb";

  const fetchData = async () => {
    try {
      const response = await handleApiCall(selectedOption, reportId);
      console.log("response", response);
      setConfig(() => response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the async fetchData function
    console.log("useEffect");
  }, [reportId, selectedOption]);

  const handleFetchEmbedClick = () => {
    setDisplayPowerBI(!displayPowerBI);
  };

  console.log("question", question);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test React Application</h1>
        {selectedOption === "QNA-2" && (
          <input
            type="text"
            value={question}
            onChange={(e) => $question.set(e.target.value)}
            placeholder="Enter text"
          />
        )}
        <Dropdown onOptionChange={setSelectedOption} />
        <button onClick={handleFetchEmbedClick}>
          {displayPowerBI ? "Hide Embed" : "Fetch Embed"}
        </button>

        {displayPowerBI && (
          <PowerBIComponent
            config={config}
            type={selectedOption.toLowerCase()}
          />
        )}
      </header>
    </div>
  );
}

export default App;

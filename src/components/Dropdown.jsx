import { useEffect, useState } from "react";

export const Dropdown = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState("Page");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    onOptionChange(selectedOption);
  }, [selectedOption, onOptionChange]);

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="Page">Page</option>
        <option value="Report">Report</option>
        <option value="Visual">visual</option>
        <option value="QNA-1">qna-1</option>
        <option value="QNA-2">qna-2</option>
      </select>
    </div>
  );
};

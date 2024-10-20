import React, { useState } from "react";
import CalendarComponent from "./CalendarComponent"; // Your DatePicker component

const App = () => {
  // State to store the result to be displayed
  const [result, setResult] = useState("No result yet.");

  // Function to handle the date change
  const handleDateChange = (resultValue) => {
    setResult(resultValue);
  };

  return (
    <div>
      <h1>App Component</h1>
      
      {/* Display the result in the div */}
      <div>{result}</div>

      {/* Render the CalendarComponent and pass the handleDateChange function */}
      <CalendarComponent onDateChange={handleDateChange} />
    </div>
  );
};

export default App;

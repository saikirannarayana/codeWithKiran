import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarComponent = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handle the date change for start and end dates
  const handleDateChange = (date, type) => {
    if (type === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }

    // Call handleChange function when both dates are selected
    if (date && startDate && type === "end") {
      handleChange(startDate, date);
    } else if (date && endDate && type === "start") {
      handleChange(date, endDate);
    }
  };

  // Function to handle the change and evaluate conditions
  const handleChange = (start, end) => {
    // Define the condition (between September 1 and September 5)
    const startCondition = new Date('2024-09-01');
    const endCondition = new Date('2024-09-05');

    // Check if the selected range falls within the specified condition
    if (start >= startCondition && end <= endCondition) {
      onDateChange("Value: 100"); // Set the value if the condition is met
    } else {
      onDateChange("Value: 0"); // Set a different value if the condition is not met
    }
  };

  return (
    <div>
      <h2>Calendar Component</h2>

      {/* Start Date Picker */}
      <DatePicker 
        selected={startDate}
        onChange={(date) => handleDateChange(date, "start")}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select start date"
      />

      {/* End Date Picker */}
      <DatePicker 
        selected={endDate}
        onChange={(date) => handleDateChange(date, "end")}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Select end date"
      />
    </div>
  );
};

export default CalendarComponent;

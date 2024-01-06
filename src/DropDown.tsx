import { setMonth, setYear } from "date-fns";
import React, { ChangeEvent, useState } from "react";

interface YearDropDownProps {
  onYearChange: (date: Date) => void;
  value: Date;
}
const YearDropDown: React.FC<YearDropDownProps> = ({ value, onYearChange }) => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Generate an array of the last 30 years
  const years = Array.from({ length: 30 }, (_, index) => currentYear - index);

  const [selectedYear, setSelectedYear] = useState<string>("");

  const changeYear = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    const year = setYear(value, parseInt(selectedYear, 10));
    setSelectedYear(selectedYear);
    onYearChange(year);
    // You can perform additional actions when the year changes
  };

  return (
    <div>
      <select id="year" value={selectedYear} onChange={changeYear}>
        <option value="" disabled hidden>
          Year
        </option>
        {years.map((year) => (
          <option key={year} value={year.toString()}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

interface MonthsDropdownProps {
  value: Date;
  onMonthChange: (date: Date) => void;
}

const MonthsDropdown: React.FC<MonthsDropdownProps> = ({
  value,
  onMonthChange,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  const changeMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = event.target.value;
    const month = setMonth(value, parseInt(selectedMonth, 10) - 1);
    setSelectedMonth(selectedMonth);
    onMonthChange(month);
    // You can perform additional actions when the month changes
  };
  console.log(selectedMonth);
  return (
    <div>
      <select id="month" value={selectedMonth} onChange={changeMonth}>
        <option value="" disabled hidden>
          Month
        </option>
        {months.map((month, index) => (
          <option key={index} value={(index + 1).toString()}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export { YearDropDown, MonthsDropdown };

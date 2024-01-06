import React from "react";
import styled from "styled-components";
import {
  add,
  differenceInDays,
  endOfMonth,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";
import Cell from "./Cell";
import { MonthsDropdown, YearDropDown } from "./DropDown";

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Props = {
  value?: Date;
  onChange: (date: Date) => void;
};
const CalendarWrapper = styled.div`
  width: 400px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const DropDownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px dashed gray;
  border-bottom: 1px dashed gray;
  padding: 10px;
`;

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange(add(value, { months: 1 }));
  const prevYear = () => onChange(sub(value, { years: 1 }));
  const nextYear = () => onChange(add(value, { years: 1 }));

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange(date);
  };

  return (
    <CalendarWrapper>
      <DropDownContainer>
        <p onClick={prevYear}>{"<"}</p>
        <YearDropDown value={value} onYearChange={onChange} />
        <p onClick={nextYear}>{">"}</p>
        <p onClick={prevMonth}>{"<"}</p>
        <MonthsDropdown value={value} onMonthChange={onChange} />
        <p onClick={nextMonth}>{">"}</p>
      </DropDownContainer>

      <Grid>
        {weeks.map((week) => (
          <Cell key={week} className="text-xs font-bold uppercase">
            {week}
          </Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isCurrentDate = date === value.getDate();

          return (
            <Cell
              key={date}
              isActive={isCurrentDate}
              onClick={() => handleClickDate(date)}
            >
              {date}
            </Cell>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
      </Grid>
    </CalendarWrapper>
  );
};

export default Calendar;

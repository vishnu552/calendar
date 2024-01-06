import { format } from "date-fns";
import { useState } from "react";
import Calendar from "./Calender";
import styled from "styled-components";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(currentDate);
  //const handleSetToday = () => setCurrentDate(new Date());
  const Wrapper = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `;
  const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `;
  return (
    <Wrapper>
      <InnerWrapper>
        <p>
          <strong>Selected Date: </strong>
          {format(currentDate, "dd LLLL yyyy")}
        </p>
        <Calendar value={currentDate} onChange={setCurrentDate} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default App;

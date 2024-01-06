import { format } from "date-fns";
import { useState } from "react";
import Calendar from "./Calender";
import styled from "styled-components";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(currentDate);
  //const handleSetToday = () => setCurrentDate(new Date());

  const Section = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 8px;
    align-self: stretch;
  `;
  const MainContainer = styled.div`
      display: flex;
      width: 375px;
      height:175px;
      padding-top: 28px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      border-radius: 6px;
      background: #FFF;

      /* Filter dropdown shadow */
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  `;

  const HeaderDiv = styled.div`
    display: flex;
    padding: 0px 28px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
  `
  const FormDiv = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: flex-start; */
    align-self: stretch;
    align-items: center;
    
    
      
  `
  const FormInput = styled.input`
    display: flex;
    width: 113px;
    height: 40px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 6px;
    border: 1px solid var(--Input-Outline-1, #D0D5D8);
    background: var(--White, #FFF);
    color: var(--Placeholder-Text, var(--Disabled-Icon-color, #B0B7BC));
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 0px; /* 0% */
    letter-spacing: 0.14px;
    &:focus{
      color: var(--Placeholder-Text, var(--Disabled-Icon-color, #5078F2));
      border: 1px solid var(--Input-Outline-1, #5078F2  );
      &::placeholder{
      color: var(--Placeholder-Text, var(--Disabled-Icon-color, #5078F2));
    }
    }
    
  `
  const Button = styled.button`
    width:54px;
    height:40px;
    padding: 1px;
    color:${props => props.color};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.1px;
  `
  const Para = styled.p`
    color: var(--Text-2, var(--Hover-Icon-Color, #3C3F41));
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  `

  return (
    <MainContainer>
        <HeaderDiv>
             <h1 style={{ color: "#3C3F41" }}>Enter Dates</h1>
            <FormDiv>
              <Para>From</Para>
              <FormInput placeholder="mm/dd/yyy" type="text" />
              <Para>To</Para>
              <FormInput placeholder="mm/dd/yyy" type="text" />
            </FormDiv>
            <Section>
              <Button color="#618AFF">Save</Button>
              <Button color ="#8E969C">Cancel</Button>
              </Section>
      </HeaderDiv>
      
    </MainContainer>
    // <Wrapper>
    //   <InnerWrapper>
       
    //     {/* <Calendar value={currentDate} onChange={setCurrentDate} /> */}
    //   </InnerWrapper>
    // </Wrapper>
  );
};

export default App;

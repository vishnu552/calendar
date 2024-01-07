// import { format } from "date-fns";
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
    padding-right:15px;
  `;
  const MainContainer = styled.div`
      display: flex;
      width: 375px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      border-radius: 6px;
      background: #FFF;
      margin:100px;
      /* Filter dropdown shadow */
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  `;

  const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
    height:580px;
  `
  const FormDiv = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: flex-start; */
    align-self: stretch;
    align-items: center;
    gap:25px;

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
  const FlexDiv = styled.div`
    padding: 28px;
    `
  const Formator = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `

  return (
    <>
      <MainContainer>
          <HeaderDiv>
            <FlexDiv>
              <h1 style={{ color: "#3C3F41" ,fontSize:"18px" ,fontWeight:"500",paddingBottom:"15px"}}>Enter Dates</h1>
              <FormDiv>
                <Formator>
                  <Para>From</Para>
                  <FormInput placeholder="mm/dd/yyy" type="text" />
                </Formator>
                <Formator>
                  <Para>To</Para>
                  <FormInput placeholder="mm/dd/yyy" type="text" />
                </Formator>
              </FormDiv>
           </FlexDiv>  

              <Calendar value={currentDate} onChange={setCurrentDate} />
              
              <Section>
                <Button color="#618AFF">Save</Button>
                <Button color ="#8E969C">Cancel</Button>
                </Section>
        </HeaderDiv>
    
      </MainContainer>
    </>
  );
};

export default App;

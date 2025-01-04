import { EmployeeCardData } from "types";
import {
  TextDiv,
  TextLabel,
  TextContent,
  EmployeesCardWrapper,
} from "./styles";

function EmployeesCard({
  name,
  surName,
  age,
  jobPosition,
  id,
  slug,
}: EmployeeCardData) {

 
  
  return (
    <EmployeesCardWrapper>
      <TextDiv>
        <TextLabel>Name</TextLabel>
        <TextContent>{name}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Surname</TextLabel>
        <TextContent>{surName}</TextContent>
      </TextDiv>
      {age && (
        <TextDiv>
          <TextLabel>Age</TextLabel>
          <TextContent>{age}</TextContent>
        </TextDiv>
      )}
      <TextDiv>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{jobPosition}</TextContent>
      </TextDiv>
     
    </EmployeesCardWrapper>
  )
}

export default EmployeesCard;

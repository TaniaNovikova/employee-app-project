import { EmployeeCardData } from "employeeProjectTypes";
import { TextDiv, TextLabel, TextContent, EmployeesCardWrapper } from "./styles";

function EmployeesCard({ name, surName, age, jobPosition, id, slug }: EmployeeCardData) {
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
      <TextDiv>
        <TextLabel>Age</TextLabel>
        <TextContent>{age}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{jobPosition}</TextContent>
      </TextDiv>
    </EmployeesCardWrapper>
  );
}

export default EmployeesCard;

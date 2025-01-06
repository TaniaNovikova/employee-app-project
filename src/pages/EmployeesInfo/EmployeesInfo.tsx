import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import queryString from "query-string";
import { employeesData } from "assets/data";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import BackArrow from "assets/goBack.png";

import {
  TextDiv,
  TextLabel,
  TextContent,
  EmployeesCardWrapper,
  GoBackButton,
  ButtonImage,
} from "./styles";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

function EmployeesInfo() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  


  const params = useParams();
  console.log(params);

  const employeeData = employeesData.find(
    (employeeObj) => employeeObj.slug === params.slug
  );

  //если страница служащего не найдена,
  // то пользователь перенаправляется на ту страницу,
  //  на которой есть ссылки на существующие страницы,
  //  т. е. на уровень выше ".." относительно того места,
  // на котором сейчас находится {relative: 'path'}

  const location = useLocation();
  console.log(location);

  const query = queryString.parse(location.pathname);
  console.log(query);

  useEffect(() => {
    if (!employeeData) {
      navigate("..", { relative: "path" });
    }
  }, [employeeData, navigate]);
  return (
    <EmployeesCardWrapper>
      <TextDiv>
        <TextLabel>Name</TextLabel>
        <TextContent>{employeeData?.name}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Surname</TextLabel>
        <TextContent>{employeeData?.surName}</TextContent>
      </TextDiv>
      {employeeData?.age && (
        <TextDiv>
          <TextLabel>Age</TextLabel>
          <TextContent>{employeeData.age}</TextContent>
        </TextDiv>
      )}
      <TextDiv>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{employeeData?.jobPosition}</TextContent>
      </TextDiv>
      {/* <GoBackButton onClick={goBack}>
          <ButtonImage src={BackArrow} />
        </GoBackButton> */}
      <IconButton onClick={goBack} aria-label="go back"
>
        <ArrowBackIcon  sx={{ 
        color: `${EMPLOYEE_PROJECT_COLORS.BLACK}`, 
        fontSize: '40px',
        fontWeight: 'bolder',
        transition: 'color 0.3s', // Добавляем анимацию цвета
        '&:hover': { color: 'darkblue' }, // Цвет при наведении

      }}/>
      </IconButton>
    </EmployeesCardWrapper>
  );
}

export default EmployeesInfo;

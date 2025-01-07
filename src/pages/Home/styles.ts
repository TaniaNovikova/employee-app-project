import styled from "@emotion/styled";
import HRoffice from "assets/meeting-business.jpg";

import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${HRoffice});
  background-size: cover; /* Картинка будет масштабироваться, сохраняя пропорции */
  background-position: center; /* Центрирование изображения */
  background-repeat: no-repeat; /* Изображение не повторяется */
  padding-top: 40px;
  color: ${EMPLOYEE_PROJECT_COLORS.BACKGR_IMG_GREY};
  text-shadow: 0 1px 1px black;
`;
export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${EMPLOYEE_PROJECT_COLORS.LOGO_TURKIS};
  border: 4px double ${EMPLOYEE_PROJECT_COLORS.LOGO_HELL};
  border-radius: 4px;
  width: fit-content;
  height: 60px;
  padding-left: 40px;
  padding-right: 70px;
`;

import styled from "@emotion/styled";
import { Collapse } from "@mui/material";
import { NavLink } from "react-router-dom";

export enum COLORS {
  BACKGROUND_BLUE = "#112233",
  HEADER_WHITE = "#FAF9FF",
  CARD_WHITE = "#FFFFFF",
}

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${COLORS.BACKGROUND_BLUE};
  font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: ${COLORS.HEADER_WHITE};
  padding: 20px 84px;
  color: black;
`;

export const Logo = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 56px;
  height: 100%;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 40px;
  color: ${COLORS.HEADER_WHITE};
`;

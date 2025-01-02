export enum EMPLOYEE_PROJECT_COLORS {
  HEADER_WHITE = "#FAF9FF",
  BLACK = "#000000",
  CARD_WHITE = "#FFFFFF",
  LABELS_GRAY = "#6F6F6F",
  INPUT_BORDERS_GRAY = "#3F3F3F",
  PLACEHOLDER_GRAY = "#1E1E1E",
  PLACEHOLDER_OPACITY = "40%",
  BUTTON_BLUE = "#1F27F5",
  CARD_TEXT = "#1C1C1C",
  MODAL_BUTTON_BG = "#e4f4e2ce",
  MODAL_BUTTON_COLOR = "#1e3c3a",
}

export enum PAGES_PATHS {
  HOME = "/EmployeeProject",
  CREATE_EMPLOYEES = "/create",
  EMPLOYEES = "/employees",
}

export enum EMPLOYEE_FORM_NAMES {
  FIRST_NAME = "name",
  LAST_NAME = "surName",
  AGE = "age",
  POSITION = "jobPosition",
  TERMS_OF_USE = "termsOfUse",
}

export interface COLORS {
  PRIMARY: string;
  ERROR: string;
  PRIMARY_BLUE: string;
  PLACEHOLDER: string;
  LABEL: string;
  DISABLED: string;
  OCEAN_GREEN: string;
  IVORY: string;
}

export const colors: COLORS = {
  PRIMARY: "rgb(26, 35, 53)",
  ERROR: "#D04648",
  PRIMARY_BLUE: "#1f27f5",
  PLACEHOLDER: "#6f6f6f",
  LABEL: "#615c5c",
  DISABLED: "#3f3f3f",
  OCEAN_GREEN: "#639FAB",
  IVORY: "#f5f6e8",
};

import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { Alert } from "@mui/material";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Checkbox from "components/Checkbox/Checkbox";
import { EmployeeAppContext } from "pages/EmployeeAppProject/contexts/EmployeeAppContext";

import { ModalButton, EmployeeFormContainer, InputsContainer } from "./styles";
import { PagesPaths } from "pages/EmployeeAppProject/Layout/types";
import Modal from "components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { EMPLOYEE_FORM_NAMES } from "enums";
import { EmployeeCardData, EmployeeFormValue } from "employeeProjectTypes";

function CreateEmployeeForm() {
  const employeeDataContext = useContext(EmployeeAppContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [employeeCardData, setEmployeeCardData] = useState<EmployeeCardData>({
    name: "",
    surName: "",
    age: 0,
    jobPosition: "",
    id: 0,
    slug: "0",
  });

  const navigate = useNavigate();

  const onModalClose = () => {
    setModalOpen(false);
    navigate(PagesPaths.EMPLOYEES);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      // .required("Name field is required")
      // .min(2, "Name field should contain minimum 2 symbols")
      .max(50, "Name field should contain maximum 50 symobols"),
    surName: Yup.string()
      // .required("Surame field is required")
      .max(15, "Surname field should contain maximum 15 symobols"),

    jobPosition: Yup.string().max(
      30,
      "Job Position field should contain maximum 30 symobols"
    ),
  });
  const formik = useFormik<EmployeeFormValue>({
    initialValues: {
      name: "",
      surName: "",
      age: 18,
      jobPosition: "",
      termsOfUse: false,
    },
    validationSchema: validationSchema,
    validateOnChange: true,

    onSubmit: (values, helpers) => {
      employeeDataContext.setEmployees((prevValue: EmployeeCardData[]) => {
        return [
          ...prevValue,
          {
            name: values.name,
            surName: values.surName,
            age: values.age,
            jobPosition: values.jobPosition,
            id: Date.now(),
            slug: String(Date.now()),
          },
        ];
      });

      console.table(values);
      setModalOpen(true);
      helpers.resetForm();//чтобы не было возможности создать одну и ту же карточку 2 раза
    },
  });
  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
          id="first_name"
          placeholder="John"
          label="Name*"
          value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.LAST_NAME}
          id="last_name"
          placeholder="Johnson"
          label="Surname*"
          value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.AGE}
          id="age"
          placeholder="25"
          type="number"
          min={18}
          max={80}
          step={1}
          label="Age"
          value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.POSITION}
          id="position"
          placeholder="QA"
          label="Job position*"
          value={formik.values[EMPLOYEE_FORM_NAMES.POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
        />
        <Checkbox
          id="agree_id"
          name={EMPLOYEE_FORM_NAMES.TERMS_OF_USE}
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FORM_NAMES.TERMS_OF_USE]}
          label="I agree with the terms of use*"
          type="checkbox"
        />
      </InputsContainer>
      <Button
        name="Create"
        type="submit"
        disabled={!formik.values[EMPLOYEE_FORM_NAMES.TERMS_OF_USE]}
      />

      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Alert severity="success">Employee card is created</Alert>
        <ModalButton onClick={onModalClose}>Show Card</ModalButton>{" "}
      </Modal>
    </EmployeeFormContainer>
  );
}

export default CreateEmployeeForm;

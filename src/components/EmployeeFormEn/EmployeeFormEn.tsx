import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import {
  EmployeeFormContainer,
  EmployeeFormTitle,
  InputsContainer,
} from "./styles";
import { EMPLOYEE_FORM_NAMES, EmployeeFormValue } from "./types";
import ButtonEP from "components/ButtonEP/ButtonEP";
import Checkbox from "components/Checkbox/Checkbox";

function EmployeeFormEn() {
  //создаём валидационную схему через Yup
  const shema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required('The "Name" field is required.')
      .test(
        "Check value length",
        "The field must contain no more than 50 letters.",
        (value) => value.length <= 25
      )
      .test(
        "Check value lenght",
        "The field must contain at least 2 letters",
        (value) => value.length >= 2
      ),
    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required('The field "Surname" is mandatory')
      .test(
        "Check value length",
        "The field must contain no more than 15 letters.",
        (value) => value.length <= 15
      ),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
      .typeError("Age must be a number not less than 18 and not more than 80")
      .min(18, "Minimum age: 18 years or older")
      .max(80, "Maximum age: not older than 80 years"),
    //проверки max и min работают с числовыми значениями и
    //они указывает на минимальное и минимальное значение в поле(!не количество сиволов)
    // .max(150, 'Max 150')
    // .min(18, 'Min 18'),

    [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()

      .required('The field "Job Position" is mandatory.')
      .test(
        "Check value length",
        "The field must contain no more than 30 letters.",
        (value) => value.length <= 30
      ),
  });

  //Настройка формы. Сохраняем возвращаемое useFormik значение (объект) в переменную formik
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.POSITION]: "",
      [EMPLOYEE_FORM_NAMES.TERMS_OF_USE]: false,
    } as unknown as EmployeeFormValue,
    //привязка валидационной схемы Yup к формику формы LoginForm
    validationSchema: shema,
    validateOnChange: false,
    // validateOnMount: true,
    onSubmit: (values: EmployeeFormValue) => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <EmployeeFormTitle>Форма служащего компании</EmployeeFormTitle>
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
          //type="number"
          // min={18}
          // max={80}
          // step={1}
          label="Age"
          value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.POSITION}
          id="position"
          placeholder="QA"
          label="Job Position*"
          value={formik.values[EMPLOYEE_FORM_NAMES.POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
        />
        <Checkbox
          id="agree_id"
          name={EMPLOYEE_FORM_NAMES.TERMS_OF_USE}
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FORM_NAMES.TERMS_OF_USE]}
          label="I have read the rules on non-disclosure of internal information"
          type="checkbox"
        />
      </InputsContainer>
      <ButtonEP
        name="Create"
        type="submit"
        disabled={!formik.values[EMPLOYEE_FORM_NAMES.TERMS_OF_USE]}
      />
    </EmployeeFormContainer>
  );
}

export default EmployeeFormEn;

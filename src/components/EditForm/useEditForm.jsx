import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { validateName, validatePhone, validateBirthday } from "./validate";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890", 5);

const selectEmployeeById = (state, id) => {
  if (!id) {
    return {
      id: Number(nanoid()),
      name: "",
      phone: "",
      role: "",
      birthday: "",
      isArchive: false,
    };
  }

  return state.employees.find((employee) => employee.id === Number(id));
};

const useEditForm = (formType) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialData = useSelector((state) => selectEmployeeById(state, id));

  const [employee, setEmployee] = useState({
    id: initialData.id,
    name: initialData.name,
    phone: initialData.phone,
    role: initialData.role,
    birthday: initialData.birthday,
    isArchive: initialData.isArchive,
  });

  const goBack = () => navigate(-1);

  const [blurred, setBlurred] = useState({
    name: false,
    phone: false,
    birthday: false,
  });

  const [errors, setErrors] = useState({
    name: formType === "edit" ? "" : "Укажите ФИО",
    phone: formType === "edit" ? "" : "Укажите номер телефона",
    birthday: formType === "edit" ? "" : "Укажите дату рождения",
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (errors.name || errors.phone || errors.birthday) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors.name, errors.phone, errors.birthday]);

  const handleBlurChange = useCallback((evt) => {
    const key = evt.target.name;
    setBlurred((prevState) => ({ ...prevState, [key]: true }));
  }, []);

  const handleNameChange = useCallback((evt) => {
    const newName = evt.target.value;
    const nameError = validateName(newName);

    setErrors((prevState) => ({ ...prevState, name: nameError }));
    setEmployee((currentEmployee) => ({ ...currentEmployee, name: newName }));
  }, []);

  const handlePhoneChange = useCallback((evt) => {
    const newPhone = evt.target.value;
    const phoneError = validatePhone(newPhone);
    setEmployee((currentEmployee) => ({
      ...currentEmployee,
      phone: newPhone,
    }));
    setErrors((prevState) => ({ ...prevState, phone: phoneError }));
  }, []);

  const handleRoleChange = useCallback((evt) => {
    const newRole = evt.target.value;
    setEmployee((currentEmployee) => ({ ...currentEmployee, role: newRole }));
  }, []);

  const handleBirthdayChange = useCallback((evt) => {
    const newBirthday = evt.target.value;
    const birthdayError = validateBirthday(newBirthday);
    setEmployee((currentEmployee) => ({
      ...currentEmployee,
      birthday: newBirthday,
    }));

    setErrors((prevState) => ({ ...prevState, birthday: birthdayError }));
  }, []);

  const handleCheckboxChange = useCallback((_evt) => {
    setEmployee((currentEmployee) => ({
      ...currentEmployee,
      isArchive: !currentEmployee.isArchive,
    }));
  }, []);

  const handleSaveChanges = useCallback(() => {
    if (formType === "edit") {
      dispatch({ type: "EMPLOYEES/EDIT", payload: { newData: employee, id } });
    }

    if (formType === "add") {
      dispatch({ type: "EMPLOYEES/ADD", payload: { newData: employee } });
    }

    goBack();
  }, [employee]);

  return {
    fields: {
      name: {
        error: errors.name,
        blurred: blurred.name,
        props: {
          value: employee.name,
          onBlur: (evt) => {
            handleBlurChange(evt);
          },
          onChange: handleNameChange,
        },
      },
      phone: {
        error: errors.phone,
        blurred: blurred.phone,
        props: {
          value: employee.phone,
          onBlur: (evt) => {
            handleBlurChange(evt);
          },
          onChange: handlePhoneChange,
        },
      },
      role: {
        value: employee.role,
        onChange: handleRoleChange,
      },
      birthday: {
        error: errors.birthday,
        blurred: blurred.birthday,
        props: {
          value: employee.birthday,
          onBlur: (evt) => {
            handleBlurChange(evt);
          },
          onChange: handleBirthdayChange,
        },
      },
      isArchive: {
        checked: employee.isArchive,
        onChange: handleCheckboxChange,
      },
    },
    form: {
      onSubmit: () => {
        handleSaveChanges();
      },
      onCancel: () => {
        goBack();
      },
      onBlur: (evt) => {
        handleBlurChange(evt);
      },
      valid: formValid,
    },
  };
};

export { useEditForm };

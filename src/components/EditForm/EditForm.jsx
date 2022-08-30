import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { customAlphabet } from "nanoid";
import "./EditForm.scss";

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

const EditForm = ({ formType }) => {
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

  const handleNameChange = useCallback((evt) => {
    const newName = evt.target.value;
    setEmployee((currentEmployee) => ({ ...currentEmployee, name: newName }));
  }, []);

  const handlePhoneChange = useCallback((evt) => {
    const newPhone = evt.target.value;
    setEmployee((currentEmployee) => ({ ...currentEmployee, phone: newPhone }));
  }, []);

  const handleRoleChange = useCallback((evt) => {
    const newRole = evt.target.value;
    setEmployee((currentEmployee) => ({ ...currentEmployee, role: newRole }));
  }, []);

  const handleBirthdayChange = useCallback((evt) => {
    const newBirthday = evt.target.value;
    setEmployee((currentEmployee) => ({
      ...currentEmployee,
      birthday: newBirthday,
    }));
  }, []);

  const handleCheckboxChange = useCallback((_evt) => {
    setEmployee((currentEmployee) => ({
      ...currentEmployee,
      isArchive: !currentEmployee.isArchive,
    }));
  }, []);

  const handleSaveChanges = useCallback(() => {
    formType === "edit"
      ? dispatch({ type: "EMPLOYEES/EDIT", payload: { newData: employee, id } })
      : dispatch({ type: "EMPLOYEES/ADD", payload: { newData: employee } });

    goBack();
  }, [employee]);

  return (
    <div className="EditForm">
      <form className="EditForm-Form">
        <label>
          ФИО:
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Телефон:
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handlePhoneChange}
          />
        </label>
        <label>
          Должность:
          <select name="role" value={employee.role} onChange={handleRoleChange}>
            <option value="no-role">-------</option>
            <option value="driver">Водитель</option>
            <option value="waiter">Официант</option>
            <option value="cook">Повар</option>
          </select>
        </label>
        <label>
          Дата рождения:
          <input
            type="text"
            name="birthday"
            value={employee.birthday}
            onChange={handleBirthdayChange}
          />
        </label>
        <label className="EditForm-ArchiveCheckbox">
          <input
            type="checkbox"
            name="archive"
            checked={employee.isArchive}
            onChange={handleCheckboxChange}
          />
          В архиве.
        </label>
        <button className="EditForm-BackBtn" type="button" onClick={goBack}>
          Назад
        </button>
        <button type="button" onClick={handleSaveChanges}>
          {formType === "add" ? "Добавить сотрудника" : "Сохранить"}
        </button>
      </form>
    </div>
  );
};

export { EditForm };

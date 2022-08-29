import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.scss";

const selectEmployeeById = (state, id) => {
  return state.employees.find((employee) => employee.id === Number(id));
};

const EditForm = () => {
  const { id } = useParams();
  const employee = useSelector((state) => selectEmployeeById(state, id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const [person, setPerson] = useState({
    name: employee.name,
    phone: employee.phone,
    role: employee.role,
    birthday: employee.birthday,
    isArchive: employee.isArchive,
  });

  const handleNameChange = useCallback((evt) => {
    const newName = evt.target.value;
    setPerson({ ...person, name: newName });
  }, []);

  const handlePhoneChange = useCallback((evt) => {
    const newPhone = evt.target.value;
    setPerson({ ...person, phone: newPhone });
  }, []);

  const handleRoleChange = useCallback((evt) => {
    const newRole = evt.target.value;
    setPerson({ ...person, role: newRole });
  }, []);

  const handleBirthdayChange = useCallback((evt) => {
    const newBirthday = evt.target.value;
    setPerson({ ...person, birthday: newBirthday });
  }, []);

  const handleCheckboxChange = useCallback((_evt) => {
    setPerson({ ...person, isArchive: !person.isArchive });
  }, []);

  const handleSaveChanges = useCallback(() => {
    dispatch({ type: "EMPLOYEES/EDIT", payload: { newData: person, id } });
    goBack();
  }, [person]);

  return (
    <div className="EditForm">
      <form className="EditForm-Form">
        <label>
          ФИО:
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Телефон:
          <input
            type="text"
            name="phone"
            value={person.phone}
            onChange={handlePhoneChange}
          />
        </label>
        <label>
          Должность:
          <select name="role" value={person.role} onChange={handleRoleChange}>
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
            value={person.birthday}
            onChange={handleBirthdayChange}
          />
        </label>
        <label className="EditForm-ArchiveCheckbox">
          <input
            type="checkbox"
            name="archive"
            checked={person.isArchive}
            onChange={handleCheckboxChange}
          />
          В архиве.
        </label>
        <button className="EditForm-BackBtn" type="button" onClick={goBack}>
          Назад
        </button>
        <button type="button" onClick={handleSaveChanges}>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export { EditForm };

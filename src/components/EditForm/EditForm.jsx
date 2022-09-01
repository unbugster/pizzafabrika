import classNames from "classnames";
import React from "react";
import { useEditForm } from "./useEditForm";
import InputMask from "react-input-mask";
import "./EditForm.scss";

const EditForm = ({ formType }) => {
  const {
    fields: { name, phone, role, birthday, isArchive },
    form,
  } = useEditForm(formType);

  return (
    <div className="EditForm">
      <form className="EditForm-Form">
        <div className="EditForm-Inputs">
          <div className="EditForm-ErrorWrapper">
            <label>
              <span
                className={classNames(
                  !name.error && "EditForm-ErrorWrapper_valid"
                )}
              >
                *
              </span>
              ФИО:
              <input
                type="text"
                name="name"
                {...name.props}
                placeholder="Фамилия Имя (Отчество)"
              />
            </label>
            {name.blurred && name.error && (
              <div className="EditForm-ErrorMessage">{name.error}</div>
            )}
          </div>
          <div className="EditForm-ErrorWrapper">
            <label>
              <span
                className={classNames(
                  !phone.error && "EditForm-ErrorWrapper_valid"
                )}
              >
                *
              </span>
              Телефон:
              <InputMask
                mask="+7 (999) 999 99-99"
                maskChar="_"
                name="phone"
                {...phone.props}
                placeholder="+7 (800) 550-0600"
              />
            </label>
            {phone.blurred && phone.error && (
              <div className="EditForm-ErrorMessage">{phone.error}</div>
            )}
          </div>
          <label>
            Должность:
            <select name="role" value={role.value} onChange={role.onChange}>
              <option value="no-role">-------</option>
              <option value="driver">Водитель</option>
              <option value="waiter">Официант</option>
              <option value="cook">Повар</option>
            </select>
          </label>
          <div className="EditForm-ErrorWrapper">
            <label>
              <span
                className={classNames(
                  !birthday.error && "EditForm-ErrorWrapper_valid"
                )}
              >
                *
              </span>
              Дата рождения:
              <InputMask
                mask="99.99.9999"
                maskChar="_"
                type="text"
                name="birthday"
                placeholder="01.04.2011"
                {...birthday.props}
              />
            </label>
            {birthday.blurred && birthday.error && (
              <div className="EditForm-ErrorMessage">{birthday.error}</div>
            )}
          </div>
          <label className="EditForm-ArchiveCheckbox">
            <input
              type="checkbox"
              name="archive"
              checked={isArchive.checked}
              onChange={isArchive.onChange}
            />
            В архиве.
          </label>
        </div>
        <div className="EditForm-Controls">
          <button
            className="EditForm-BackBtn"
            type="button"
            onClick={form.onCancel}
          >
            Назад
          </button>
          <div className="EditForm-ErrorWrapper">
            <button
              className="EditForm-SaveBtn"
              disabled={!form.valid}
              type="button"
              onClick={form.onSubmit}
            >
              {formType === "add" ? "Добавить сотрудника" : "Сохранить"}
            </button>
            {form.valid ? (
              ""
            ) : (
              <div className="EditForm-ErrorMessage">
                Необходимо заполнить поля со звездочкой
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export { EditForm };

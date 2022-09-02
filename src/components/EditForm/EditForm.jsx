import classNames from "classnames";
import React from "react";
import InputMask from "react-input-mask";
import { useEditForm } from "./useEditForm";
import "./EditForm.scss";

const EditForm = ({ formType }) => {
  const {
    fields: { name, phone, role, birthday, isArchive },
    form,
  } = useEditForm(formType);

  return (
    <div className="EditForm">
      <form className="EditForm-Form">
        <div className="EditForm-Inputs is-flex is-flex-direction-column">
          <div className="EditForm-ErrorWrapper">
            <label className="label is-size-5">
              <span
                className={classNames(
                  !name.error && "EditForm-ErrorWrapper_valid"
                )}
              >
                *
              </span>
              ФИО:
              <input
                className="EditForm-Input input has-text-centered is-size-5"
                type="text"
                name="name"
                {...name.props}
                placeholder="Фамилия Имя (Отчество)"
              />
              {name.blurred && name.error && (
                <span className="EditForm-ErrorMessage">{name.error}</span>
              )}
            </label>
          </div>

          <div className="EditForm-ErrorWrapper">
            <label className="label is-size-5">
              <span
                className={classNames(
                  !phone.error && "EditForm-ErrorWrapper_valid"
                )}
              >
                *
              </span>
              Телефон:
              <InputMask
                className="EditForm-Input input has-text-centered is-size-5"
                mask="+7 (999) 999 99-99"
                maskChar="_"
                name="phone"
                {...phone.props}
                placeholder="+7 (800) 550-0600"
              />
              {phone.blurred && phone.error && (
                <span className="EditForm-ErrorMessage">{phone.error}</span>
              )}
            </label>
          </div>

          <label className="label is-size-5">
            Должность:
            <div className="select is-flex">
              <select
                className="has-text-centered"
                name="role"
                value={role.value}
                onChange={role.onChange}
              >
                <option value="no-role">-------</option>
                <option value="driver">Водитель</option>
                <option value="waiter">Официант</option>
                <option value="cook">Повар</option>
              </select>
            </div>
          </label>

          <div className="EditForm-ErrorWrapper">
            <label className="label is-size-5">
              <span
                className={classNames(
                  !birthday.error && "EditForm-ErrorWrapper_valid"
                )}
              >
                *
              </span>
              Дата рождения:
              <InputMask
                className="EditForm-Input input has-text-centered is-size-5"
                mask="99.99.9999"
                maskChar="_"
                type="text"
                name="birthday"
                placeholder="01.04.2011"
                {...birthday.props}
              />
              {birthday.blurred && birthday.error && (
                <span className="EditForm-ErrorMessage">{birthday.error}</span>
              )}
            </label>
          </div>

          <label className="EditForm-ArchiveCheckbox label is-flex is-align-items-center is-size-5">
            <input
              type="checkbox"
              name="archive"
              checked={isArchive.checked}
              onChange={isArchive.onChange}
            />
            В архиве.
          </label>
        </div>

        <div className="EditForm-Controls is-flex is-flex-direction-column">
          <button
            className="EditForm-BackBtn button is-fullwidth is-warning is-responsive is-medium is-rounded"
            type="button"
            onClick={form.onCancel}
          >
            Назад
          </button>
          <div className="EditForm-ErrorWrapper">
            <button
              className="EditForm-SaveBtn button is-fullwidth is-responsive is-medium is-rounded is-success has-text-dark"
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

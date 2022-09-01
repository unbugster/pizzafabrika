const NAME_REGEXP = /^[А-Яа-яёЁ]+(?:[-'\s][А-Яа-яёЁ]+)*$/;
const PHONE_REGEXP = /(^$)|(^\+?(\s|\d|\(|\)|-)+$)/i;
const BIRTHDAY_REGEXP =
  /^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const validateName = (value) => {
  let result = "";
  if (!value) {
    result = "Укажите ФИО";
  } else if (value.length < 3) {
    result = "Минимум 3 символа";
  } else if (!NAME_REGEXP.test(value)) {
    result = "Только русские буквы, пробел и дефис";
  }

  return result;
};

const validatePhone = (value) => {
  let result = "";
  if (!value) {
    result = "Укажите номер телефона";
  } else if (!PHONE_REGEXP.test(value)) {
    result = "Номер заполнен некорректно";
  } else if (value.length < 6) {
    result = "Минимум 6 символов";
  }

  return result;
};

const validateBirthday = (value) => {
  let result = "";

  if (!value) {
    result = "Укажите дату рождения";
  } else if (!BIRTHDAY_REGEXP.test(value) || value.length < 10) {
    result = "Укажите дату в формате: дд.мм.гггг";
  } else {
    result = "";
  }

  return result;
};

export { validateName, validatePhone, validateBirthday };

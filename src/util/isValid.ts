export const validType = {
  EMAIL: "EMAIL",
  PHONE: "PHONE",
  DATE: "DATE",
};

const regExp = {
  EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PHONE: /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/,
  YEAR: /^[1-2][0-9][0-9][0-9]$/,
  MONTH: /^[1][0-2]$|^[0]?[1-9]$/,
  DAY: /\d{1,2}/,
};

const isValidDate = (dateString: string): boolean => {
  var parts = dateString.split("-");
  var day = parseInt(parts[2], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[0], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
    monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
};

type FormResponse = {
  ok: boolean;
  error: string | null;
};

export const isValidForm = (type: string, value: string): boolean => {
  let isValid = false;
  switch (type) {
    case validType.EMAIL:
      isValid = regExp.EMAIL.test(value);
      return isValid;
    case validType.PHONE:
      isValid = regExp.PHONE.test(value);
      return isValid;
    case validType.DATE:
      return isValidDate(value);
  }

  return false;
};

export const isYear = (year: string): boolean => {
  return regExp.YEAR.test(year);
};

export const isMonth = (month: string): boolean => {
  return regExp.MONTH.test(month);
};

export const isDay = (day: string): boolean => {
  return regExp.DAY.test(day);
};

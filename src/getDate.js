export const getDate = (date) => {
  let yesterDate = date.getTime() - 1 * 24 * 60 * 60 * 1000;
  date.setTime(yesterDate);

  let yesterYear = date.getFullYear();
  let yesterMonth = date.getMonth() + 1;
  let yesterDay = date.getDate();

  if (yesterMonth < 10) {
    yesterMonth = "0" + yesterMonth;
  }
  if (yesterDay < 10) {
    yesterDay = "0" + yesterDay;
  }

  return `${yesterYear}${yesterMonth}${yesterDay}`;
};

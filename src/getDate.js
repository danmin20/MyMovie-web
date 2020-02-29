export const getDate = date => {
  //get yesterday
  let year = date.getFullYear();
  let month = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;
  let day = date.getDate() - 1;
  day = day >= 10 ? day : "0" + day;
  return year + month + day;
};

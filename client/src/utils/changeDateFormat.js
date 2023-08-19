const options = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

const changeDateFormat = (given) => {
  const date = new Date(given).toLocaleString("en", options);
  return date;
};

export default changeDateFormat;

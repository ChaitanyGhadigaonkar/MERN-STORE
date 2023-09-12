const options = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

const changeDateFormat = (given) => {
  const date = new Date(given).toLocaleString("en", options);
  return date;
};

export const dashDateFormate = (given) => {
  const date = new Date(given).toLocaleString("en", {
    month: "2-digit",
    day: "numeric",
    year: "numeric",
  });
  return date;
};

export default changeDateFormat;

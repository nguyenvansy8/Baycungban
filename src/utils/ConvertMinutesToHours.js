export const MinutesToHours = (totalMin) => {
  const minutes = totalMin % 60;
  const hours = Math.floor(totalMin / 60);
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
};

const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

const strokeColorByValue = (value: number) => {
  if (value < 20) return "#00ff00";
  if (value < 40) return "#337ab7";
  if (value < 60) return "#f0ad4e";
  if (value < 80) return "#d9534f";
  return "#d9534f";
};

export default strokeColorByValue;

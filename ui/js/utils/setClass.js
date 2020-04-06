

export default function setColor(num = 0) {
  console.log(num, "num");
  switch (num) {
    case 1:
      return "color1";
    case 2:
      return "color2";
    case 3:
      return "color3";
    default:
        return "default";
  }
}

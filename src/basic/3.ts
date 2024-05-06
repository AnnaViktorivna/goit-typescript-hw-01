let mixType: string | number;

type isToggle = "enable" | "disable";

function chooseToggle(toggle: isToggle) {
  if (toggle === "enable") {
    return true;
  } else if (toggle === "disable") {
    return false;
  }
}

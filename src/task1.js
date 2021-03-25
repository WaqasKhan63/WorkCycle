import "./styles.css";
const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime()
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};

// You must use setInterval to complete the task.
function check_inactive() {
  var time_now = new Date().getTime();
  var a = time_now - user.lastActivity;
  if (a > 6 && a % 6 !== 0) {
    a = a % 6;
  }
  if (a > 6 && a % 6 === 0) {
    a = 6;
  }
  if (a === 1 || a === 2) {
    inactiveFirstStage();
  }
  if (a === 3 || a === 4) {
    inactiveSecondStage();
  }
  if (a === 5 || a === 6) {
    inactiveThirdStage();
  }
}
setInterval(check_inactive, 1000);
document.getElementById("task1").innerHTML = "Task 1 output is in console";

import "./styles.css";
var s1 = "aabcc";
var s2 = "adcaa";
function common_counter(a, b) {
  var count = 0;
  var common = {};
  for (var i = 0, end = s1.length; i < end; i++) {
    for (var j = 0, end2 = s2.length; j < end2; j++) {
      if (s1[i] === s2[j] && !common[j]) {
        count += 1;
        common[j] = true;
        break;
      }
    }
  }
  return count;
}
var num = common_counter(s1, s2);
document.getElementById("task2").innerHTML = num;

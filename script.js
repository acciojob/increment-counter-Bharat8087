//your JS code here. If required.
let counter = 0;
document.getElementById("counter").innerHTML = counter;

document.getElementById("incrementBtn").addEventListener("click", function() {
    alert("Current Counter Value: " + counter);
    counter++;
    document.getElementById("counter").innerHTML = counter;
});

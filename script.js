let counter = 0;
document.getElementById("counter").textContent = counter;

document.getElementById("incrementBtn").addEventListener("click", function() {
    alert(" " + counter);
    counter++;
    document.getElementById("counter").textContent = counter;
});



let counter = 0;
document.getElementById("counter").textContent = "Current Counter Value: " + counter; // Update the initial text content

document.getElementById("incrementBtn").addEventListener("click", function() {
    counter++;
    alert("Current Counter Value: " + counter);
    document.getElementById("counter").textContent = "Current Counter Value: " + counter; // Update the text content after incrementing
});

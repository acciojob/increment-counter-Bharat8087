let counterElement = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');

let counter = 0;

incrementBtn.addEventListener('click', function() {
    alert( + counter);
    counter++;
    counterElement.innerHTML = counter;
});

var params = {
    slider: document.getElementById('carousel-container'),
    animate: true,
    animationDelay: 5000, // milliseconds
    animationDuration: 1000 // milliseconds
};

mySlider = new gaBasicSlider(params);

let thisYear = document.getElementById('this-year')
let currentYear = new Date().getFullYear()
thisYear.innerText = currentYear
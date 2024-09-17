function filterCars() {
    // Get the search input
    const searchInput = document.getElementById('carSearch').value.toLowerCase();

    // Get the car grid
    const carGrid = document.getElementById('carGrid');

    // Get all car-box elements
    const cars = carGrid.getElementsByClassName('car-box');

    // Loop through the car-box elements and filter them
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        let carName = car.getElementsByTagName('h3')[0].textContent.toLowerCase();

        if (carName.includes(searchInput)) {
            car.style.display = "";
        } else {
            car.style.display = "none";
        }
    }
}

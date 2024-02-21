

const seatCollections = document.querySelectorAll("#seat-collections button");

const buttonPressed = e => {
    const selectedSeat = e.target.id;
    viewSeatDetails(selectedSeat);
}

for (let seat of seatCollections) {
    seat.addEventListener("click", buttonPressed);
}

// --------next button enable/disable functionality-------------- 

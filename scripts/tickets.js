// buy ticket button

function buyTicketHandel(){
  const scrollTicketsSection = document.getElementById('ticket-count');
  scrollTicketsSection.scrollIntoView({behavior:'smooth'});
}


// addBackgroundColorById()

let selectedSeats = [];

function toggleSeat(seat) {
    if (selectedSeats.includes(seat)) {
        selectedSeats = selectedSeats.filter(item => item !== seat);
        seat.style.backgroundColor = '#f7f8f8';
    } else {
        if (selectedSeats.length < 4) {
            selectedSeats.push(seat);
            seat.style.backgroundColor = 'lightgreen';
        } else {
            alert("You can only select up to 4 seats.");
        }
    }
    
    document.getElementById('bookButton').style.display = selectedSeats.length === 4 ? 'block' : 'none';
}

function bookSeats() {
    alert("Booking seats: " + selectedSeats.map(seat => seat.innerText).join(", "));
}
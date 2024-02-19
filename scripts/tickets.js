// buy ticket button

function buyTicketHandel(){
  const scrollTicketsSection = document.getElementById('ticket-count');
  scrollTicketsSection.scrollIntoView({behavior:'smooth'});
}


// addBackgroundColorById()

let selectedSeats = [];
let totalSeats = 40;
let basePrice = 550;
let discount15 = 0.15;
let discount20 = 0.20;


function toggleSeat(seat) {
    if (selectedSeats.includes(seat)) {
        selectedSeats = selectedSeats.filter(item => item !== seat);
        seat.style.backgroundColor = '#f7f8f8';
        totalSeats++;
        // reamoveBookingInfo(seat);
    } else {
        if (selectedSeats.length < 4 && totalSeats > 0) {
            selectedSeats.push(seat);
            seat.style.backgroundColor = 'lightgreen';
            totalSeats--;
            // addBookingInfo(seat);
        } else {
            alert("You can only select up to 4 seats.");
        }
    }
    selectedSeatsCount();
    seatLeft();
    updatePriceInfo()
    document.getElementById('bookButton').style.display = selectedSeats.length <= 4 ? 'block' : 'none';
}

// booking info
// function addBookingInfo(seat){
//   const bookingInfo = document.getElementById('booking-info');
//     const seatNumber = seat.innerText;
//     const bookingItem = document.createElement('div');
//     bookingItem.classList.add('booking-item');
//     bookingItem.innerHTML = `
//     <p>${seatNumber} </p>
//     <p>Economoy</p>
//     <p>550</p>
//     `;
//     bookingInfo.appendChild(bookingItem);
// }
// // remove booking info
// function reamoveBookingInfo(seat){
//   const seatNumber = seat.innerText;
//   const bookingInfoItems = document.querySelectorAll('.booking-item ');
//   bookingInfoItems.forEach(item => {
//     if(item.innerText.includes(seatNumber)){
//       item.remove();
//     }
//   });
// }

// count seats
function selectedSeatsCount(){
  const selectedSeatsCount =document.getElementById('Selected-Seats-Count');
  selectedSeatsCount.innerText = selectedSeats.length;
}

// total seats left
function seatLeft(){
  const totalSeatLeft = document.getElementById('total-seats-left');
  totalSeatLeft.innerText = totalSeats;
}

// update price info 
function updatePriceInfo(){
  const totalPrice = selectedSeats.length * basePrice;
  let discountPercentage = 0;
  const cuponCode =document.getElementById('couponCode');
  if(cuponCode === 'NEW15'){
      discountPercentage = discount15;
     
  }
  else if(cuponCode === 'Couple 20'){
    discountPercentage = discount20;
  
  }
    const discountPrice = totalPrice * discountPercentage;
    const grandTotalPrice = totalPrice - discountPrice;
    document.getElementById('totalPrice').innerText = `BDT ${totalPrice}`;
    document.getElementById('discount').innerText = `BDT ${discountPrice.toFixed(2)}`;
    document.getElementById('grandTotalPrice').innerText = `BDT ${grandTotalPrice.toFixed(2)}`;
}

// apply cupon
function applyCoupon(){
  const couponCodeInput = document.getElementById('couponCodeInput').value;
  let discountPercentage = 0;
  if(couponCodeInput === 'NEW15'){
    discountPercentage = discount15;
}
else if(couponCodeInput === 'Couple 20'){
  discountPercentage = discount20;
}
else{
  alert("Give a coupon code this NEW20 or that Couple 20 ")
}
const totalPrice = selectedSeats.length * basePrice;
const discountPrice = totalPrice * discountPercentage;
const grandTotalPrice = totalPrice - discountPrice;


document.getElementById('discount').innerText = `BDT ${discountPrice.toFixed(2)}`;
document.getElementById('grandTotalPrice').innerText = `BDT ${grandTotalPrice.toFixed(2)}`;


document.getElementById('couponCodeInput').style.display ='none';
document.getElementById('bookButton').style.display ='none';
}

// form validate 
// condition
document.getElementById('numberInput').addEventListener('input', function(){
  const numberInput = document.getElementById('numberInput').value.trim();
  const nextButton = document.getElementById('nextButton');
  if(numberInput !== ''){
    nextButton.removeAttribute('disabled');
  }
  else{
    nextButton.setAttribute('disabled', true);
  }
});



function showModal(){
  const modal = document.getElementById('myModal');
  modal.style.display = 'block'
}
function closeModal(){
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
}
// apply button
function bookSeats() {
    alert("Booking seats: " + selectedSeats.map(seat => seat.innerText).join(", "));
}
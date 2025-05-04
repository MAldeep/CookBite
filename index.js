const side_bar = document.getElementById('sideBar');
function showTheOffCanvas(){
    side_bar.style.transform = `translateX(0)`
}
function closingTheOffCanvas(){
        side_bar.style.transform = `translateX(110%)`
}

// modal start

const myModal = document.querySelector('.my-modal');
const tableSeats = document.querySelector('.tableSeats');
const tableDate = document.querySelector('.tableDate');

const showModal = () =>{
    myModal.classList.remove('d-none');
    myModal.classList.add('d-flex');
};
const closeModal = () =>{
    myModal.classList.remove('d-flex');
    myModal.classList.add('d-none');
};
const tableBook = () =>{
    let seats = +tableSeats.value;
    let date = tableDate.value;
    let tableData = {seats : seats , date : date};
    closeModal();
    swal.fire(
        {
            icon : "success",
            title : "Table Booked",
            text : `You successfully booked a table for ${tableData.seats} on ${tableData.date}`
        }
    );
    tableSeats.value = "";
    tableDate.value = "";
};
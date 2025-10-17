const form = document.getElementById('tip-form');
const btnE1 = document.getElementById('calculate');
const billInput = document.getElementById("bill-amount")
const tipInput = document.getElementById("tip-percentage")
const totalSpan = document.getElementById("total")

function calculateTip() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + (tipValue / 100));
    totalSpan.innerText = totalValue.toFixed(2);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateTip();
});

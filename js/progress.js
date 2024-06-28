document.addEventListener('DOMContentLoaded', () => {
    const totalAmount = 6700; // Total amount that entered the account
    const currentBalance = 5732.10; // Current balance

    const progressCircle = document.getElementById('progress-circle');
    const currentBalanceElement = document.getElementById('current-balance');

    // Calculate percentage
    const percentage = (currentBalance / totalAmount) * 100;

    // Calculate stroke-dashoffset
    const radius = 56;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    // Update the stroke-dashoffset
    progressCircle.style.strokeDashoffset = offset;

    // Update the current balance display
    currentBalanceElement.textContent = `R$ ${currentBalance.toFixed(2)}`;
});

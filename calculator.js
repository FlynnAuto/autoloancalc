// Listen for input events on the input fields
document.getElementById("vehiclePrice").addEventListener("input", calculateMonthlyPayment);
document.getElementById("tradeInAmount").addEventListener("input", calculateMonthlyPayment);
document.getElementById("interestRate").addEventListener("input", calculateMonthlyPayment);
document.getElementById("loanTerm").addEventListener("input", calculateMonthlyPayment);
document.getElementById("downPayment").addEventListener("input", calculateMonthlyPayment);

// Function to calculate monthly payment
function calculateMonthlyPayment() {
    const vehiclePrice = parseFloat(document.getElementById("vehiclePrice").value);
    const tradeInAmount = parseFloat(document.getElementById("tradeInAmount").value);
    const annualInterestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);
    const taxRate = 0.13; // 13% tax rate

    const downPayment = parseFloat(document.getElementById("downPayment").value);
    
    if (vehiclePrice && annualInterestRate && loanTerm) {
        let principalAmount;

        if (downPayment) {
            principalAmount = ((vehiclePrice - tradeInAmount) * (1 + taxRate)) - downPayment;
        } else {
            principalAmount = (vehiclePrice - tradeInAmount) * (1 + taxRate);
        }

        const numberOfPayments = loanTerm;
        const monthlyPayment = (principalAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        document.getElementById("monthlyPayment").textContent = "$" + monthlyPayment.toFixed(2);
    } else {
        document.getElementById("monthlyPayment").textContent = "Invalid inputs";
    }
}

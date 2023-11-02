document.getElementById("calculateButton").addEventListener("click", function() {
    const vehiclePrice = parseFloat(document.getElementById("vehiclePrice").value);
    const tradeInAmount = parseFloat(document.getElementById("tradeInAmount").value);
    const annualInterestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);

    if (vehiclePrice && annualInterestRate && loanTerm) {
        // Calculate the principal amount as (vehicle price - trade-in) + 13% taxes
        const taxRate = 0.13;
        const principalAmount = (vehiclePrice - tradeInAmount) * (1 + taxRate);

        const numberOfPayments = loanTerm;
        const monthlyPayment = principalAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        document.getElementById("monthlyPayment").textContent = "$" + monthlyPayment.toFixed(2);
    } else {
        document.getElementById("monthlyPayment").textContent = "Invalid inputs";
    }
});

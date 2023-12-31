document.getElementById("calculateButton").addEventListener("click", function() {
    const vehiclePrice = parseFloat(document.getElementById("vehiclePrice").value);
    const tradeInAmount = parseFloat(document.getElementById("tradeInAmount").value);
    const annualInterestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);
    const taxRate = 0.13; // 13% tax rate

    const downPayment = parseFloat(document.getElementById("downPayment").value);
    
    if (vehiclePrice && annualInterestRate && loanTerm && downPayment) {
       // Calculate the principal amount as (vehicle price - trade-in) + 13% taxes - down payment
       const principalAmount = (vehiclePrice - tradeInAmount) * (1 + taxRate) - downPayment;

    // Calculate the monthly payment using the standard formula
    const numberOfPayments = loanTerm;
    const monthlyPayment = (principalAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    document.getElementById("monthlyPayment").textContent = "$" + monthlyPayment.toFixed(2);
} else {
    document.getElementById("monthlyPayment").textContent = "Invalid inputs";
}

    if (vehiclePrice && annualInterestRate && loanTerm) {
        // Calculate the principal amount as (vehicle price - trade-in)
        const principalAmount = vehiclePrice - tradeInAmount;

        // Calculate taxes on the principal amount
        const taxes = principalAmount * taxRate;

        // Calculate the total loan amount including taxes
        const totalLoanAmount = principalAmount + taxes;

        // Calculate the monthly payment using the standard formula
        const numberOfPayments = loanTerm;
        const monthlyPayment = (totalLoanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        document.getElementById("monthlyPayment").textContent = "$" + monthlyPayment.toFixed(2);
    } else {
        document.getElementById("monthlyPayment").textContent = "Invalid inputs";
    }
});

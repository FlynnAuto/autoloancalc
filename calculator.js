document.getElementById("calculateButton").addEventListener("click", function() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const annualInterestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);

    if (loanAmount && annualInterestRate && loanTerm) {
        const numberOfPayments = loanTerm;
        const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        
        document.getElementById("monthlyPayment").textContent = "$" + monthlyPayment.toFixed(2);
    } else {
        // Handle invalid or missing inputs
        document.getElementById("monthlyPayment").textContent = "Invalid inputs";
    }
});

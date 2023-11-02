document.getElementById("calculateButton").addEventListener("click", function() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);

    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm;
    
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;

    document.getElementById("monthlyPayment").textContent = "$" + monthlyPayment.toFixed(2);
    document.getElementById("totalPayment").textContent = "$" + totalPayment.toFixed(2);
});

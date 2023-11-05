const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateFutureValue(principal, rate, years, monthlyDeposit) {
  rate = rate / 100;
  const totalMonthlyDeposits = years * 12;
  let totalAmount = 0;

  for (let i = 0; i < totalMonthlyDeposits; i++) {
    totalAmount += principal;
    principal = principal * (1 + rate / 12);
    principal += monthlyDeposit;
  }

  return totalAmount.toFixed(2);
}

rl.question('Enter the initial amount: ', (initialAmount) => {
  rl.question('Enter the rate of interest: ', (interestRate) => {
    rl.question('Enter the number of years: ', (investmentYears) => {
      rl.question('Enter the monthly deposit amount: ', (monthlyDeposit) => {
        const principal = parseFloat(initialAmount);
        const rate = parseFloat(interestRate);
        const years = parseInt(investmentYears);
        const deposit = parseFloat(monthlyDeposit);

        const futureValue = calculateFutureValue(principal, rate, years, deposit);
        console.log(`The future value of your investment is: ${futureValue}`);
        rl.close();
      });
    });
  });
});
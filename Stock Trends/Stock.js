
async function logStock () {
    const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=BLBOI212MN605GQ4");
    const stock = await response.json();
    console.log(stock);
  }
  
logStock()


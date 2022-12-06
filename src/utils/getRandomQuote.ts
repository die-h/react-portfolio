async function getRandomQuote() {
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    console.log(data);
  }
}

export { getRandomQuote };

window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
  const delay = Math.floor(Math.random() * 5) + 1;
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${delay} seconds`);
    }, delay * 1000);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    // Handle errors if no promise resolves
    console.log('All promises rejected:', error);
  });
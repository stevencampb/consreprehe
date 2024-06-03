// Assuming 'Bangladesh' is an object with a 'data' property
interface Bangladesh {
  data: any; // Replace 'any' with a more specific type as needed
}

// Example object conforming to the interface
const Bangladesh: Bangladesh = {
  data: "Sample Data", // Replace with actual data
};

// Function to log the data property of the Bangladesh object
function logData(country: Bangladesh): void {
  console.log(country.data);
}

// Calling the function with the Bangladesh object
logData(Bangladesh);

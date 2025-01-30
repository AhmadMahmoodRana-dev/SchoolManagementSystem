function generateRandomRegistrationNo() {
    const year = new Date().getFullYear(); // Get the current year
    const departments = ["CS", "IT", "ME", "EE", "CE"]; // List of department codes
    const departmentCode = departments[Math.floor(Math.random() * departments.length)]; // Pick a random department
    const uniqueId = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
  
    return `${year}-${departmentCode}-${uniqueId}`;
  }
  
  // Example Usage
  export default generateRandomRegistrationNo;
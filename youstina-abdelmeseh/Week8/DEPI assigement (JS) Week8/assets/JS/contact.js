function CheckEmail() {
    // Get the email input element and its value
    const emailElement = document.getElementById('contact-space');
    const email = emailElement.value; // Get the actual text value
    
    // Define regex patterns
    const basicLocalPart = '[a-z0-9._-]+';
    const basicDomain = '[a-z0-9.-]+\\.[a-z]{2,}';
    const basicEmailPattern = `^${basicLocalPart}@${basicDomain}$`; // Added ^ and $ for exact match
    
    // Create RegExp objects from the pattern strings
    const emailRegex = new RegExp(basicEmailPattern, 'i'); // 'i' flag for case-insensitive
    
    // Test the complete email pattern
    if (!emailRegex.test(email)) {
        // More specific error messages based on what's missing
        if (!email.includes('@')) {
            alert("Email must contain @");
        } else if (email.indexOf('@') === 0) {
            alert("Email must contain letters or numbers before @");
        } else if (email.indexOf('@') === email.length - 1) {
            alert("Email must contain a valid domain after @");
        } else {
            alert("Please enter a valid email address");
        }
        return false; // Return false for invalid email
    }
    
    // If we reach here, email is valid
    alert("Valid email address!");
    return true; // Return true for valid email
}

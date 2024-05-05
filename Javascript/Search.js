function searchAndRedirect() {
    // Get the search query
    var query = document.getElementById("query").value.trim();

    // Check if the query is not empty
    if (query !== "") {
        // Logic to determine where to redirect based on the search query
        var redirectTo = determineRedirect(query);

        // Redirect to the appropriate page/component
        window.location.href = redirectTo;
    } else {
        // If search query is empty, do nothing or display an error message
        console.log("Please enter a search query");
    }
}

function determineRedirect(query) {
    // Logic to determine where to redirect based on the search query
    // For example, you can use switch case or if-else statements to match the query and decide where to redirect
    // Here, I'm providing a simple example by redirecting to different components based on the query terms
    if (query.toLowerCase().includes("schemes")) {
        return "HTML/Category2.html"; // Redirect to the Schemes component
    } else if (query.toLowerCase().includes("msp")) {
        return "HTML/MSP.html"; // Redirect to the MSP component
    } else if (query.toLowerCase().includes("loan")) {
        return "HTML/LoanCalculator.html"; // Redirect to the Loan Calculator component
    }else if (query.toLowerCase().includes("insurance")) {
        return "HTML/Category1.html"; // Redirect to Insurance category
    } else if (query.toLowerCase().includes("financial support")) {
        return "HTML/Category2.html"; // Redirect to Financial Support category
    } else if (query.toLowerCase().includes("crop field")) {
        return "HTML/Category3.html"; // Redirect to Crop Field category
    } else if (query.toLowerCase().includes("sustainable dev")) {
        return "HTML/Category4.html"; // Redirect to Sustainable Development category
    } 
     else if (query.toLowerCase().includes("pradhan")) {
        return "HTML/Category1.html"; // Redirect to the Loan Calculator component
    } 
    else {
        // If no match found, you can redirect to a generic search results page or handle it according to your requirements
        return "HTML/SearchResults.html";
        // console.log("No result found"); // Redirect to a search results page
    }
}

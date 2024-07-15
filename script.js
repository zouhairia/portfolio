// Toggle HOME content visibility
document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    document.getElementById("homeContent").classList.toggle("active");
});

// Toggle POO options visibility
document.getElementById("pooToggle").addEventListener("click", function(event) {
    event.preventDefault();
    var pooDropdown = document.getElementById("pooOptions");
    toggleDropdown(pooDropdown);
});

// Toggle POO content visibility for each option
document.getElementById("manipulationLink").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    hideDropdown();
    document.getElementById("manipulationContent").classList.toggle("active");
       
});

function copyCode(elementId) {
    var codeSnippet = document.getElementById(elementId).innerText;
    var textarea = document.createElement("textarea");
    textarea.value = codeSnippet;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Code copied to clipboard!");
    }
    

document.getElementById("regexLink").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    hideDropdown();
    document.getElementById("regexContent").classList.toggle("active");
});

document.getElementById("tp1Link").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    hideDropdown();
    document.getElementById("tp1Content").classList.toggle("active");
});

document.getElementById("tp2Link").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    hideDropdown();
    document.getElementById("tp2Content").classList.toggle("active");
});

document.getElementById("tp3Link").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    hideDropdown();
    document.getElementById("tp3Content").classList.toggle("active");
});

document.getElementById("tp4Link").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    hideDropdown();
    document.getElementById("tp4Content").classList.toggle("active");
});

// Toggle HELP content visibility
document.getElementById("helpLink").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    hideDropdown();
    document.getElementById("helpContent").classList.toggle("active");
});

// Toggle PRESENTATION content visibility
document.getElementById("presentationLink").addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    hideDropdown();
    document.getElementById("presentationContent").classList.toggle("active");
});

// Function to hide all content sections
function hideAllContent() {
    var contents = document.querySelectorAll(".content");
    contents.forEach(function(content) {
        content.classList.remove("active");
    });
}

// Function to toggle the dropdown visibility
function toggleDropdown(dropdown) {
    hideDropdown();
    dropdown.classList.toggle("active");
}

// Function to hide all dropdowns
function hideDropdown() {
    var dropdowns = document.querySelectorAll("#pooOptions");
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove("active");
    });
}

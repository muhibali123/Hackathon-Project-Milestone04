//* Starting typescript
var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //^ GIVING TYPES
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skills");
    //* ALL ELEMENT MAIN CONDITION
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillElement.value;
        //^ profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //* CREATIGN RESUME OUTPUT
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? " <img src = \"".concat(profilePictureURL, "\" alt= \"Profile Picture\" class=\"profilePicture\">  ") : '', "\n        <p style=\"margin-top: 15px;\" ><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span></p>\n        <p style=\"margin-top: 5px;\"><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n        <p style=\"margin-top: 5px;\"><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n\n        <h3 style=\"margin-top: 20px;\">Education</h3>\n        <p id=\"edit-education\" class=\"editable\"> ").concat(education, "</p>\n\n        <h3 style=\"margin-top: 20px;\">Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\" > ").concat(experience, "</p>\n\n        <h3 style=\"margin-top: 20px;\">Skills</h3>\n        <p id=\"edit-skills\" class=\"editable\" > ").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("one or more output elements are missing ");
    }
});
//* MAKING EDITABLE FUNCTION
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //* CONDITION FOR REPLACE CONTENT
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus;
            }
        });
    });
}

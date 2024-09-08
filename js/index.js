document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('show-entries');
    var entries = document.querySelectorAll('.experience-item.hidden');
    var isOpen = false;
    button.addEventListener('click', function () {
        isOpen = !isOpen;
        entries.forEach(function (entry) {
            entry.classList.toggle('hidden', !isOpen);
        });
        button.textContent = isOpen ? 'Show Less' : 'Show More Experience';
    });
});
var fullname = document.getElementById("fullname");
var pFullname = document.getElementById("p_fullname");
fullname.addEventListener("blur", function (event) {
    var value = event.target.value;
    if (!value.trim()) {
        // Show an alert if the input is empty
        alert("Full name cannot be empty!");
        pFullname.textContent = "Please enter your full name";
    }
    else {
        // Update the p tag if the input is not empty
        pFullname.textContent = value;
    }
    // pFullname.textContent = value;
});
var tagline = document.getElementById("tagline");
var pTagline = document.getElementById("p_tagline");
tagline.addEventListener("input", function (event) {
    var value = event.target.value;
    pTagline.textContent = value;
});
var bio = document.getElementById("bio");
var pbio = document.getElementById("p_bio");
bio.addEventListener("input", function (event) {
    var value = event.target.value;
    pbio.textContent = value;
});
var phone = document.getElementById("phone");
var pPhone = document.getElementById("p_phone");
phone.addEventListener("input", function (event) {
    var value = event.target.value;
    pPhone.textContent = value;
    pPhone.href = "tel:".concat(value);
});
var email = document.getElementById("email");
var pEmail = document.getElementById("p_email");
email.addEventListener("input", function (event) {
    var value = event.target.value;
    pEmail.textContent = value;
    pEmail.href = "mailto:".concat(value);
});
var github = document.getElementById("github_url");
var pGithub = document.getElementById("p_github");
github.addEventListener("input", function (event) {
    var value = event.target.value;
    pGithub.textContent = value;
    pGithub.href = "".concat(value);
});
var linkedin = document.getElementById("linkedin_url");
var pLinkedin = document.getElementById("p_linkedin");
linkedin.addEventListener("input", function (event) {
    var value = event.target.value;
    pLinkedin.textContent = value;
    pLinkedin.href = "".concat(value);
});
var education_1 = document.getElementById("education_1");
var pEducation_1 = document.getElementById("p_education_title_1");
education_1.addEventListener("input", function (event) {
    var value = event.target.value;
    pEducation_1.textContent = value;
});
var education_1_year = document.getElementById("education_1_year");
var pEducation_1_year = document.getElementById("p_education_year_1");
education_1_year.addEventListener("input", function (event) {
    var value = event.target.value;
    pEducation_1_year.textContent = value;
});
var education_2 = document.getElementById("education_2");
var pEducation_2 = document.getElementById("p_education_title_2");
education_2.addEventListener("input", function (event) {
    var value = event.target.value;
    pEducation_2.textContent = value;
});
var education_2_year = document.getElementById("education_2_year");
var pEducation_2_year = document.getElementById("p_education_year_2");
education_2_year.addEventListener("input", function (event) {
    var value = event.target.value;
    pEducation_2_year.textContent = value;
});
var skills = document.getElementById("skills");
var pSkills = document.getElementById("p_skills");
skills.addEventListener("input", function (event) {
    var value = event.target.value;
    pSkills.innerHTML = '';
    var items = value.split(',').map(function (item) { return item.trim(); });
    items.forEach(function (item) {
        if (item) { // Ensure the item is not an empty string
            var li = document.createElement('li');
            li.textContent = item;
            pSkills.appendChild(li);
        }
    });
});
var languages = document.getElementById("languages");
var pLanguages = document.getElementById("p_languages");
languages.addEventListener("input", function (event) {
    var value = event.target.value;
    pLanguages.innerHTML = '';
    var items = value.split(',').map(function (item) { return item.trim(); });
    items.forEach(function (item) {
        if (item) { // Ensure the item is not an empty string
            var li = document.createElement('li');
            li.textContent = item;
            pLanguages.appendChild(li);
        }
    });
});
var exp_1_title = document.getElementById("exp_1_title");
var pExp_1_title = document.getElementById("p_exp_1_title");
exp_1_title.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_1_title.textContent = value;
});
var exp_1_company = document.getElementById("exp_1_company");
var pExp_1_company = document.getElementById("p_exp_1_company");
exp_1_company.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_1_company.textContent = value;
});
var exp_1_role = document.getElementById("exp_1_role");
var pExp_1_role = document.getElementById("p_exp_1_role");
exp_1_role.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_1_role.textContent = value;
});
var exp_2_title = document.getElementById("exp_2_title");
var pExp_2_title = document.getElementById("p_exp_2_title");
exp_2_title.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_2_title.textContent = value;
});
var exp_2_company = document.getElementById("exp_2_company");
var pExp_2_company = document.getElementById("p_exp_2_company");
exp_2_company.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_2_company.textContent = value;
});
var exp_2_role = document.getElementById("exp_2_role");
var pExp_2_role = document.getElementById("p_exp_2_role");
exp_2_role.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_2_role.textContent = value;
});
var exp_3_title = document.getElementById("exp_3_title");
var pExp_3_title = document.getElementById("p_exp_3_title");
exp_3_title.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_3_title.textContent = value;
});
var exp_3_company = document.getElementById("exp_3_company");
var pExp_3_company = document.getElementById("p_exp_3_company");
exp_3_company.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_3_company.textContent = value;
});
var exp_3_role = document.getElementById("exp_3_role");
var pExp_3_role = document.getElementById("p_exp_3_role");
exp_3_role.addEventListener("input", function (event) {
    var value = event.target.value;
    pExp_3_role.textContent = value;
});

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("show-entries");
    var entries = document.querySelectorAll(".experience-item.hidden");
    var isOpen = false;
    button.addEventListener("click", function () {
        isOpen = !isOpen;
        entries.forEach(function (entry) {
            entry.classList.toggle("hidden", !isOpen);
        });
        button.textContent = isOpen ? "Show Less" : "Show More Experience";
    });
});
var fields = document.getElementsByClassName("field");
Array.from(fields).forEach(function (field) {
    field.addEventListener("input", function (event) {
        var target = event.target;
        if (target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLSelectElement) {
            var value = target.value;
            var name_1 = target.name;
            var line = document.getElementById(name_1);
            if (line) {
                line.textContent = value;
            }
        }
    });
});
var skills = document.getElementById("skills");
var pSkills = document.getElementById("p_skills");
skills.addEventListener("input", function (event) {
    var value = event.target.value;
    pSkills.innerHTML = "";
    var items = value.split(",").map(function (item) { return item.trim(); });
    items.forEach(function (item) {
        if (item) {
            // Ensure the item is not an empty string
            var li = document.createElement("li");
            li.textContent = item;
            pSkills.appendChild(li);
        }
    });
});
var languages = document.getElementById("languages");
var pLanguages = document.getElementById("p_languages");
languages.addEventListener("input", function (event) {
    var value = event.target.value;
    pLanguages.innerHTML = "";
    var items = value.split(",").map(function (item) { return item.trim(); });
    items.forEach(function (item) {
        if (item) {
            // Ensure the item is not an empty string
            var li = document.createElement("li");
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

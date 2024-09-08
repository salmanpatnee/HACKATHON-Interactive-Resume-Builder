document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('show-entries') as HTMLButtonElement;
    const entries = document.querySelectorAll('.experience-item.hidden');
    let isOpen = false;

    button.addEventListener('click', () => {
        isOpen = !isOpen;
        entries.forEach(entry => {
            entry.classList.toggle('hidden', !isOpen);
        });
        button.textContent = isOpen ? 'Show Less' : 'Show More Experience';
    });
});



const fullname = document.getElementById("fullname") as HTMLInputElement;
const pFullname = document.getElementById("p_fullname") as HTMLHeadingElement;

fullname.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;

    if (!value.trim()) {
        alert("Full name is required");
        pFullname.textContent = "";
    } else {
        pFullname.textContent = value;
    }

});

const tagline = document.getElementById("tagline") as HTMLInputElement;
const pTagline = document.getElementById("p_tagline") as HTMLParagraphElement;

tagline.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pTagline.textContent = value;
});

const bio = document.getElementById("bio") as HTMLInputElement;
const pbio = document.getElementById("p_bio") as HTMLParagraphElement;

bio.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pbio.textContent = value;
});

const phone = document.getElementById("phone") as HTMLInputElement;
const pPhone = document.getElementById("p_phone") as HTMLAnchorElement;

phone.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pPhone.textContent = value;
    pPhone.href = `tel:${value}`
});

const email = document.getElementById("email") as HTMLInputElement;
const pEmail = document.getElementById("p_email") as HTMLAnchorElement;

email.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pEmail.textContent = value;
    pEmail.href = `mailto:${value}`
});

const github = document.getElementById("github_url") as HTMLInputElement;
const pGithub = document.getElementById("p_github") as HTMLAnchorElement;

github.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pGithub.textContent = value;
    pGithub.href = `${value}`
});

const linkedin = document.getElementById("linkedin_url") as HTMLInputElement;
const pLinkedin = document.getElementById("p_linkedin") as HTMLAnchorElement;

linkedin.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pLinkedin.textContent = value;
    pLinkedin.href = `${value}`
});


const education_1 = document.getElementById("education_1") as HTMLInputElement;
const pEducation_1 = document.getElementById("p_education_title_1") as HTMLParagraphElement;

education_1.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pEducation_1.textContent = value;
});

const education_1_year = document.getElementById("education_1_year") as HTMLInputElement;
const pEducation_1_year = document.getElementById("p_education_year_1") as HTMLElement;

education_1_year.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pEducation_1_year.textContent = value;
});

const education_2 = document.getElementById("education_2") as HTMLInputElement;
const pEducation_2 = document.getElementById("p_education_title_2") as HTMLParagraphElement;

education_2.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pEducation_2.textContent = value;
});

const education_2_year = document.getElementById("education_2_year") as HTMLInputElement;
const pEducation_2_year = document.getElementById("p_education_year_2") as HTMLElement;

education_2_year.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pEducation_2_year.textContent = value;
});

const skills = document.getElementById("skills") as HTMLTextAreaElement;
const pSkills = document.getElementById("p_skills") as HTMLUListElement;

skills.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pSkills.innerHTML = '';

    const items = value.split(',').map(item => item.trim());

    items.forEach(item => {
        if (item) { // Ensure the item is not an empty string
            const li = document.createElement('li');
            li.textContent = item;
            pSkills.appendChild(li);
        }
    });
});

const languages = document.getElementById("languages") as HTMLTextAreaElement;
const pLanguages = document.getElementById("p_languages") as HTMLUListElement;

languages.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pLanguages.innerHTML = '';

    const items = value.split(',').map(item => item.trim());

    items.forEach(item => {
        if (item) { // Ensure the item is not an empty string
            const li = document.createElement('li');
            li.textContent = item;
            pLanguages.appendChild(li);
        }
    });
});


const exp_1_title = document.getElementById("exp_1_title") as HTMLInputElement;
const pExp_1_title = document.getElementById("p_exp_1_title") as HTMLHeadingElement;

exp_1_title.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_1_title.textContent = value;
});

const exp_1_company = document.getElementById("exp_1_company") as HTMLInputElement;
const pExp_1_company = document.getElementById("p_exp_1_company") as HTMLElement;

exp_1_company.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_1_company.textContent = value;
});

const exp_1_role = document.getElementById("exp_1_role") as HTMLInputElement;
const pExp_1_role = document.getElementById("p_exp_1_role") as HTMLParagraphElement;

exp_1_role.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_1_role.textContent = value;
});



const exp_2_title = document.getElementById("exp_2_title") as HTMLInputElement;
const pExp_2_title = document.getElementById("p_exp_2_title") as HTMLHeadingElement;

exp_2_title.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_2_title.textContent = value;
});

const exp_2_company = document.getElementById("exp_2_company") as HTMLInputElement;
const pExp_2_company = document.getElementById("p_exp_2_company") as HTMLElement;

exp_2_company.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_2_company.textContent = value;
});

const exp_2_role = document.getElementById("exp_2_role") as HTMLInputElement;
const pExp_2_role = document.getElementById("p_exp_2_role") as HTMLParagraphElement;

exp_2_role.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_2_role.textContent = value;
});


const exp_3_title = document.getElementById("exp_3_title") as HTMLInputElement;
const pExp_3_title = document.getElementById("p_exp_3_title") as HTMLHeadingElement;

exp_3_title.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_3_title.textContent = value;
});

const exp_3_company = document.getElementById("exp_3_company") as HTMLInputElement;
const pExp_3_company = document.getElementById("p_exp_3_company") as HTMLElement;

exp_3_company.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_3_company.textContent = value;
});

const exp_3_role = document.getElementById("exp_3_role") as HTMLInputElement;
const pExp_3_role = document.getElementById("p_exp_3_role") as HTMLParagraphElement;

exp_3_role.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    pExp_3_role.textContent = value;
});
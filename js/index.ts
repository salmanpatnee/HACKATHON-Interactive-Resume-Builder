document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("show-entries") as HTMLButtonElement;
  const entries = document.querySelectorAll(".experience-item.hidden");
  let isOpen = false;

  button.addEventListener("click", () => {
    isOpen = !isOpen;
    entries.forEach((entry) => {
      entry.classList.toggle("hidden", !isOpen);
    });
    button.textContent = isOpen ? "Show Less" : "Show More Experience";
  });
});

const fields = document.getElementsByClassName(
  "field"
) as HTMLCollectionOf<HTMLElement>;

Array.from(fields).forEach((field) => {
  field.addEventListener("input", (event) => {
    const target = event.target as HTMLElement;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) {
      const value = target.value;
      const name = target.name;

      const line = document.getElementById(name);
      if (line) {
        line.textContent = value;
      }
    }
  });
});

const repeaterFields = document.getElementsByClassName(
  "repeater"
) as HTMLCollectionOf<HTMLElement>;

Array.from(repeaterFields).forEach((field) => {
  field.addEventListener("input", (event) => {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;
    const name = target.name;

    const line = document.getElementById(name);
    if (line) {
      line.textContent = value;
    }
  });
});

const skills = document.getElementById("skills") as HTMLTextAreaElement;
const pSkills = document.getElementById("p_skills") as HTMLUListElement;

skills.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pSkills.innerHTML = "";

  const items = value.split(",").map((item) => item.trim());

  items.forEach((item) => {
    if (item) {
      // Ensure the item is not an empty string
      const li = document.createElement("li");
      li.textContent = item;
      pSkills.appendChild(li);
    }
  });
});

const languages = document.getElementById("languages") as HTMLTextAreaElement;
const pLanguages = document.getElementById("p_languages") as HTMLUListElement;

languages.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pLanguages.innerHTML = "";

  const items = value.split(",").map((item) => item.trim());

  items.forEach((item) => {
    if (item) {
      // Ensure the item is not an empty string
      const li = document.createElement("li");
      li.textContent = item;
      pLanguages.appendChild(li);
    }
  });
});

const exp_1_title = document.getElementById("exp_1_title") as HTMLInputElement;
const pExp_1_title = document.getElementById(
  "p_exp_1_title"
) as HTMLHeadingElement;

exp_1_title.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_1_title.textContent = value;
});

const exp_1_company = document.getElementById(
  "exp_1_company"
) as HTMLInputElement;
const pExp_1_company = document.getElementById(
  "p_exp_1_company"
) as HTMLElement;

exp_1_company.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_1_company.textContent = value;
});

const exp_1_role = document.getElementById("exp_1_role") as HTMLInputElement;
const pExp_1_role = document.getElementById(
  "p_exp_1_role"
) as HTMLParagraphElement;

exp_1_role.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_1_role.textContent = value;
});

const exp_2_title = document.getElementById("exp_2_title") as HTMLInputElement;
const pExp_2_title = document.getElementById(
  "p_exp_2_title"
) as HTMLHeadingElement;

exp_2_title.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_2_title.textContent = value;
});

const exp_2_company = document.getElementById(
  "exp_2_company"
) as HTMLInputElement;
const pExp_2_company = document.getElementById(
  "p_exp_2_company"
) as HTMLElement;

exp_2_company.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_2_company.textContent = value;
});

const exp_2_role = document.getElementById("exp_2_role") as HTMLInputElement;
const pExp_2_role = document.getElementById(
  "p_exp_2_role"
) as HTMLParagraphElement;

exp_2_role.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_2_role.textContent = value;
});

const exp_3_title = document.getElementById("exp_3_title") as HTMLInputElement;
const pExp_3_title = document.getElementById(
  "p_exp_3_title"
) as HTMLHeadingElement;

exp_3_title.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_3_title.textContent = value;
});

const exp_3_company = document.getElementById(
  "exp_3_company"
) as HTMLInputElement;
const pExp_3_company = document.getElementById(
  "p_exp_3_company"
) as HTMLElement;

exp_3_company.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_3_company.textContent = value;
});

const exp_3_role = document.getElementById("exp_3_role") as HTMLInputElement;
const pExp_3_role = document.getElementById(
  "p_exp_3_role"
) as HTMLParagraphElement;

exp_3_role.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  pExp_3_role.textContent = value;
});

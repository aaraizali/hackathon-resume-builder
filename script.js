"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toggleSkills() {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
        skillsSection.classList.toggle("hidden");
    }
}

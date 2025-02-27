function toggleFAQ(id) {
    const answer = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        icon.textContent = "-";
    } else {
        answer.classList.add("hidden");
        icon.textContent = "+";
    }
}

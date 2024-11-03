function showContactInfo() {
    const contactInfo = document.getElementById("contact-info");
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
    document.getElementById("contact-info").scrollIntoView({ behavior: "smooth" });
}
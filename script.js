
document.getElementById("quoteForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("quoteMessage").textContent = "Thanks! We'll get back to you shortly.";
    this.reset();
});

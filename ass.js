function filterTestimonials(category) {
    const testimonials = document.querySelectorAll(".testimonial-card");
    
    testimonials.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}



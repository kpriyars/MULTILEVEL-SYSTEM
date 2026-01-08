

document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function() {
           
            const icon = this.querySelector("span");
            if (icon.innerHTML === "+") {
                icon.innerHTML = "-";
            } else {
                icon.innerHTML = "+";
            }

            
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle("active-dropdown");

        });
    });
});

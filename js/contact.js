const contactForm = document.querySelector(".contactForm");
const sendBtn = document.querySelector(".button4");

sendBtn.addEventListener("click", function(){
    const popup = document.createElement("div");
    popup.classList.add("popupBuy");
    popup.innderHTML = "<p>Message sendt!</p>";
    contactForm.appendChild(popup);

    setTimeout(function (){
        popup.remove();
        window.location.href = "index.html";
    }, 3000);
});
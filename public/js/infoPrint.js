document.addEventListener("DOMContentLoaded", () => {
    const printMentContainer = document.querySelector(".print-ment-container");
    const printFinishMentContainer = document.querySelector(".print-finishMent-container");

    setTimeout(() => {
        printMentContainer.style.display = "none";
        printFinishMentContainer.style.display = "flex";

        setTimeout(() => {
            window.location.href = "/views/index.html"
        }, 5000)
    }, 5000);
});

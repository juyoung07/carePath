document.addEventListener("DOMContentLoaded", () => {
    const printMentContainer = document.querySelector(".print-ment-container");
    const printFinishMentContainer = document.querySelector(".print-finishMent-container");
    const progress = document.querySelector(".progress");
    let progressWidth = 0;

    // 진행 바 업데이트
    const interval = setInterval(() => {
        progressWidth += 2; // 진행 바의 너비를 2%씩 증가
        progress.style.width = `${progressWidth}%`;

        if (progressWidth >= 100) {
            clearInterval(interval); // 100%에 도달하면 반복 중지

            setTimeout(() => {
                window.location.href = "/views/counselor/recomend.html";
            }, 500);


        }
    }, 105);
});

const popup = document.querySelector('.popup-container');
const overlay = document.querySelector('.overlay');
const rightArrows = document.querySelectorAll('.right-arrow');
const closeButton = document.querySelector('.x-icon');

// 오른쪽 화살표 클릭 시 팝업 열기
rightArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        popup.classList.remove('hidden');
    });
});

// X 아이콘 클릭 시 팝업 닫기
closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    popup.classList.add('hidden');
});

const printButton = document.querySelector('.contact-button')

printButton.addEventListener('click', () => {
    window.location.href = "#" //print하는 페이지로 넘어가기
})

function printPage() {
    window.print();
    setTimeout(() => {
        window.location.href = "/views/counselor/infoPrint.html";
    }, 500);
}






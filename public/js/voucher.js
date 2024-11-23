var voucher = [
    {
        "id": "1",
        "mainTitle": "청년 자립지원 바우처",
        "subTitle": "주거비,학비,의료비,생계비 등을 지원하는<br> 바우처 입니다!"
    },
    {
        "id": "2",
        "mainTitle": "청년희망키움통장",
        "subTitle": "청년이 일정 기간 동안 자산을 저축하면,<br>정부가 매칭하여 추가 지원금을 제공합니다!"
    },

    {
        "id": "3",
        "mainTitle": "청년내일채움공제",
        "subTitle": "청년이 일정 기간 동안 자산을 저축하면,<br>정부가 매칭하여 추가 지원금을 제공하는<br> 프로그램 입니다!"
    },

    {
        "id": "4",
        "mainTitle": "자립정착금",
        "subTitle": "만 18세 이후 보호종료된 청소년에게 지역에<br>따라 1,000만원에서 2,000만원을<br>지급해드립니다!"
    },

    {
        "id": "5",
        "mainTitle": "교통비 지원 바우처",
        "subTitle": "대중교통 이용 시 교통비 일부 지원 해<br>드리는 바우처 입니다!"
    },

    {
        "id": "6",
        "mainTitle": "취업 후 상환 학자금 대출",
        "subTitle": "생활비 대출 무이자 지원, 해외연수<br>기회를 제공합니다!"
    },

    {
        "id": "7",
        "mainTitle": "직업훈련 바우처",
        "subTitle": "직업훈련 비용 지원 및 취업 알선 서비스를<br>제공합니다!"
    },

    {
        "id": "8",
        "mainTitle": "학습지원 바우처",
        "subTitle": "학습 자료 구입 및 교육 비용을<br>지원해드립니다!"
    }

]
const container = document.querySelector('.worryList-container')

voucher.forEach(item => {
    const questionContainer = document.createElement('div')
    questionContainer.classList.add('question-container')

    //main-title
    const mainTitle = document.createElement('p')
    mainTitle.classList.add('main-title')
    mainTitle.innerHTML = item.mainTitle

    //sub-title-container
    const subTitleContainer = document.createElement('div')
    subTitleContainer.classList.add('sub-title-container')

    //sub-title
    const subTitle = document.createElement('p')
    subTitle.classList.add('sub-title')
    subTitle.innerHTML = item.subTitle;

    //sub-title-container에 sub-title 추가
    subTitleContainer.appendChild(subTitle)

    questionContainer.appendChild(mainTitle)
    questionContainer.appendChild(subTitleContainer)
    container.appendChild(questionContainer)
})


const popup = document.querySelector('.popup-container');
const overlay = document.querySelector('.overlay');
const rightArrows = document.querySelectorAll('.worryList-container');
const closeButton = document.querySelector('.x-icon')
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




var testInfo = [
    {
        "id": "1",
        "question": "생활비 지원이 필요하신가요?",
        "image": "/public/images/test-1.png"
    },
    {
        "id": "2",
        "question": "경제적 어려움이<br>학교 생활에 영향을 미치나요?",
        "image": "/public/images/test-2.png"
    },
    {
        "id": "3",
        "question": "학습 자료를 구하는 데<br>어려움이 있나요?",
        "image": "/public/images/test-3.png"
    },
    {
        "id": "4",
        "question": "취업이나 아르바이트<br>찾기가 힘드신가요?",
        "image": "/public/images/test-4.png"
    },
    {
        "id": "5",
        "question": "가족 문제로 스트레스를<br>받고 계신가요?",
        "image": "/public/images/test-5.png"
    },
    {
        "id": "6",
        "question": "학교에서 친구 관계가 힘드신가요?",
        "image": "/public/images/test-6.png"
    },
    {
        "id": "7",
        "question": "가족 중 상담이 필요한 분이 있나요?",
        "image": "/public/images/test-7.png"
    },
    {
        "id": "8",
        "question": "진로 준비에 도움이 필요하신가요?",
        "image": "/public/images/test-8.png"
    },
];


let currentStep = 1;

const titleElement = document.querySelector('.title');
const imageElement = document.querySelector('.testimg');
const boxes = document.querySelectorAll('.box');

// 선택지가 클릭될 때 실행되는 함수
function handleBoxClick() {
    currentStep++;

    if (currentStep > testInfo.length) {
        window.location.href = "loading.html";
        return;
    }

    // 다음 질문 정보 가져오기
    const nextQuestion = testInfo.find(item => item.id === currentStep.toString());


    titleElement.innerHTML = `<strong>Q${currentStep}.</strong> ${nextQuestion.question}`;
    imageElement.src = nextQuestion.image;

}

// 선택지에 클릭 이벤트 추가
boxes.forEach(box => {
    box.addEventListener('click', handleBoxClick);
});
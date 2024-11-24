const checkList = {
    "취업 고민": [
        { "id": "1", "title": "취업 준비의 어려움" },
        { "id": "3", "title": "취업 정보의 부족" },
        { "id": "4", "title": "취업의 경제적 부담" },
        { "id": "8", "title": "주거 안전 문제" },
    ],
    "심리적 고민": [
        { "id": "2", "title": "우울감 혹은 무기력함" },
        { "id": "7", "title": "불안감 혹은 트라우마" },
    ],
    "주거 고민": [
        { "id": "5", "title": "주거의 경제적 부담" },
        { "id": "6", "title": "주거 지원 필요" },
    ]
};

function stateTest(checkList) {
    const checkListAllContainer = document.getElementsByClassName('checkList-all-container')[0]

    let checkListHtml = ''
    checkList.forEach(element => {
        checkListHtml += `
        <div class="checkList-container">
        <p class="main-title">${element.problemType}</p>
        <p class="sub-title">${element.title}</p>
        <img src="/public/images/x-icon.png" alt="">
    </div>
        `
    });
    checkListAllContainer.innerHTML = checkListHtml
}

stateTest(checkList)






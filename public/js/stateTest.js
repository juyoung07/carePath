var checkList = [
    {
        "id": "1",
        "problemType": "취업 고민",
        "title": "취업 준비의 어려움"
    },
    {
        "id": "2",
        "problemType": "심리적 고민",
        "title": "우울감 혹은 무기력함"
    },
    {
        "id": "3",
        "problemType": "취업 고민",
        "title": "취업 정보의 부족"
    },
    {
        "id": "4",
        "problemType": "취업 고민",
        "title": "취업의 경제적 부담"
    },
    {
        "id": "5",
        "problemType": "주거 고민",
        "title": "주거의 경제적 부담"
    },
    {
        "id": "6",
        "problemType": "주거 고민",
        "title": "주거 지원 필요"
    },
    {
        "id": "7",
        "problemType": "심리적 고민",
        "title": "불안감 혹은 트라우마"
    },
    {
        "id": "8",
        "problemType": "취업 고민",
        "title": "주거 안전 문제"
    },
]

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






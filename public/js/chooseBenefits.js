var informationList = [
    {
        "mainTitle": "자활시설",
        "subTitle": "사용자님께 적합한 자활시설<br>혜택을 알려드립니다!",
    },
    {
        "mainTitle": "일시보호시설",
        "subTitle": "사용자님께 적합한 재활시설<br>혜택을 알려드립니다!",
    },
    {
        "mainTitle": "요양시설",
        "subTitle": "사용자님께 적합한 요양시설<br>혜택을 알려드립니다!",
    },
    {
        "mainTitle": "종합지원센터",
        "subTitle": "사용자님께 적합한 종합지원센터<br> 혜택을 알려드립니다!",
    },
]

function showInfo(informationList) {
    const infoAllContainer = document.getElementsByClassName('info-all-container')[0];

    let infoHtml = ''

    informationList.forEach(item => {
        infoHtml += `
        <div class="info-container">
        <div class="titles">
            <p>${item.mainTitle}</p>
            <img src="/public/images/right-arrow.png" alt="">
        </div>

        <div class="title2">${item.subTitle}</div>
    </div>
        `
    })
    infoAllContainer.innerHTML = infoHtml;
}
showInfo(informationList)

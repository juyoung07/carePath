var questionList = [
    {
        "id": "1",
        "mainTitle": "취업은 하고 싶은데, 어떻게 해야 할<br>지 모르겠어요",
        "subTitle": "기초 취업능력 키우기, 1:1 상담, 나에게 맞는<br>지원 추천 등"
    },
    {
        "id": "2",
        "mainTitle": "취업하기 위해 공부하거나 자격증을<br>따고 싶어요",
        "subTitle": "취업과 이직에 도움이 되는 교육/ 훈련 받기"
    },
    {
        "id": "3",
        "mainTitle": "최근에 어쩔 수 없이 퇴사했어요.<br>조만간 퇴사할 것 같아요",
        "subTitle": "실업급여, 재취업 수당 등"
    },
    {
        "id": "4",
        "mainTitle": "나이는 좀 있지만, 다시 취업을 하고<br>싶습니다.",
        "subTitle": "경력직을 위한 경력설계 컨설팅, 공공 일자리,<br>취업 지원금, 취업 능력 키우기 등"
    },
    {
        "id": "5",
        "mainTitle": "출산/육아를 위해 일을 쉬거나 근무<br>시간을 줄여야 할 거 같아요.",
        "subTitle": "출산(유산, 사산 포함) 급여, 육아휴직,<br>육아기 근로시간 단축 등"
    },
    {
        "id": "6",
        "mainTitle": "내게 맞는 일자리를 찾고 싶어요<br>수 있을까요?",
        "subTitle": "장애인의 취업을 위한 단계별 통합 지원<br>프로그램, 교육/훈련 등"
    },
    {
        "id": "7",
        "mainTitle": "취업은 하고 싶은데, 어떻게 해야 할<br>지 모르겠어요",
        "subTitle": "일자리 추천, 다양한 일 경험, 취업지원금 등"
    },
    {
        "id": "8",
        "mainTitle": "기타 제도",
        "subTitle": "고용보험 등 고용 관련 기업의 의무"
    }
]

const container = document.querySelector('.worryList-container')

questionList.forEach(item => {
    //question-container 생성
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

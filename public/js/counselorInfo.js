var psychologyCenters = [
    {
        "id": "1",
        "centerName": "마음의 쉼터 심리상담센터",
        "posibble": "가능",
        "value": "심리상담",
        "couselor": "김혜진",
        "phoneNumber": "02-123-4567",
        "address": "서울특별시 강남구 테헤란로 123, 5층",
        "certification": [
            "임상심리사 1급",
            "청소년 상담사 2급"
        ],
        "education": "전주대학교 심리학과 학사",
        "weekdays": "09:00 - 18:00",
        "lunchTime": "12:00 - 13:00"
    },
    {
        "id": "2",
        "centerName": "행복나무 상담센터",
        "value": "심리상담",
        "couselor": "이수영",
        "posibble": "가능",
        "phoneNumber": "051-234-5678",
        "address": "부산광역시 해운대구 센텀로 45, 3층",
        "certification": [
            "상담심리사 2급",
            "가족치료사"
        ],
        "education": "부산대학교 심리학과 학사",
        "weekdays": "10:00 - 19:00",
        "lunchTime": "12:30 - 13:30"
    },
    {
        "id": "3",
        "centerName": "마음숲 힐링센터",
        "value": "심리상담",
        "couselor": "박민아",
        "posibble": "가능",
        "phoneNumber": "053-345-6789",
        "address": "대구광역시 중구 동성로 77, 2층",
        "certification": [
            "놀이치료사",
            "심리상담사 1급"
        ],
        "education": "경북대학교 아동학과 학사",
        "weekdays": "09:30 - 18:30",
        "lunchTime": "12:00 - 13:00"
    },
    {
        "id": "4",
        "centerName": "함께하는 심리상담센터",
        "value": "오늘불가",
        "posibble": "불가능",
        "class": "not",
        "couselor": "최은비",
        "phoneNumber": "032-456-7890",
        "address": "인천광역시 남동구 인하로 88, 4층",
        "certification": [
            "정신건강임상심리사",
            "부부상담 전문가"
        ],
        "education": "인하대학교 심리학과",
        "weekdays": "09:00 - 17:30",
        "lunchTime": "12:00 - 13:00"
    },
    {
        "id": "5",
        "centerName": "온유 심리클리닉",
        "value": "심리상담",
        "couselor": "정우진",
        "posibble": "가능",
        "phoneNumber": "031-567-8901",
        "address": "경기도 성남시 분당구 서현로 200, 6층",
        "certification": [
            "임상심리사 2급",
            "아동발달상담사"
        ],
        "education": "한양대학교 아동발달학",
        "weekdays": "10:00 - 19:00",
        "lunchTime": "12:30 - 13:30"
    },
    {
        "id": "6",
        "centerName": "마음나눔 심리센터",
        "value": "심리상담",
        "couselor": "윤서진",
        "phoneNumber": "064-678-9012",
        "address": "제주특별자치도 제주시 중앙로 100, 2층",
        "certification": [
            "미술치료사",
            "심리상담사 1급"
        ],
        "posibble": "가능",
        "education": "부산대학교 아동발달학",
        "weekdays": "09:00 - 18:00",
        "lunchTime": "12:00 - 13:00"
    },
    {
        "id": "7",
        "centerName": "밝은마음 상담센터",
        "value": "심리상담",
        "couselor": "이정민",
        "phoneNumber": "042-789-0123",
        "address": "대전광역시 서구 둔산로 50, 3층",
        "certification": [
            "임상심리사 1급",
            "청소년 상담사 3급"
        ],
        "posibble": "가능",
        "education": "제주대학교 미술학과",
        "weekdays": "09:00 - 18:00",
        "lunchTime": "12:30 - 13:30"
    },
    {
        "id": "8",
        "centerName": "마음치유 심리상담소",
        "value": "심리상담",
        "couselor": "김다영",
        "phoneNumber": "054-890-1234",
        "address": "경상북도 포항시 북구 중앙로 88, 1층",
        "certification": [
            "놀이치료사",
            "가족상담 전문가"
        ],
        "posibble": "가능",
        "education": "충남대학교 심리학과",
        "weekdays": "09:00 - 17:00",
        "lunchTime": "12:00 - 13:00"
    }
]

const container = document.getElementById('counselorList');

// 상담사 정보 
psychologyCenters.forEach(center => {
    const article = document.createElement('article');
    article.className = 'counselor-list';

    article.innerHTML = `
        <div class="whether">
            <div class="${center.class}">${center.value}</div>
            <div>취업상담</div>
        </div>
        <div class="counselor-info-container">
            <img src="/public/images/counselor-${center.id}.png" alt="상담사 사진" class="counselor-img">
            <div class="counselor-info">
                <div class="title">
                    <span>${center.couselor} 상담사</span>
                    <a href="#" class="open-popup" data-counselor-id="${center.id}"><img src="/public/images/right-arrow.png" alt="" class="right-arrow"></a>
                </div>
                <p class="center-name">${center.centerName}</p>
                <div class="time">
                    <img src="/public/images/time.png" alt="time-icon">
                    <span>${center.weekdays}</span>
                </div>
            </div>
        </div>
    `;
    container.appendChild(article);
});

// 팝업 열기 함수
document.querySelectorAll('.open-popup').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const counselorId = button.getAttribute('data-counselor-id');
        openPopup(counselorId);
    });
});

function openPopup(counselorId) {
    const counselor = psychologyCenters.find(center => center.id === counselorId);

    if (counselor) {
        const popup = document.querySelector('.popup-container');
        popup.classList.remove('hidden');

        // 프로필 이미지 및 정보 업데이트
        popup.querySelector('.profile img').src = `/public/images/counselor-${counselor.id}.png`;
        popup.querySelector('.profile-infos p:nth-child(1)').textContent = `오늘 진료 ${counselor.posibble}`;
        popup.querySelector('.profile-infos p:nth-child(2)').textContent = counselor.couselor + ' 상담사';
        popup.querySelector('.profile-infos p:nth-child(3)').textContent = counselor.centerName;
        popup.querySelector('.time-info .full-time p').textContent = counselor.weekdays;
        popup.querySelector('.time-info .break-time p').textContent = counselor.lunchTime;
        popup.querySelector('.counselor-details .detail:nth-child(1) p').textContent = counselor.phoneNumber;
        popup.querySelector('.counselor-details .detail:nth-child(2) p').textContent = counselor.address;
        popup.querySelector('.counselor-details .detail:nth-child(3) p').textContent = counselor.education;
        popup.querySelector('.certification').textContent = counselor.certification;
        popup.querySelector('.contact-button button').textContent = "정보 출력하기";
    }
}





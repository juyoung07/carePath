// 데이터 가져오기
import { psychologyCenters } from '/js/psychologyCenters.js';

// 동적으로 HTML에 추가
const container = document.querySelector('.counselor-list-container');

psychologyCenters.forEach(center => {
    const article = document.createElement('article');
    article.classList.add('counselor-list');

    article.innerHTML = `
        <div class="whether">
            <div>${Array.isArray(center.value) ? center.value.join(', ') : center.value}</div>
        </div>
        <div class="counselor-info-container">
            <div class="counselor-info">
                <div class="title">
                    <span>${center.couselor} 상담사</span>
                </div>
                <p class="center-name">${center.centerName}</p>
                <div class="time">
                    <span>${center.weekdays}</span>
                </div>
            </div>
        </div>
    `;

    container.appendChild(article);
});

// 초기 데이터
let showPostInfo = [
    {
        "id": "1",
        "userName": "해피바이러스",
        "content": "다들 힘내시길 바랍니다! 배주연 상담사님이 상담이 정말 잘 해주시니까 참고하셨음 좋겠어요!"
    },

    {
        "id": "2",
        "userName": "코코넛 바다",
        "content": "다들 화이팅입니다! 바우처 도움 되는거 진짜 많으니까 꼭 찾아보세요"
    },

    {
        "id": "3",
        "userName": "안녕하세요",
        "content": "취업 성공했습니다. 다들 기 받아가세요."
    },

    {
        "id": "4",
        "userName": "밝은 햅쌀",
        "content": "매일 조금씩 나아가면 결국 원하는 곳에 도달할 거예요. 응원하고 있어요, 힘내세요(아자아자!!)"
    },

    {
        "id": "5",
        "userName": "햇살같은미소",
        "content": "언제나 당신의 옆에 사람들이 있어요. 혼자가 아니니까, 힘들 땐 주저하지 말고 함께 조금만 더 버텨요!!."
    },

    {
        "id": "6",
        "userName": "따뜻한별빛",
        "content": "지금은 너무 힘들어도, 조금만 더 기다리면 분명히 밝은 날이 올 거예요."
    },

    {
        "id": "7",
        "userName": "행복한바람",
        "content": "모든 게 잘 될 거라는 믿음이 필요해요.다들 조금씩 성장하고 있다는 걸 잊지 말아요!"
    },

    {
        "id": "8",
        "userName": "맑은하늘속",
        "content": "지금은 힘들어도, 조금만 더 참고 견뎌봐요! 언젠가는 웃을 날이 올 거니까 :)"
    },

    {
        "id": "9",
        "userName": "빛나는새벽",
        "content": "어떤 상황이든 혼자서 다 해결할 필요는 없어요. 주변에 도움을 줄 수 있는 사람들이 많으니까, 필요할 때는 언제든지 손을 내밀어 보세요!"
    },

    {
        "id": "10",
        "userName": "따뜻한별빛",
        "content": "지금은 너무 힘들어도, 조금만 더 기다리면 분명히 밝은 날이 올 거예요. "
    }

];


const postScrollContainer = document.querySelector('.post-scroll-container');

function renderPosts(posts) {
    postScrollContainer.innerHTML = ''; // 기존 내용 초기화
    posts.forEach(post => {
        const boardContainer = document.createElement('div');
        boardContainer.className = 'board-container';
        boardContainer.innerHTML = `
            <div class="user-name">
                <img src="/public/images/profile.png" alt="프로필 이미지">
                <span>${post.userName}</span>
            </div>
            <div class="contents">${post.content}</div>
        `;
        postScrollContainer.appendChild(boardContainer);
    });
}

// 로컬 저장소 데이터 병합 및 초기화
function loadAndRenderPosts() {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    renderPosts([...showPostInfo, ...storedPosts]);
}


window.onload = loadAndRenderPosts;


// localStorage.removeItem('posts');





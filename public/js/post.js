// post.js
document.querySelector('.addBtn').addEventListener('click', function () {
    const userNameInput = document.getElementById('userNameInput').value.trim();
    const contentInput = document.getElementById('contentInput').value.trim();

    if (!userNameInput || !contentInput) {
        alert('닉네임과 내용을 모두 작성해주세요!');
        return;
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // 새로운 게시글 추가
    const newPost = {
        userName: userNameInput,
        content: contentInput,
    };

    posts.push(newPost);

    // 로컬 스토리지에 저장
    localStorage.setItem('posts', JSON.stringify(posts));

    alert('게시글이 추가되었습니다!');
    window.location.href = '/views/infos/showPost.html'; // 게시글 페이지로 이동
});


window.addEventListener('DOMContentLoaded', function () {
    const postContainer = document.querySelector('.post-scroll-container');

    // 로컬 스토리지에서 데이터 가져오기
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        postContainer.innerHTML = '<p>아직 게시글이 없습니다. 첫 번째 게시글을 작성해보세요!</p>';
        return;
    }

    // 게시글 생성
    posts.forEach(post => {
        const boardContainer = document.createElement('div');
        boardContainer.classList.add('board-container');

        const userNameDiv = document.createElement('div');
        userNameDiv.classList.add('user-name');
        userNameDiv.innerHTML = `
            <img src="/public/images/profile.png" alt="">
            <span>${post.userName}</span>
        `;

        const contentsDiv = document.createElement('div');
        contentsDiv.classList.add('contents');
        contentsDiv.textContent = post.content;

        boardContainer.appendChild(userNameDiv);
        boardContainer.appendChild(contentsDiv);

        postContainer.appendChild(boardContainer);
    });
});

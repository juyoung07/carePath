const containers = document.querySelectorAll('.checkList-container');

containers.forEach((container) => {
    container.addEventListener('click', function () {
        const icon = this.querySelector('img');
        const isActive = this.classList.contains('active');

        if (isActive) {
            this.classList.remove('active'); // 스타일 제거
            icon.src = '/public/images/x-icon.png';
        } else {
            this.classList.add('active');
            icon.src = '/public/images/v-icon.png';
        }
    });
});


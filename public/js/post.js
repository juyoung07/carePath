const addButton = document.getElementsByClassName('addBtn')[0];

addButton.addEventListener('click', () => {
    alert('작성이 완료되었습니다.')
    window.location.href = "/views/infos/showPost.html"
})

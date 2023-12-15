window.addEventListener('DOMContentLoaded', (event) => {
    const footerDiv = document.querySelector('#footer');

    fetch('footer.html')
        .then(response => response.text())
        .then(data => footerDiv.innerHTML = data);
});
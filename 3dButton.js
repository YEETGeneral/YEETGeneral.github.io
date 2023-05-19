const img = document.createElement('img');
const imgContainer = document.querySelector('.rightContainer');

imgContainer.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    img.style.transform = `rotateY(${yAxis}deg) rotateX$({xAxis}deg)`;
}); 
const blob = document.querySelector('#blob');
const blur = document.querySelector('#blur');

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 2000, fill: 'forwards' });
};
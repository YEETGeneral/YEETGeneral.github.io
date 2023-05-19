let secHeader = document.querySelector("h2");
let secHeaderArr = Array.from(secHeader.innerHTML);
let mainHeader = document.querySelector("h1");
let headerArray = Array.from(mainHeader.innerHTML);

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}
async function createHeader() {
    document.querySelector("h1.head").innerHTML = " ";
    for (let i = 0; i < 5; i++) {
        await sleep(40);
        mainHeader.innerHTML += headerArray[i];
    }
    await sleep(100);
    for (let i = 5; i < 18; i++) {
        await sleep(40);
        mainHeader.innerHTML += headerArray[i];
    }
    await sleep(100);
    for (let i = 18; i < headerArray.length; i++) {
        await sleep(40);
        mainHeader.innerHTML += headerArray[i];
    }
}
async function createrSecHeader() {
    for (let i = 0; i < secHeaderArr.length; i++) {
        await sleep(50);
        secHeader.innerHTML += secHeaderArr[i];
    }
}

async function createHeaders() {
    createHeader();
    await sleep(1500);
    createrSecHeader();
    sessionStorage.setItem("header", "done");
}

if (sessionStorage.getItem("header") != "done") {
    document.querySelector("h2.head").innerHTML = " ";
    createHeaders();
}

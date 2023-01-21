const inputName = document.getElementById("Name");
const inputSurname = document.getElementById("SurName");

function nfocusbox(inputName) {
    inputName.style.background = "yellow";
}

function nblurbox(inputName) {
    inputName.style.background = "white";
}

function snfocusbox(inputSurname) {
    inputSurname.style.background = "yellow";
}

function snblurbox(inputSurname) {
    inputSurname.style.background = "white";
}

const dis1 = document.getElementById('1');
const dis2 = document.getElementById('2');
const dis3 = document.getElementById('3');
const dis4 = document.getElementById('4');
const box = document.getElementById('dis'); 

function whenclickn() {
    const Txtappear1 = document.getElementById('Name').value;
    const Txtappear2 = document.getElementById('SurName').value;
    const Txtappear3 = document.getElementById('Calender').value;
    const Txtappear4 = document.getElementById('Menulanguage').value;

    if (Txtappear1 === ''){
        dis1.innerText = 'Insert Name';
        dis1.style.color = 'Red';
    }else{
        const text1 = document.createTextNode(Txtappear1+',');
        box.appendChild(text1);
        box.style.display = 'none';
    }

    if (Txtappear2 === ''){
        dis2.innerText = 'Insert Surame';
        dis2.style.color = 'Red';
    }else{
        const text2 = document.createTextNode(Txtappear2+',');
        box.appendChild(text2);
        box.style.display = 'none';
    }

    if (Txtappear3 === ''){
        dis3.innerText = 'Insert Birth date';
        dis3.style.color = 'Red';
    }else{
        const text3 = document.createTextNode(Txtappear3+',');
        box.appendChild(text3);
        box.style.display = 'none';
    }

    if (Txtappear4 === 'Select?'){
        dis4.innerText = 'Select Language';
        dis4.style.color = 'Red';
    }else{
        const text4 = document.createTextNode(Txtappear4);
        box.appendChild(text4);
        box.style.display = 'none';
    }

    if (Txtappear1 && Txtappear2 && Txtappear3 && Txtappear4 != ''){
        box.style.display = 'inline';
    }
}
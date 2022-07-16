


let obj = {

    img: ["images/minsk1.jpg", "images/minsk2.jpg", "images/mir.gif"],
    name: ['Костел', 'Троицкое', 'Мир'],
    link: ['google.com', 'yandex.ru', 'mail.ru']

};
let div = document.createElement('div');
document.body.append(div);
let imgDown = document.createElement('div');
document.body.append(imgDown);



let imgs = '';

for (let i = 0; i < obj.img.length; i++) {
    imgs += `<div  onmouseenter="setTimeout(change, 1000,  ${i})" ><img  width="285" height="180" onclick="open1(${i})" src="${obj.img[i]}"> <p class ="class${i}"style="text-align: center;"><a style="border: 2px solid red; font-size: 16px;" href="http://${obj.link[i]}">${obj.name[i]}</a></p></div>`

};


div.innerHTML = imgs;
let allDivs = div.querySelectorAll('div')
div.style.cssText = `
display: flex;
justify-content: space-around;
`;
imgDown.style.cssText = `
margin: 10px auto;
width: 500px;
`;


function open1(i) {
    console.log(i)
    imgDown.innerHTML = `<img onclick="clear0()" width="500" height="300" src=${obj.img[i]}>
            <p>Построенный <a href="#">в начале XVI</a> в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белоруссии</p>
        `;


};

function clear0() {
    imgDown.innerHTML = "";
};


let count = 0;
function change(i) {

    TimerId = setTimeout(change, 1000, i)
    count++; if (count > 2) { count = 0 }
    allDivs[i].innerHTML = `<img  width="285" height="180" onclick="open1(${count})" src="${obj.img[count]}"> <p style="text-align: center;"><a style="border: 2px solid red; font-size: 16px;" href="http://${obj.link[i]}">${obj.name[i]}</a></p>`;
    allDivs[i].addEventListener('mouseleave', clearTimeout(TimerId))
    allDivs[i].addEventListener('mouseleave', function(){setTimeout(stop, 2000)})

}
    function stop() {
        for(let i =0;i<allDivs.length;i++){allDivs[i].innerHTML = `<img  width="285" height="180" onclick="open1(${i})" src="${obj.img[i]}"> <p style="text-align: center;"><a style="border: 2px solid red; font-size: 16px;" href="http://${obj.link[i]}">${obj.name[i]}</a></p>`
        
}
    }

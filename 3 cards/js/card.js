


// Card 1

let card = {
    poster: "poster.png",
    type: "type.png",
    sale: "sale.png",
    title: "Тайная жизнь",
    subTitle: "домашних животных 2",
    price: 50,
    percent: 10,
    currency: "руб.",
    rating: 3,
    buy: "buy.png",
    action: true
}




// Полный вид стоимости
let fullCost = `${card.price}, 00 ${card.currency}`;

// Стоимость по акции
let Action = `${Math.round(card.price - card.price * card.percent / 100)}, 00 ${card.currency}`;

// console.log(fullCost);
// console.log(Action);

// Расчет рейтинга
let stars = "";
switch (card.rating) {
    case 0.5:
        stars = "star_half"
        break
    case 1:
        stars = "star"
        break
    case 1.5:
        stars = "star star_half"
        break
    case 2:
        stars = "star star"
        break
    case 2.5:
        stars = "star star star_half"
        break
    case 3:
        stars = "star star star"
        break
    case 3.5:
        stars = "star star star star_half"
        break
    case 4:
        stars = "star star star star"
        break
    case 4.5:
        stars = "star star star star star_half"
        break
    case 5:
        stars = "star star star star star";
        break
    default:
        stars = "star_border star_border star_border star_border star_border"
        break

}

//   console.log(stars);  

// Вывод акции
let act, vis;
if (card.action) {
    act = `
            <div>${Action}</div>
            <div>${fullCost}</div>
            `;
    vis = 0;
}
else {
    act = `<div>${fullCost}</div>`;
    vis = 0;
}

obj0 = {
    s: `
        
        <div class="card">
            <div class="poster">
            <img src="images/${card.poster}" alt="">
            <img style="opacity: ${vis}" src="images/${card.sale}" alt="">
            <img style="opacity: ${vis}" src="images/${card.type}" alt="">
            </div> 
            <div class="title">
        <div>${card.title}</div>
        <div>${card.subTitle}</div>
            </div>
            <div class="price">
               ${act}
            </div>
            <div class="rating">
        <span class="material-icons">
            ${stars}
         </span>
            </div>
        
            <div class="order">
              <img src="images/${card.buy}" alt="">  
            </div>
        
        </div>
        
        `
}



// Card 2



let card2 = {
    poster: "ferd.jpg",
    type: "type.png",
    sale: "sale.png",
    title: "История игрушек 4",
    subTitle: "Приключения Вилкинса",
    price: 60,
    percent: 10,
    currency: "руб.",
    rating: 2.5,
    buy: "buy.png",
    action: true
}




// Полный вид стоимости
let fullCost2 = `${card2.price}, 00 ${card2.currency}`;

// Стоимость по акции
let Action2 = `${Math.round(card2.price - card2.price * card2.percent / 100)}, 00 ${card2.currency}`;

// console.log(fullCost);
// console.log(Action);

// Расчет рейтинга
let stars2 = "";
switch (card2.rating) {
    case 0.5:
        stars2 = "star_half"
        break
    case 1:
        stars2 = "star"
        break
    case 1.5:
        stars2 = "star star_half"
        break
    case 2:
        stars2 = "star star"
        break
    case 2.5:
        stars2 = "star star star_half"
        break
    case 3:
        stars2 = "star star star"
        break
    case 3.5:
        stars2 = "star star star star_half"
        break
    case 4:
        stars2 = "star star star star"
        break
    case 4.5:
        stars2 = "star star star star star_half"
        break
    case 5:
        stars2 = "star star star star star";
        break
    default:
        stars2 = "star_border star_border star_border star_border star_border"
        break

}

//   console.log(stars);  

// Вывод акции
let act2, vis2;
if (card2.action) {
    act2 = `
            <div>${Action2}</div>
            <div>${fullCost2}</div>
            `;
    vis2 = 0;
}
else {
    act2 = `<div>${fullCost2}</div>`;
    vis2 = 0;
}

obj1 = {
    s: `
        
        <div class="card">
            <div class="poster">
            <img src="images/${card2.poster}" alt="">
            <img style="opacity: ${vis2}" src="images/${card2.sale}" alt="">
            <img style="opacity: ${vis2}" src="images/${card2.type}" alt="">
            </div> 
            <div class="title">
        <div>${card2.title}</div>
        <div>${card2.subTitle}</div>
            </div>
            <div class="price">
               ${act2}
            </div>
            <div class="rating">
        <span class="material-icons">
            ${stars2}
         </span>
            </div>
        
            <div class="order">
              <img src="images/${card2.buy}" alt="">  
            </div>
        
        </div>
        
        `

}



// card 3



let card3 = {
    poster: "toy4.jpg",
    type: "type.png",
    sale: "sale.png",
    title: "Фердинанд",
    subTitle: "Побег из коровника",
    price: 40,
    percent: 10,
    currency: "руб.",
    rating: 5,
    buy: "buy.png",
    action: true
}




// Полный вид стоимости
let fullCost3 = `${card3.price}, 00 ${card3.currency}`;

// Стоимость по акции
let Action3 = `${Math.round(card3.price - card3.price * card3.percent / 100)}, 00 ${card3.currency}`;

// console.log(fullCost);
// console.log(Action);

// Расчет рейтинга
let stars3 = "";
switch (card3.rating) {
    case 0.5:
        stars3 = "star_half"
        break
    case 1:
        stars3 = "star"
        break
    case 1.5:
        stars3 = "star star_half"
        break
    case 2:
        stars3 = "star star"
        break
    case 2.5:
        stars3 = "star star star_half"
        break
    case 3:
        stars3 = "star star star"
        break
    case 3.5:
        stars3 = "star star star star_half"
        break
    case 4:
        stars3 = "star star star star"
        break
    case 4.5:
        stars3 = "star star star star star_half"
        break
    case 5:
        stars3 = "star star star star star";
        break
    default:
        stars3 = "star_border star_border star_border star_border star_border"
        break

}


//   console.log(stars);  

// Вывод акции
let act3, vis3;
if (card3.action) {
    act3 = `
                <div>${Action3}</div>
                <div>${fullCost3}</div>
                `;



    vis3 = 0;
}
else {
    act3 = `<div>${fullCost3}</div>`;
    vis3 = 0;
}

obj2 = {
    s: `
            
            <div class="card">
                <div class="poster">
                <img src="images/${card3.poster}" alt="">
                <img style="opacity: ${vis3}" src="images/${card3.sale}" alt="">
                <img style="opacity: ${vis3}" src="images/${card3.type}" alt="">
                </div> 
                <div class="title">
            <div>${card3.title}</div>
            <div>${card3.subTitle}</div>
                </div>
                <div class="price">
                   ${act3}
                </div>
                <div class="rating">
            <span class="material-icons">
                ${stars3}
             </span>
                </div>
            
                <div class="order">
                  <img src="images/${card3.buy}" alt="">  
                </div>
            
            </div>
            
            `

}





let allobj = [obj0, obj1, obj2]

for (i = 0; i < allobj.length; i++) {

    cards.innerHTML += allobj[i].s;

}


let contener = document.querySelector('.container');
let pushBtn = document.querySelector( '.btn-push');
let inputName = document.querySelector('.input-name');
let formCount = document.querySelector('.form-count');
let formImage = document.querySelector('.form-image');
let formPrice = document.querySelector('.form-price');

let locproducts;
let btns;
let products;
 console.log(btns);



let mainBtn = document.querySelector('.btn-modal');
let mainForm = document.querySelector('.main-form');


mainBtn.addEventListener('click', ()=>{
    mainForm.classList.add('active');  

});
products = [
    {
        name: 'Хліб',
        count: 20,
        image: 'image/imeg2.jpg',
        price:30+"грн"
    },
    {
        name: 'ковбаса',
        count:20,
        image:'image/imeg3.jpg',
        price:30+"грн"


    },
    {
        name: 'сир',
        count:25,
        image:'image/imeg4.jpg',
        price:30+"грн"


    },

    {
        name: 'сало',
        count:30,
        image:'image/imeg8.jpg',
        price:30+"грн"

    },

    {
        name: 'картошка',
        count:30,
        image:'image/imeg1.jpg',
        price:30+"грн"

    },
    {
        name: 'цибуля',
        count:30,
        image:'image/imeg9.jpg',
        price:30+"грн"

    },
    {
        name: 'морква',
        count:30,
        image:'image/imeg6.jpg',
        price:30+"грн"

    },
    {
        name: 'помідори',
        count:30,
        image:'image/imeg7.jpg',
        price:30+"грн"

    },
    {
        name: 'капуста',
        count:30,
        image:'image/imeg11.jpg',
        price:30+"грн"

    },
    {
        name: 'огірки',
        count:30,
        image:'image/imeg10.jpg',
        price:30+"грн"

    },
    {
        name: 'йогурт',
        count:30,
        image:'image/imeg16.jpg',
        price:30+"грн"

    },
    {
        name: 'масло',
        count:30,
        image:'image/imeg5.jpg',
        price:30+"грн"

    },
    {
        name: 'кавун',
        count:30,
        image:'image/imeg14.jpg',
        price:30+"грн"

    },
    {
        name: 'чіпси',
        count:30,
        image:'image/imeg12.jpg',
        price:30+"грн"

    },
    {
        name: 'цасник',
        count:30,
        image:'image/imeg13.jpg',
        price:30+"грн"

    },
    {
        name: 'яйця курячі',
        count:30,
        image:'image/imeg17.jpg',
        price:30+"грн"

    },
    {
        name: 'чай',
        count:30,
        image:'image/imeg18.jpg',
        price:30+"грн"

    },
    {
        name: 'кофе',
        count:30,
        image:'image/imeg19.jpg',
        price:30+"грн"

    },
    {
        name: 'молоко',
        count:30,
        image:'image/imeg20.jpg',
        price:30+"грн"

    },
    {
        name: 'мед',
        count:30,
        image:'image/imeg21.jpg',
        price:30+"грн"

    },








];
function addProduct(){
    let oneProd = {
        name: inputName.value,
        count: formCount.value,
        image: formImage.value,
        price: formPrice.value
    }
    
    products.push(oneProd);
    locproducts = [...products]
    console.log(locproducts);
    locproducts.forEach(product=>{
        contener.innerHTML+=`<div class="box">
        <div class="image"><img src='${product.image}'></div>
        <div class= "title">${product.name}</div>
        <div class="count">кількість: ${product.count}</div>
        <div class="price">ціна: ${product.price} </div>
        <div class="btn">купить</div>
        </div>`
        btns = document.querySelectorAll('.btn');
    
    });
    

}


products.forEach(product=>{
    contener.innerHTML+=`<div class="box">
    <div class="image"><img src='${product.image}'></div>
    <div class= "title">${product.name}</div>
    <div class="count">кількість: ${product.count}</div>
    <div class="price">ціна: ${product.price} </div>
    <div class="btn">купить</div>
    </div>`
    btns = document.querySelectorAll('.btn');


});
btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        console.log(e);

    })
});
pushBtn.addEventListener('click', addProduct);

const filter = document.querySelector('.filter-cathegories'); 
const mugs = document.getElementById('mugs'); 
const Tshirts = document.getElementById('T-shirts'); 
const trinkets = document.getElementById('trinkets'); 
const dakimakuras = document.getElementById('dakimakuras'); 
let goodsArr = document.getElementsByClassName('item'); 
let bool = false; 

mugs.addEventListener('click', () => GoodsFilter('mug')); 
Tshirts.addEventListener('click', () => GoodsFilter('T-shirt')); 
trinkets.addEventListener('click', () => GoodsFilter('trinket')); 
dakimakuras.addEventListener('click', () => GoodsFilter('dakimakura')); 


function filterToggle() 
{
    if (bool == false) {filter.style.display = 'flex'; bool = true}  
    else if (bool == true) {filter.style.display = 'none'; bool = false}
}

function showAllGoods() 
{
    Array.prototype.forEach.call(goodsArr, element => {
        element.style.display = 'flex'; 
    });
}



function GoodsFilter(parametr) 
{
    Array.prototype.forEach.call(goodsArr, element => {
        element.style.display = 'flex'; 
    });

    Array.prototype.forEach.call(goodsArr, element => {
        if (element.className.indexOf(parametr) < 0) {element.style.display = 'none'}
    });
}

// Сначала настрой фон шрифты и всё, что нужно меню фитра (категорий), а потом 
// настрой саму фильтрацию через order в флексе (назначь каждому айтему свой класс вроде cup, T-sherts и т. д.),   
// то есть в js ты будешь только пользоваться classListToggle и назначать нужный тебе order 
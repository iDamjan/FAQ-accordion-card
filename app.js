const accordionItem = document.querySelectorAll('.accordion_item')
const arrows = document.querySelectorAll('.arrow');

//targeting each accordion question of the accordion item separately //

accordionItem.forEach(item => {
    // console.log(item);
    // console.log(item.nextElementSibling)
    item.addEventListener('click', (e)=>{

        item.nextElementSibling.classList.toggle('accordion_show');
        item.firstElementChild.nextElementSibling.classList.toggle('arrow_rotate');

        if(item.nextElementSibling.offsetWidth > 0 && item.nextElementSibling.offsetHeight > 0 === true){
            item.style.borderBottom = '0px solid rgba(128, 128, 128, 0.445)'; 
            item.firstElementChild.style.color = 'hsl(14, 88%, 65%)';
            
        } else {
            item.style.borderBottom = '0.1px solid rgba(128, 128, 128, 0.445)'; 
            item.firstElementChild.style.color = 'hsl(238, 29%, 16%)';
        }
        
        
    })

})
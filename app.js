const accordionQuestionOne = document.querySelector('.accordion_questionOne');
const accordionQuestionTwo = document.querySelector('.accordion_questionTwo');
const accordionQuestionThree = document.querySelector('.accordion_questionThree');
const accordionQuestionFour = document.querySelector('.accordion_questionFour');
const accordionQuestionFive = document.querySelector('.accordion_questionFive');

const accordionAnswerOne = document.querySelector('.accordion_collapseOne');
const accordionAnswerTwo = document.querySelector('.accordion_collapseTwo');
const accordionAnswerThree = document.querySelector('.accordion_collapseThree');
const accordionAnswerFour = document.querySelector('.accordion_collapseFour');
const accordionAnswerFive = document.querySelector('.accordion_collapseFive');

const accordionItemOne = document.querySelector('.accordion_itemOne');
const accordionItemTwo = document.querySelector('.accordion_itemTwo');
const accordionItemThree = document.querySelector('.accordion_itemThree');
const accordionItemFour = document.querySelector('.accordion_itemFour');
const accordionItemFive = document.querySelector('.accordion_itemFive');



accordionQuestionOne.addEventListener('click', (e) =>{

    accordionAnswerOne.classList.toggle('accordion_show');
     
    if (accordionAnswerOne.offsetWidth > 0 && accordionAnswerOne.offsetHeight > 0 === true){
        accordionItemOne.style.border ='0px solid rgba(128, 128, 128, 0.445)';
        document.querySelector('h3').style.color = 'hsl(14, 88%, 65%)';
    } else { 
        accordionItemOne.style.borderBottom = '0.1px solid rgba(128, 128, 128, 0.445)';
        document.querySelector('h3').style.color = 'hsl(238, 29%, 16%)';
    }
    


})

accordionQuestionTwo.addEventListener('click', (e) =>{

    accordionAnswerTwo.classList.toggle('accordion_show');

    if (accordionAnswerTwo.offsetWidth > 0 && accordionAnswerTwo.offsetHeight > 0 === true){
        accordionItemTwo.style.border ='0px solid rgba(128, 128, 128, 0.445)';
    } else { 
        accordionItemTwo.style.borderBottom = '0.1px solid rgba(128, 128, 128, 0.445)';
    }

    
})

accordionQuestionThree.addEventListener('click', (e) =>{
    accordionAnswerThree.classList.toggle('accordion_show');

    if (accordionAnswerThree.offsetWidth > 0 && accordionAnswerThree.offsetHeight > 0 === true){
        accordionItemThree.style.border ='0px solid rgba(128, 128, 128, 0.445)';
    } else { 
        accordionItemThree.style.borderBottom = '0.1px solid rgba(128, 128, 128, 0.445)';
    }

})

accordionQuestionFour.addEventListener('click', (e) =>{
    accordionAnswerFour.classList.toggle('accordion_show');

    if (accordionAnswerFour.offsetWidth > 0 && accordionAnswerFour.offsetHeight > 0 === true){
        accordionItemFour.style.border ='0px solid rgba(128, 128, 128, 0.445)';
    } else { 
        accordionItemFour.style.borderBottom = '0.1px solid rgba(128, 128, 128, 0.445)';
    }

})

accordionQuestionFive.addEventListener('click', (e) =>{
    accordionAnswerFive.classList.toggle('accordion_show');

    if (accordionAnswerFive.offsetWidth > 0 && accordionAnswerFive.offsetHeight > 0 === true){
        accordionItemFive.style.border ='0px solid rgba(128, 128, 128, 0.445)';
    } else { 
        accordionItemFive.style.borderBottom = '0.1px solid rgba(128, 128, 128, 0.445)';
    }

})


const accordionQuestionOne = document.querySelector('.accordion_questionOne');
const accordionQuestionTwo = document.querySelector('.accordion_questionTwo');
const accordionQuestionThree = document.querySelector('.accordion_questionThree');
const accordionQuestionFour = document.querySelector('.accordion_questionFour');
const accordionQuestionFive = document.querySelector('.accordion_questionFive');
const accordionAnswer = document.querySelector('.accordion_collapse'); 

accordionQuestionOne.addEventListener('click', (e) =>{
    accordionAnswer.classList.toggle('accordion_show');

})

accordionQuestionTwo.addEventListener('click', (e) =>{
    accordionAnswer.classList.toggle('accordion_show');

})

accordionQuestionThree.addEventListener('click', (e) =>{
    accordionAnswer.classList.toggle('accordion_show');

})

accordionQuestionFour.addEventListener('click', (e) =>{
    accordionAnswer.classList.toggle('accordion_show');

})

accordionQuestionFive.addEventListener('click', (e) =>{
    accordionAnswer.classList.toggle('accordion_show');

})


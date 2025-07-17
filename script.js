// console.log("hello");
// function changeAllArticleColors(){
//     const allatticle=document.querySelectorAll("#products>article");
//     for(let article of allatticle){
//         article.addEventListener('click',()=>{
//         article.classList.add('sale');
//         console.log(article.className);
//         document.querySelector('.sale').style.backgroundColor='red';
//     });
//     }
// }
//changeAllArticleColors();

function attachBuyEvents(){
   let btn=document.body.querySelectorAll('.buy'); 
   console.log(btn);
   for(let button of btn){
    button.addEventListener('click', function(e) {
        console.log(this.parentElement.classList.toggle('sale'));
        console.log(this.parentElement.dataset.id);
    });
   }
}
attachBuyEvents();
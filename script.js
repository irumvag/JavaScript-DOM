function changeAllArticleColors(){
    const allArticle=document.querySelectorAll('article');
    for(let elem of allArticle)
    {
        console.log(elem)
        elem.addEventListener('click',(e)=>{
            e.target.style.backgroundColor='#ffddd2';
        });
        setTimeout(()=>{elem.addEventListener('click',(e)=>{
            e.target.style.backgroundColor='';
        });},1000);
    }
}
changeAllArticleColors();

function attachBuyEvents(){
   let btn=document.body.querySelectorAll('.buy'); 
   for(let button of btn){
    button.addEventListener('click', function(e) {
        console.log(this.parentElement.classList.toggle('sale'));
        console.log(this.parentElement.dataset.id);
    });
   }
}
attachBuyEvents();
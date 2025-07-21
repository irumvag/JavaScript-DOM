console.log("hello world");
function changeAllArticleColors(elem){
    elem.style.backgroundColor='#fddssd';
    console.log(elem);
}
const allArticles=document.querySelectorAll('#products>article');
for(let article of allArticles){
  article.classList.add('sale');
}
function attachBuyEvents(){
   let btn=document.querySelectorAll('.buy');
   let id=0;
   //console.log(btn);
   for(let button of btn)
    {
        button.addEventListener('click',()=>{
            const parentelem=button.parentElement;
            let table=cart.children[0];
            let price=parentelem.querySelector('.price').textContent;
            let product=parentelem.firstElementChild.textContent;
            let quantity=parentelem.querySelector('.quantity').value;
            //console.log(table,price,product,quantity);
            if(window.getComputedStyle(parentelem).backgroundColor==="rgb(255, 221, 210)"){
                parentelem.style.backgroundColor='rgb(204,205,204)';
                
            }
            else{
                parentelem.style.backgroundColor='#ffddd2';
                const row=document.createElement('tr');
                const ids=document.createElement('td');
                ids.appendChild(document.createTextNode(id));
                row.appendChild(ids);
                const pro=document.createElement('td');
                pro.appendChild(document.createTextNode(product));
                row.appendChild(pro);
                const q=document.createElement('td');
                q.appendChild(document.createTextNode(quantity));
                row.appendChild(q);
                const pr=document.createElement('td');
                pr.appendChild(document.createTextNode(price));
                row.appendChild(pr);
                const total=document.createElement('td');
                total.appendChild(document.createTextNode(quantity*price));
                row.appendChild(total);
                table.appendChild(row);
                id++;
                let sum=0;
                console.log(table.rows[1].cells[4]);
                console.log('sum',sum);
                for(let i=1;i<id+1;i++){
                    console.log(table.rows[i].cells[4])
                }
                
            }
            console.log('button clicked')
        });
    } 
}
attachBuyEvents();
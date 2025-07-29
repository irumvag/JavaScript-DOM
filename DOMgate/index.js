console.log('The way!\n----------------------------------------------------------------------------');
let table=document.getElementById('sampleTable');
let btn=document.querySelector('input[type=button]');
btn.addEventListener('click',function (){
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();
  cell1.textContent = "New Row, Cell 1";
  cell2.textContent = "New Row, Cell 2";
  let tablerows=table.rows;
  cell1.textContent=`Row${tablerows.length+1} cell1`;
  cell2.textContent=`Row${tablerows.length+1} cell2`;
});

// let row=document.createElement('tr');
    // let frag=new DocumentFragment();
    // let cell1=document.createElement('td');
    // let cell2=document.createElement('td');
    // let tablerows=table.rows;
    // //let tablecells=tablerows.cells;
    // cell1.textContent=`Row${tablerows.length+1} cell1`;
    // cell2.textContent=`Row${tablerows.length+1} cell2`;
    // frag.appendChild(cell1);
    // frag.appendChild(cell2);
    // row.appendChild(frag);
    // table.appendChild(row);
     // 2. Add a new row
/*** 
   These are my two global variables that will contain my list and that about of names to show on each page
   and where they will be pulled from. 
***/
const list = document.querySelectorAll('li');
const namesPerPage = 10;

console.log (list);

/*** 
 This is the code that allows you to set the number of students that will be shown per page...10. 
      
***/
const showPage = (list,page) => {
   let startIndex = (page * 10) - 10;
   let endIndex = (page * 10);
   
   for (let i = 0; i < list.length; i++) {
   
    if (i >= startIndex && i<endIndex){
       list[i].style.display = 'block';
   } else {
      list[i].style.display = 'none';
    }
   }
      
 };
 showPage(list,1);

/*** 
   the page code that creates buttons for the appendPagelinks and number of pages that it will split up into. 
***/

const appendPageLinks = (list) => { 
   let div = document.createElement('div');
   div.className ='pagination';
   let page = document.querySelector('.page');
   page.appendChild(div);
   let ul = document.createElement('ul');
   div.appendChild(ul);
   let amountOfPages = Math.ceil(list.length / namesPerPage);
   
   for (let i = 1; i <= amountOfPages; i++) {
      let li = document.createElement('li');
      ul.appendChild(li); 
      let a = document.createElement('a');
      a.setAttribute("href", "#");
      if (i == 1) {
        a.className = 'active'; 
      } 
      a.textContent = i;
      li.appendChild(a);
     

     a.addEventListener("click", (event) => { /** /this o the code that allows you to select the buttons at the
      bottom of the page which will be high lighted only when selected/** */ 
      let a = document.querySelectorAll('a')
      for(let i = 0; i < a.length; i++ ) {
         // make it inactive
        a[i].className= "";
      }
      // make the one we clicked active
     event.target.className = "active"

      showPage(list, event.target.textContent ); 
     });

   }

}

appendPageLinks(list); 
// this last code is what brings it all together, pages shown as button, students per page... you know.
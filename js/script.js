/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const list = document.querySelectorAll('li');
const namesPerPage = 10;

console.log (list);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
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
     

     a.addEventListener("click", (event) => {
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

// Remember to delete the comments that came with this file, and replace them with your own code comments.
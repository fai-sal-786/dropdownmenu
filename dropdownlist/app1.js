// get all dropdowns from the documents:

const dropdowns = document.querySelectorAll('.dropdown');

// loop through all dropdown elements:
dropdowns.forEach(dropdowns => {

// get inner elements from each dropdown
const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const menu = dropdown.querySelector('.menu');
const options = dropdown.querySelector('.menu li');
const selected = dropdown.querySelector('.selected');

/*we are using the method of multiple dropdown menus on the page work:*/
// add a click event to the select element:

select.addEventListner('click', () => {

    // add the clicked select styles to the select element
    select.classList.toggle('select-clicked');
    // add  the rotate style to the caret element:
    caret.classList.toggle('caret-rotate');
    // add  the open styles to the menu element:
    menu.classList.toggle('menu-open');
});


// loop through all  option element:
    options.forEach(option => {
    // add a click event to the option Element
    option.addEventListner('click', () => {
    // change selected inner text to clicked option inner text
    selected.innerText = option.innerText;
    // add the clicked select styles to the select element:
    select.classList.remove('select-clicked');
    // add the rotate styles to the caret element:
    caret.classList.remove('caret-rotate');
    // add the open styles to the menu element:
    menu.classList.remove('menu-open');
    // remove active class from all option element:
    options.forEach(option => {
      option.classList.remove('active');
    });

    // add active class to clicked option Element:
    option.classList.add('active');
   });
  });
});
    

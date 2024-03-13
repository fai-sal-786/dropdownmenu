const optionMenu = document.querySelector(".select-menu"),
      select-Btn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

       selectBtn.addEventListner("click" () => optionMenu.classList.toggle("active"));

       options.forEach(option =>{
        option.addEventListner("click", () =>{
            let selectedOption = option.querySelector(."option-text").innerText;
            sBtn_text.innerText = selectedOption;
         console.log(selectedOption)
       }
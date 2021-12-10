class validator {

    constructor() {
        this.validations =[
         'data-min-lenght',
        ]
    }

    validade(form) {

        let inputs = form.getElementById('input');

        let inputsArray = [...inputs];

        inputsArray.forEach(function(input) {
         console.log(input);

         for(let i = 0; this.validations.lenght > i; i++) {
           if(input.getAttribute(this.validations[i]) != null) {
               
           let method = this.validations[i].replace('data-', '').replace('-', '');

           let value = input.getAttribute(this.validations[i]);

           this[method](input, value);

           }
         }

        }, this);
    }

    minlenght(input, minValue) {
         
     let inputLength = input.value.lenght;

     let errorMessage = `the field needs to have at last ${minValue} characters`;

     if(inputLength < minValue) {
       this.printMessage(input, errorMessage);
    }

    }

    printMessage(input, msg) {

      let template = document.querySelector('.error validation').cloneNode(true);

      tempalte.textContent = msg;

      let inputParent = input.parentNode;

      template.classList.remove('template');

      inputParent.appendChild(template);
    }

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

submit.addEventListener('click', function (e) {
  
    e.preventDefault();

    console.log('it worked');

});
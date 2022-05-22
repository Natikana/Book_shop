

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    const formName = form.querySelector('#formName');
    const formSurname = form.querySelector('#formSurname');
    const formHouse = form.querySelector('#formHouse');
    const formFlat = form.querySelector('#formFlat');
    form.addEventListener('submit', formSend);
    const btn = form.querySelector('.btn');
    
 

    async function formSend(e) {
        e.preventDefault();
        
        let error = formValidate(form);
        
        
       /*  if (error === 0) {

        } else {
            alert('Fill in the field, please')
        } */
    }

    function formValidate(form) {
        let error = 0;
        let forRec = document.querySelectorAll('.rec');

         for ( let index = 0; index < forRec.length; index++ ) {
            const input = forRec[index];
            formRemoveError(input);

            if (input.classList.contains('_name')  ) {
                if (surnameNameTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            if (input.classList.contains('_surname')  ) {
                if (surnameNameTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            if (input.classList.contains('_flat') ) {
                if (flatTest(input) ) {
                    formAddError(input);
                    error++;
                }
            }
            if (input.classList.contains('_house') ) {
                if (houseTest(input)){
                    formAddError(input);
                    error++;
                }
            }   
            if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            }
            if (input.value === '') {
                formAddError(input);
                error++;
            }
          /*   if (input.value === '') {
                btn.setAttribute("disabled", "disabled");
            } else {
                btn.removeAttribute("disabled", "disabled");
            } */
            
        }
        return error; 
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');    
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function surnameNameTest(input) {
        return !/[a-zA-Z]/.test(input.value);
    }

    function flatTest(input) {
        return !/^[1-9][0-9]*$/.test(input.value);
    }
    function houseTest(input) {
        return !/^[1-9][0-9]*$/.test(input.value);
    }
    
});    

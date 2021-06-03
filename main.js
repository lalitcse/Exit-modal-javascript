if(document.cookie.length != 0){
    document.getElementById('cookie_exist_id').style.display = 'block';
    getCookie()
}else{
    setTimeout(function(){ 
        launchModal()
    }, 2000);
}

//  for mobile screen ( instead of exit-intent the popup should auto appear after 5 seconds. )

if (window.matchMedia('screen and (max-width: 768px)').matches) {
    document.getElementById('class_id').style.display = 'none';
    document.getElementById('tagline_for_mobile_id').style.display = 'block';
    setTimeout(function(){ 
        launchModal()
    }, 5000);
}


const launchModal = () => {
    let modal = document.querySelector(".modal");
    modal.style.display = 'block';
    let closeButton = document.querySelector(".close-button");

    let toggleModal = () => {
        modal.classList.toggle("show-modal");
        let name_input = removeSpaces(document.getElementById('name_id').value);
        let email_input = removeSpaces(document.getElementById('email_id').value);
        if(name_input == '' && email_input == ''){
            document.cookie = `status=name and email empty;`;
            document.cookie = `name=${name_input}`;
            document.cookie = `email=${email_input}`;
            document.getElementById('cookie_set_id').style.display = 'block';
            getCookie()
        }else{
            document.cookie = `status=data filled`;
            document.cookie = `name=${name_input}`;
            document.cookie = `email=${email_input}`;
            document.getElementById('cookie_set_id').style.display = 'block';
            getCookie()
        } 
    }
    closeButton.addEventListener("click", toggleModal);
}

function getCookie(){
    let cookie_string = document.cookie.split('; ')
    for(let i = 1; i < cookie_string.length; i++){
        let key_value = cookie_string[i];
        console.log(key_value)
    }
}

const checkFormData = () =>{
    let name_input = removeSpaces(document.getElementById('name_id').value);
    let name_validation = document.getElementById('name_error_id');
    let email_input = removeSpaces(document.getElementById('email_id').value);
    let email_validation = document.getElementById('email_error_id');
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    // validation for name field
    if(name_input == ''){
        name_validation.style.display = 'block'
    }else{
        document.cookie = `name=${name_input}`;
        name_validation.style.display = 'none'
    }
    // validation for email field
    if(email_input == ''){
        email_validation.style.display = 'block'
    }else{
        email_validation.style.display = 'none'
    }
    // validation for email
    
    if(name_input != '' && email_input != ''){
        if(pattern.test(email_input) == false){
            email_validation.style.display = 'block'
        }else{
            let element = document.getElementById("modal_id");
            element.classList.remove("show-modal");
            document.getElementById('cookie_set_id').style.display = 'block';
            document.cookie = `email=${email_input}`;
            email_validation.style.display = 'none'
        }
    }
    document.cookie = `status=cookie filled`;
}
const  removeSpaces = (val) => {
    return  val.split(' ').join('');
}

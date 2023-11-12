const select_button = document.querySelector('.selectbox');

const item_list = document.querySelector('.selectbox__list');

const one_button = document.querySelector('.button');

const input_request = document.querySelector('.req');


one_button.addEventListener('click', function(event) {
    /* fetch('https://api.telegram.org/bot6821225446:AAHJNBXwWX1L23GIwbjzHPD7nnPNCh8zvPc/sendMessage?chat_id=1422194909&text=1231').then((response) => response.json()).then((data)=>{
        console.log(data);
    }); */
    const req_user = input_request;
    debugger
    console.log(req_user);
})

select_button.addEventListener('click', function(event) {
    const text_button = event.target.innerHTML;
    console.log(event);
})

select_button.addEventListener('mouseenter', function() {
    select_button.classList.add('open');
})

select_button.addEventListener('mouseleave', function() {
    select_button.classList.remove('open');
})

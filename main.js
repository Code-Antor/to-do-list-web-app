let input = document.querySelector('#text');
let list = document.querySelector('.list');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    if(input.value === ''){
        alert('You must write something');
    }
    else {
      let li = document.createElement('li');
      li.innerHTML = input.value;
      list.appendChild(li);
      let span =document.createElement('span');
      span.innerHTML = 'X';
      li.appendChild(span)

      li.addEventListener('click',function(){
        this.style.textDecoration = 'line-through'
      })
      span.addEventListener('click',function(){
        this.parentElement.remove();
      })
      
    }
    input.value = '';
    
})

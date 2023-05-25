window.addEventListener("load",function(){
    document.querySelector("input[type='checkbox'][name='mainCheck']").addEventListener('click',function(){
        let spans = document.querySelector('.mainBranch').classList.toggle('hidden')
        spans.forEach(span => {
            span.classList.toggle('hidden')
        });
    })
    document.querySelector("input[type='checkbox'][name='secCheck']").addEventListener('click',function(){
        let spans = document.querySelectorAll('.right span:not(.mainBranch)')
        spans.forEach(span => {
            span.classList.toggle('hidden')
        });
    })

    
});
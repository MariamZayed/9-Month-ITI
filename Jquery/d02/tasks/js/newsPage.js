$(function(){
    // Article
    $("button[type='submit']").on('click',function(eventt){
        //bring values of radio button and the article
        let newsValue = $('input:checked').val();
        let articleValue = $('textarea').val();

        ////doesnt work :((
        // $('#articles').apeend('<div><article>'+articleValue+'</article> <button>Delete</button></div>').toggleClass(newsValue);

        //create elements for them
        let articleDiv = document.createElement('article');
        let delButton = document.createElement('button');
        let contentDiv = document.createElement('div');

        //giving radio button class to the article
        $(articleDiv).toggleClass(newsValue);
        $(articleDiv).text(articleValue);

        $(delButton).text("Delete");

        $(contentDiv).append(delButton);
        $(articleDiv).append(contentDiv);
        $('#articles').append($(articleDiv));

        //remove default form action
        eventt.preventDefault();
    });

    // Deleting Button
    $('#articles').on('click', 'button', function () {
        $(this).parents("article").remove();
    })

    $("input[name='search']").on("keyup",function(){
        console.log($(this).val());
        let keyword = $(this).val();
        for(let elem of $('article span')){
            $(elem).parent().css({
                display:'block'
            });
            if( keyword &&  $(elem).text().indexOf(keyword) <0 ){
                $(elem).parent().css({
                    display:'none'
                })
            }
        }

    })
})
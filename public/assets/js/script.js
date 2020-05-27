$(".devourBtn").on("click", function(event){
    const $pressedButton = $(event.target);
    // console.log($pressedButton.data("id"));
    const ateBurger = {devoured: 1};
    $.ajax("/api/burgers/" + $pressedButton.data("id"),{
        method: "PUT",
        data: ateBurger
    }).then(function(){
        location.reload();
    });
});
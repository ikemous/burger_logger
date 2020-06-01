/**
 * .devourBtn click Event
 * Purpose: To update burger information when clicked
 *          Then reload page
 */
$(".devourBtn").on("click", function(event){
    // grab event id from button
    const $pressedButton = $(event.target);
    const ateBurger = {devoured: 1};
    // Ajax call to server to update information
    $.ajax("/api/burgers/" + $pressedButton.data("id"),{
        method: "PUT",
        data: ateBurger
    }).then(function(){
        //Reload the page
        location.reload();
    });//End ajax call
});//End .devourBtn click event

/**
 * .deleteBtn click Event
 * Purpose: To delete burger information when clicked
 *          Then reload page
 */
$(".deleteBtn").on("click", function(event){
    //Grab clickevent
    const $pressedButton = $(event.target);
    //ajax call to delete burger information
    $.ajax("/api/burgers/" + $pressedButton.data("id"),{
        method: "DELETE",
    }).then(function(){
        //Reload the page
        location.reload();
    });//End ajax delete call
});//End .deleteBtn click Event


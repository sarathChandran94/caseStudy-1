// main_page_javascript

$(document).ready(function() {

    // variable declarations
    var items = [],list = [],list1 = [],clicks = 0;

    // Accessing Todo List
    let getList = () => {$(document).load('https://jsonplaceholder.typicode.com/todos',function(res,stat,xhr) {

        // page loading animation
        $("#loader").hide().ajaxStart( () => {$(this).show();}).ajaxStop( () => {$(this).hide();});

        items = JSON.parse(res);

        // promise
        var promise = new Promise( (resolve,reject) => {
            if(stat == "success") {resolve();}
            if(stat == "failure") {reject(`Sorry Error code: ${xhr.status}`)}
        });

        // promise resolution
        promise
        .then( (s) => {getTable();})
        .then( () => {taskCheck();})
        .catch( (e) => {console.log(e)});
    })};

    // Creating Table elements
    let getTable = () => {$.each(items,function(key,value) {
        if (value.completed) {
            list1 = `<td style="border-bottom: 1px solid red;"><label><input type="checkbox" checked disabled/><span></span></label></td>`;
        }
        if(!value.completed) {
            list1 = `<td style="border-bottom: 1px solid red;"><label><input type="checkbox"/><span></span></label></td>`;
        }
        list += `<tr>
                    <td style="border-bottom: 1px solid red;">${value.id}</td>
                    <td style="border-bottom: 1px solid red;">${value.title}</td>
                    <td style="border-bottom: 1px solid red;">${value.completed}</td>
                    ${list1}
                </tr>`;
        $("#list").html(`${list}`);
    })};

    // checking for task completions
    let taskCheck = () => {$("input").on("change", () => {
        event.preventDefault();
        $("input:focus").prop("disabled","disabled");
        ++clicks;
        if (clicks == 5) {
            Swal.fire(
                'Good job!',
                'You\'ve completed 5 tasks.',
                'success'
            );
        }
    })};

    getList();
});

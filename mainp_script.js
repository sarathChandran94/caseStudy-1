// main_page_javascript

$(document).ready(function() {

    // variable declarations
    var items = [],list = [],list1 = [],clicks = 0;

    // Accessing Todo List
    let getList = () => {$(document).load('https://jsonplaceholder.typicode.com/todos',function(res,stat,xhr) {

        // page loading animation
        $("#loader").hide().ajaxStart( () => {$(this).show();}).ajaxStop( () => {$(this).hide();});

        items = JSON.parse(res);
        list = `<tr>
                    <th style="text-align:center;">Slno</td>
                    <th style="text-align:center;">Tasks</td>
                    <th style="text-align:center;">Completed</td>
                </tr>`

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
            list1 = `<td style="border-bottom: 1px solid grey;text-align:center"><label><input type="checkbox" checked disabled/><span></span></label></td>`;
        }
        if(!value.completed) {
            list1 = `<td style="border-bottom: 1px solid grey;text-align:center"><label><input type="checkbox"/><span></span></label></td>`;
        }
        list += `<tr class="listItems">
                    <td style="border-bottom: 1px solid grey;text-align:center">${value.id}</td>
                    <td style="border-bottom: 1px solid grey;text-align:left">${value.title}</td>
                    ${list1}
                </tr>`;
        $("#list").html(`${list}`);
    })};

    // checking for task completions
    let taskCheck = () => {$("input").on("change", () => {
        // $("input:focus").prop("checked","checked");
        if($("input:focus").attr("checked")) {
            $("input:focus").removeAttr("checked");
            clicks--;
        }
        else {
            $("input:focus").attr("checked","checked");
            clicks++;
        }
        // ++clicks;
        var promiseAlert = new Promise( (resolve,reject) => {
            if (clicks == 5) {
                resolve(`Congratulations!! Completed ${clicks} tasks!`);
            }
            else {
                reject(`Completed ${clicks} task(s)!`)
            }

        });
        promiseAlert
        .then( (s) => {Swal.fire(
                            'Good job!',
                            'You\'ve completed 5 tasks.',
                            'success'
                        );console.log(s);})
        .catch( (e) => {console.log(e)});

    })};

    getList();
});

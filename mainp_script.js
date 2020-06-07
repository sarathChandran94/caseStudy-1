// main_page_javascript
$(document).ready(function() {
    var items = [],toDisp =[],disp = [],objVal = [],list =[],list1 = [],list2 =[],output = [];
    var i,j;
    $(document).load('https://jsonplaceholder.typicode.com/todos',function(res,stat,xhr) {
        items = JSON.parse(res);
        // document.getElementById('display').innerHTML = items;
        for (var x=0;x<items.length;x++) {
            output += items[x];
        }
        // console.log(output);



















        $.each(items,function(key,value) {
            // console.log(key);
            console.log(value.completed);
            list += `<tr>
            <td style="border-bottom: 1px solid red;">${value.id}</td>
            <td style="border-bottom: 1px solid red;">${value.title}</td>
            <td style="border-bottom: 1px solid red;">${value.completed}</td>
            <td style="border-bottom: 1px solid red;"><label><input type="checkbox"/><span></span></label></td>
            </tr>`;
            $("#list").html(`${list}`);
            if (value.completed) {
                $("input").attr("checked","checked");
            }
        });
















        // output1.forEach(element => {
        //     if (element == "true") {
        //         console.log(element);
        //         return true;
        //         // trueItem += element;
        //     }
        //     // if(element == "false") {
        //     //     falseItem += element;
        //     //     console.log(element);
        //     // }
        // });
    });
});

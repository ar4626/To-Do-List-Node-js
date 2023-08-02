console.log("JavaScript id loaded successfully")
// this in responsible for making  making cross line when the idem is  checked for deleting
function checkedOrNot() {
    let cb = document.querySelectorAll('.delechack'); // getting all the check-box class 
    let descdisp = document.querySelectorAll('.desc'); // gettong all the class where descripting of TODO is defined
    let ddsp = document.querySelectorAll('.duedate'); // getting all the class for dueDate
    for (let i = 0; i < descdisp.length; i++) {
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
        if (cb[i].checked == true) {
            //    console.log(cb[i].getAttribute('uid'));
            //getting the element by uid same and crossing it
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through';
        }
        else if (cb[i].checked == false) {
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration  = 'none'
        }

    }

}

 // this addEventListener  come into action when we clicked on delete button after we checked which list of items need to be deleted

document.getElementById('del-btn').addEventListener('click',function(){
    let checked=document.querySelectorAll('.delechack:checked')      //getting the checked element
    let arrcheck = []    //list of checked elements
    for (let i of checked){
        arrcheck.push(i.getAttribute('uid'));    //getting unique id and pushing it into the array
    }

    if (arrcheck.length===0){
        console.log('No items are selected');

        return;
    }
    console.log(arrcheck);

    // here we are making delete request with the help of Ajax request
    $.ajax({
        type: 'post',
        url: '/delete_todo/?id='+arrcheck,
        success: function(){
            console.log("Successfully sent delete request")
            window.location = '/';
        },
        error: function(err){
            console.log("Error sending delete request" +err); 
        }
    })
})

//this is for changing the color of the category box based on the different selection

// const selectElement = document.getElementById('category');
// const categoryDiv = document.getElementsByClassName('categ-box');

// //defining a map between option values and their corresponding colors
// const colorMapping ={
//     Personal: '#8587e6',
//     School:'#6466EE',
//     Work: '#484993',
//     Cleanig: '#3A3DFA',
//     Other: '#165D94'
// };

// selectElement.addEventListener('change',function(){
//     const selectedValue = selectElement.value;
//     const selectedColor = colorMapping[selectedValue];
//     categoryDiv.style.backgroundColor  = selectedColor;
// })
//current time by hour
new Date($.now());
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

var element = document.getElementById('hour');
element.innerHTML = time;



//current day
var dd = new Date();

var month = dd.getMonth()+1;
var day = dd.getDate();

var output = dd.getFullYear() + '/' +
(month<10 ? '0' : '') + month + '/' +
(day<10 ? '0' : '') + day;

var element1 = document.getElementById('day');
element1.innerHTML = output;

//---------------------------------save

$('#save1').on('click', function(){
    $('input[id="plan1"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

$('#save2').on('click', function(){
    $('input[id="plan2"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

$('#save3').on('click', function(){
    $('input[id="plan3"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

$('#save4').on('click', function(){
    $('input[id="plan4"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

$('#save5').on('click', function(){

    $('input[id="plan5"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

$('#save6').on('click', function(){
    $('input[id="plan6"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

$('#save7').on('click', function(){
    $('input[id="plan7"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

$('#save8').on('click', function(){
    $('input[id="plan8"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});

$('#save9').on('click', function(){
    $('input[id="plan9"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});
//was planning to evently change to one button that only checks the same divs for the info

//--------------------------------------save all
$('#saveall').on('click', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });   
});


//-----------------------clear all----------------------------
document.getElementById('clear').addEventListener("click", function(event) {
    if(confirm("Are you sure to clear all info?") == true) {
    localStorage.clear();
    location.reload()
    } else {}
});
//---------------------------------time colouring----------------------------


function formatAMPM(date) {
    var hours = date.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var strTime = hours + ampm;
    return strTime;
}

console.log(formatAMPM(new Date));



window.onload = function() {
    // $(".block").each(function(){
    //     var currentM = 
    // })
    //was trying to identifiy each block by spliting it to only the hour that was a part.
        
    
    if ("9am" == formatAMPM(new Date)) {
    document.getElementById("plan1").classList.remove("holder");
    document.getElementById("plan1").classList.add("present");
    document.getElementById("plan2").classList.remove("holder");
    document.getElementById("plan2").classList.add("future");
    document.getElementById("plan3").classList.remove("holder");
    document.getElementById("plan3").classList.add("future");
    document.getElementById("plan4").classList.remove("holder");
    document.getElementById("plan4").classList.add("future");
    document.getElementById("plan5").classList.remove("holder");
    document.getElementById("plan5").classList.add("future");
    document.getElementById("plan6").classList.remove("holder");
    document.getElementById("plan6").classList.add("future");
    document.getElementById("plan7").classList.remove("holder");
    document.getElementById("plan7").classList.add("future");
    document.getElementById("plan8").classList.remove("holder");
    document.getElementById("plan8").classList.add("future");
    document.getElementById("plan9").classList.remove("holder");
    document.getElementById("plan9").classList.add("future");
    }//----------------------------------------------------------------
    if ("10am" == formatAMPM(new Date)) {
        document.getElementById("plan1").classList.remove("holder");
        document.getElementById("plan1").classList.add("past");
        document.getElementById("plan2").classList.remove("holder");
        document.getElementById("plan2").classList.add("present");
        document.getElementById("plan3").classList.remove("holder");
        document.getElementById("plan3").classList.add("future");
        document.getElementById("plan4").classList.remove("holder");
        document.getElementById("plan4").classList.add("future");
        document.getElementById("plan5").classList.remove("holder");
        document.getElementById("plan5").classList.add("future");
        document.getElementById("plan6").classList.remove("holder");
        document.getElementById("plan6").classList.add("future");
        document.getElementById("plan7").classList.remove("holder");
        document.getElementById("plan7").classList.add("future");
        document.getElementById("plan8").classList.remove("holder");
        document.getElementById("plan8").classList.add("future");
        document.getElementById("plan9").classList.remove("holder");
        document.getElementById("plan9").classList.add("future");
    }//----------------------------------------------------------------
    if ("11am" == formatAMPM(new Date)) {
        document.getElementById("plan1").classList.remove("holder");
        document.getElementById("plan1").classList.add("past");
        document.getElementById("plan2").classList.remove("holder");
        document.getElementById("plan2").classList.add("past");
        document.getElementById("plan3").classList.remove("holder");
        document.getElementById("plan3").classList.add("present");
        document.getElementById("plan4").classList.remove("holder");
        document.getElementById("plan4").classList.add("future");
        document.getElementById("plan5").classList.remove("holder");
        document.getElementById("plan5").classList.add("future");
        document.getElementById("plan6").classList.remove("holder");
        document.getElementById("plan6").classList.add("future");
        document.getElementById("plan7").classList.remove("holder");
        document.getElementById("plan7").classList.add("future");
        document.getElementById("plan8").classList.remove("holder");
        document.getElementById("plan8").classList.add("future");
        document.getElementById("plan9").classList.remove("holder");
        document.getElementById("plan9").classList.add("future");
    }//----------------------------------------------------------------
    if ("12pm" == formatAMPM(new Date)) {
    document.getElementById("plan1").classList.remove("holder");
    document.getElementById("plan1").classList.add("past");
    document.getElementById("plan2").classList.remove("holder");
    document.getElementById("plan2").classList.add("past");
    document.getElementById("plan3").classList.remove("holder");
    document.getElementById("plan3").classList.add("past");
    document.getElementById("plan4").classList.remove("holder");
    document.getElementById("plan4").classList.add("present");
    document.getElementById("plan5").classList.remove("holder");
    document.getElementById("plan5").classList.add("future");
    document.getElementById("plan6").classList.remove("holder");
    document.getElementById("plan6").classList.add("future");
    document.getElementById("plan7").classList.remove("holder");
    document.getElementById("plan7").classList.add("future");
    document.getElementById("plan8").classList.remove("holder");
    document.getElementById("plan8").classList.add("future");
    document.getElementById("plan9").classList.remove("holder");
    document.getElementById("plan9").classList.add("future");
    }//----------------------------------------------------------------
    if ("1pm" == formatAMPM(new Date)) {
        document.getElementById("plan1").classList.remove("holder");
        document.getElementById("plan1").classList.add("past");
        document.getElementById("plan2").classList.remove("holder");
        document.getElementById("plan2").classList.add("past");
        document.getElementById("plan3").classList.remove("holder");
        document.getElementById("plan3").classList.add("past");
        document.getElementById("plan4").classList.remove("holder");
        document.getElementById("plan4").classList.add("past");
        document.getElementById("plan5").classList.remove("holder");
        document.getElementById("plan5").classList.add("present");
        document.getElementById("plan6").classList.remove("holder");
        document.getElementById("plan6").classList.add("future");
        document.getElementById("plan7").classList.remove("holder");
        document.getElementById("plan7").classList.add("future");
        document.getElementById("plan8").classList.remove("holder");
        document.getElementById("plan8").classList.add("future");
        document.getElementById("plan9").classList.remove("holder");
        document.getElementById("plan9").classList.add("future");
    }//----------------------------------------------------------------
    if ("2pm" == formatAMPM(new Date)) {
        document.getElementById("plan1").classList.remove("holder");
        document.getElementById("plan1").classList.add("past");
        document.getElementById("plan2").classList.remove("holder");
        document.getElementById("plan2").classList.add("past");
        document.getElementById("plan3").classList.remove("holder");
        document.getElementById("plan3").classList.add("past");
        document.getElementById("plan4").classList.remove("holder");
        document.getElementById("plan4").classList.add("past");
        document.getElementById("plan5").classList.remove("holder");
        document.getElementById("plan5").classList.add("past");
        document.getElementById("plan6").classList.remove("holder");
        document.getElementById("plan6").classList.add("present");
        document.getElementById("plan7").classList.remove("holder");
        document.getElementById("plan7").classList.add("future");
        document.getElementById("plan8").classList.remove("holder");
        document.getElementById("plan8").classList.add("future");
        document.getElementById("plan9").classList.remove("holder");
        document.getElementById("plan9").classList.add("future");
    }//----------------------------------------------------------------
    if ("3pm" == formatAMPM(new Date)) {
        document.getElementById("plan1").classList.remove("holder");
        document.getElementById("plan1").classList.add("past");
        document.getElementById("plan2").classList.remove("holder");
        document.getElementById("plan2").classList.add("past");
        document.getElementById("plan3").classList.remove("holder");
        document.getElementById("plan3").classList.add("past");
        document.getElementById("plan4").classList.remove("holder");
        document.getElementById("plan4").classList.add("past");
        document.getElementById("plan5").classList.remove("holder");
        document.getElementById("plan5").classList.add("past");
        document.getElementById("plan6").classList.remove("holder");
        document.getElementById("plan6").classList.add("past");
        document.getElementById("plan7").classList.remove("holder");
        document.getElementById("plan7").classList.add("present");
        document.getElementById("plan8").classList.remove("holder");
        document.getElementById("plan8").classList.add("future");
        document.getElementById("plan9").classList.remove("holder");
        document.getElementById("plan9").classList.add("future");
    }//----------------------------------------------------------------
    if ("4pm" == formatAMPM(new Date)) {
        document.getElementById("plan1").classList.remove("holder");
        document.getElementById("plan1").classList.add("past");
        document.getElementById("plan2").classList.remove("holder");
        document.getElementById("plan2").classList.add("past");
        document.getElementById("plan3").classList.remove("holder");
        document.getElementById("plan3").classList.add("past");
        document.getElementById("plan4").classList.remove("holder");
        document.getElementById("plan4").classList.add("past");
        document.getElementById("plan5").classList.remove("holder");
        document.getElementById("plan5").classList.add("past");
        document.getElementById("plan6").classList.remove("holder");
        document.getElementById("plan6").classList.add("past");
        document.getElementById("plan7").classList.remove("holder");
        document.getElementById("plan7").classList.add("past");
        document.getElementById("plan8").classList.remove("holder");
        document.getElementById("plan8").classList.add("present");
        document.getElementById("plan9").classList.remove("holder");
        document.getElementById("plan9").classList.add("future");
    }//----------------------------------------------------------------
    if ("5pm" == formatAMPM(new Date)) {
        document.getElementById("plan1").classList.remove("holder");
        document.getElementById("plan1").classList.add("past");
        document.getElementById("plan2").classList.remove("holder");
        document.getElementById("plan2").classList.add("past");
        document.getElementById("plan3").classList.remove("holder");
        document.getElementById("plan3").classList.add("past");
        document.getElementById("plan4").classList.remove("holder");
        document.getElementById("plan4").classList.add("past");
        document.getElementById("plan5").classList.remove("holder");
        document.getElementById("plan5").classList.add("past");
        document.getElementById("plan6").classList.remove("holder");
        document.getElementById("plan6").classList.add("past");
        document.getElementById("plan7").classList.remove("holder");
        document.getElementById("plan7").classList.add("past");
        document.getElementById("plan8").classList.remove("holder");
        document.getElementById("plan8").classList.add("past");
        document.getElementById("plan9").classList.remove("holder");
        document.getElementById("plan9").classList.add("present");
    }//----------------------------------------------------------------
    else {
        document.getElementById("plan1").classList.remove("holder");
        document.getElementById("plan1").classList.add("past");
        document.getElementById("plan2").classList.remove("holder");
        document.getElementById("plan2").classList.add("past");
        document.getElementById("plan3").classList.remove("holder");
        document.getElementById("plan3").classList.add("past");
        document.getElementById("plan4").classList.remove("holder");
        document.getElementById("plan4").classList.add("past");
        document.getElementById("plan5").classList.remove("holder");
        document.getElementById("plan5").classList.add("past");
        document.getElementById("plan6").classList.remove("holder");
        document.getElementById("plan6").classList.add("past");
        document.getElementById("plan7").classList.remove("holder");
        document.getElementById("plan7").classList.add("past");
        document.getElementById("plan8").classList.remove("holder");
        document.getElementById("plan8").classList.add("past");
        document.getElementById("plan9").classList.remove("holder");
        document.getElementById("plan9").classList.add("past");
    };
//------------------------------loads info
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        
        $(this).val(value);
        
    }); 

};













// $('.holder').on('click', function(){
//     $(this).toggleClass('active');
// });

// $(function() {
//     $('.expander').on('click', function() {
//       $('#TableData').toggle();
//     });

//     $('.holder').on('click', function() {
//         $(this).toggleClass('active');
//     });
//   });
//   $('.holder li').on('click',function(){
//     $('.main li.active').removeClass('active')
//     $(this).addClass('active');
//   });
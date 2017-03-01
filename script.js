/* global $ */
/* global Code2College_Students */
/* global Code2College_Educators */

$(document).ready(function(){

 var Code2College_Students = ["Richard", "Tim", "Adrian", "Jorge", "Thomas", "Basil", "Abi", "Isaac", "Spencer", "Evila", "Kaci", "Rodrigo", "Jerardo", "Elizabeth", "Pamela", "Alexis"];

$("#studentButton").click(function(){
    var num = Math.floor(Math.random()*Code2College_Students.length)
    $("#studentDisplay").html(Code2College_Students[num]);
    
    //console.log(Code2College_Students[num])
    
});

$("#teacherButton").click(function(){
    var Code2College_Educators = ["Trey", "Samuel", "Sam", "Matt"];
    $("#teacherDisplay").html(Code2College_Educators[Math.floor(Math.random()*Code2College_Educators.length)]);
    
    //console.log(Math.floor(Math.random()*Code2College_Educators.length))
    
});

$("#addButton").click(function(){
    var name = $("#name").val();
    if(name.length === 0){
        console.log("Nothing")
    }
    else{
        Code2College_Students[Code2College_Students.length] = name;
    }
    
    console.log(Code2College_Students[Code2College_Students.length-1]);
    
});


});

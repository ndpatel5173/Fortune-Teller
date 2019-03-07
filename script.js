$("button").click(function(){
var jk =parseInt($(".family").val());
var jk2=parseInt($(".birthyear").val());
var jk3=parseInt($(".favnum").val());
console.log(jk*jk2*jk3);
var calc;
calc= jk*jk2*jk3;
$(".result").text("In 2094,you will have $"+calc);
});

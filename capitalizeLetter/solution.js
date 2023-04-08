/*---------------------------------------------------------*/
/* Solution to Capitalizing the first letter of the string */

 function capitalize(str){
    return alert(str.charAt(0).toUpperCase()+str.slice(1)); //Gets the first string character to uppercase
}
capitalize(window.prompt("Enter a string")); 

/* The Arrow function version of the above exercise */
/*let capitalize=(str)=>alert(str.charAt(0).toUpperCase()+str.slice(1)); 
capitalize(window.prompt("Enter a String"));*/
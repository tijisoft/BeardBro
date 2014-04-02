/*
 * 
 * @param {type} formName
 * @param {type} fieldName
 * @returns {Boolean}
 * this function will check if a value of a field on a given form is empty or not
 */


function isFieldEmpty(formName,fieldName){
    var x=document.forms[formName][fieldName].value;
    var isEmpty;
    
    if((x==null) || (x=="")){
        isEmpty=true;
    }else{
        isEmpty=false;
    }
    return isEmpty;
}
/*
 * this fucntion will split the valuo of a field
 */
function splitField(formName,fieldName){
   var dom= document.forms[formName][fieldName].value.toString().trim();
   return dom.split("").join(" ").toString();
}

/*
 * This function will split and reverse a string passed by param.
 */
function reverse(formName,fieldName){
    var dom= document.forms[formName][fieldName].value.toString().trim();
    return dom.split("").reverse().join("");
}


function getAsciiOperation(formName,fieldName){
    var ascii= document.forms[formName][fieldName].value.toString();
    var asciiArray = new Array();
    
    //Store each ascii value in asciiArray
    for(var i=0;i<ascii.length;i++){
        asciiArray[i]=ascii.charCodeAt(i);
    }
    
    formatAsciiSum(asciiArray);
    
    

}

function formatAsciiSum(Array){
    var acumString = new String();
    
    for(var i=0;i<Array.length;i++){
     acumString = acumString.concat(Array[i]);
     
    }
      return acumString;
    
}

function sumArray(Array){
    var acum=0;
  
    for(var x=0;x<Array.length;x++){
     acum=acum+Array[x];
  }
    return acum;
}


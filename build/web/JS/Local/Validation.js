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
   var e= document.forms[formName][fieldName].value.toString(); 
   var l = new String(e);
   var m = new Array(); 
    for(var i = 0; i< e.length;i++){
      m[i]=l[i]+" ";
   }
   return m;
}

/*
 * This function will split and reverse a string passed by param.
 */
function reverse(string){
    return string.split("").reverse().join(" ");
}


// Assignment 01:
// create a HTML form using DOM
// firstname,middlename,lastname,phonenumber

var firstname=createlabels("label","for","name","Firstname");
var br=createlinebreak("br");
var input=createinput("input","type","Firstname","id","name");
var br1=createlinebreak("br");

var middlename=createlabels("label","for","name","Middlename");
var br2=createlinebreak("br");
var passinput=createinput("input","type","Middlename","id","name");
var br3=createlinebreak("br");

var lastname=createlabels("label","for","name","Lastname");
var br4=createlinebreak("br");
var passinput1=createinput("input","type","Lastname","id","name");
var br5=createlinebreak("br");

var phonenumber=createlabels("label","for","num","Phonenumber");
var br6=createlinebreak("br");
var passinput2=createinput("input","type","Phonenumber","id","num");
var br7=createlinebreak("br");

document.body.append(firstname,br,input,br1,middlename,br2,passinput,br3,lastname,br4,passinput1,br5,phonenumber,br6,passinput2,br7);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.innerHTML=content;
    return ele;
}
function createlinebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
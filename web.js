"use strict";
const tablinks = document.querySelector(".tab-links");
const tabcontent  = document.querySelector(".tab-contents");

/*
for(tablink of tablinks){
tablink.classList.remove("active-link");
for(tablinks of tablinks){
    for(tabcontent of tabcontents)
    for(tabcontent of tabcontents){
        
    }
}
}
*/
const tabname = document.getElementById(tabname);

function opentab (tabname) {
    tablinks.classList.remove("active-link");
    console.log("i am sarah");
    
    tabcontent.classList.remove("active-tab");
    console.log("i am not");
    
};
Event.currentTarget.classList.add("active-link");
console.log("i am ");


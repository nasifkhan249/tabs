const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const tab1=document.getElementById("tab1");
const tab2=document.getElementById("tab2");
const tab3=document.getElementById("tab3");


btn1.addEventListener("click",()=>{
    btn1.classList.add("active");
    tab1.classList.add("active")
    btn2.classList.remove("active");
    tab2.classList.remove("active");
    btn3.classList.remove("active");
    tab3.classList.remove("active");
});

btn2.addEventListener("click",()=>{
    btn2.classList.add("active");
    tab2.classList.add("active");
    btn1.classList.remove("active");
    tab1.classList.remove("active");
    btn3.classList.remove("active");
    tab3.classList.remove("active");
});

btn3.addEventListener("click",()=>{
    btn3.classList.add("active");
    tab3.classList.add("active")
    btn1.classList.remove("active");
    tab1.classList.remove("active");
    btn2.classList.remove("active");
    tab2.classList.remove("active")
})





const btn=document.querySelectorAll(".tab-button");
// console.log(btn);
const content=document.querySelectorAll(".tab-content");
// console.log(content);





//without using any data-bs in html and only use same class name then doing this way
btn.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        
        //firstly this section remove active class from each button section 
        btn.forEach(el=>{
            // console.log(el);
            el.classList.remove("active");
        })

        //secondly this section remove active class from each content section 
        content.forEach(el=>{
            el.classList.remove("active")
            // console.log("click");
        })

        //when i clicked a button then active class show of that button which i clicked
        element.classList.add("active");
        //when i clicked a button then active class show of that button which i clicked and then the specific index number apply the active class that button which i clicked.
        content[index].classList.add("active");
    })
})


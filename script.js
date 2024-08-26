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

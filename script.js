const btn=document.querySelectorAll(".tab-button");
// console.log(btn);
const content=document.querySelectorAll(".tab-content");
// console.log(content);





//using data-bs in html and use same class name then doing this way
btn.forEach((element)=>{
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
        
        const tabIndex=element.getAttribute("data-bs");
        // console.log(tabIndex);
        document.getElementById(tabIndex).classList.add("active")
        
    })
})

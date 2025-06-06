document.addEventListener("DOMContentLoaded",()=>{
    let text=document.getElementById("text");
    let btn=document.getElementById("btn");
    let ullist=document.getElementById("unorderedList");
    let date=document.getElementById("date");
    let select=document.getElementById("priority")

    let List= JSON.parse(localStorage.getItem("todolist")) || [];

    List.forEach(item=>addtodom(item));

    btn.addEventListener("click",()=>{
        if(text.value.trim() === "") return;
        const obj={
            id:Date.now(),
            text:text.value.trim(),
            date:date.value,
            select:select.value
        }
        List.push(obj); 
        save(List); 
        addtodom(obj) ;
        
        text.value="";
        date.value="";
        select.value="";

    })

    function save(List){
        localStorage.setItem("todolist",JSON.stringify(List));
    }
    function addtodom(obj){
        let li=document.createElement("li");
        let span=document.createElement("span");
        let span2=document.createElement("span");
        li.classList.add("bg-[#414141]","md:mx-10","mx-3","md:my-5","md:text-2xl","text-xl","md:w-200","w-70","h-10" ,"md:h-20", "flex","justify-between","md:px-5","md:py-5", "px-2","py-1","rounded-lg","md:font-bold");
        span.classList.add("flex",);
        span.textContent=obj.text;
        span2.textContent=obj.date;
        let del=document.createElement("button");
        del.classList.add("bg-[#972929]","md:w-25","md:h-12","md:px-3","rounded-lg","text-md","p-0.3","px-1.5","h-8");
        del.textContent="Delete";
        

        del.addEventListener("click",()=>{
            List=List.filter(item=>item.id!==obj.id);
            save(List);
            ullist.removeChild(li);
        })
        
        li.appendChild(span);
        li.appendChild(span2);
        li.appendChild(del);
        ullist.appendChild(li);


        

    }

    
})
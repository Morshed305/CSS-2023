// const headers = document.querySelectorAll(".headers")[0];
// const headerschildren = headers.children;

// headerschildren.map( child =>{


// }




// )



const  headers = document.querySelectorAll(".headers")[0];
const  headersChildren =  headers.children;
const  headersArr = Array.from( headersChildren);

const detels = document.querySelectorAll(".detels")[0];
const detelsChildren = detels.children;
const detelsArr = Array.from(detelsChildren);

 headersArr.map(child => {
    child.addEventListener("click", () => {
        let ind =  headersArr.indexOf(child);

         headersArr.map((c, i) => {
            if (i === ind) {
                c.classList.add("active");
                detelsArr[i].classList.remove("d-none");
            } else {
                c.classList.remove("active");
                detelsArr[i].classList.add("d-none");
            }
        });
    });
})

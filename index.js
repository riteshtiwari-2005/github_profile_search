let input=document.getElementById("fname");
let submit=document.getElementById("btn");
let card=document.getElementById("card")
let main=document.getElementById("main")
let error=document.getElementById("error")
submit.addEventListener("click",()=>{
    let url=`https://api.github.com/users/${input.value}`
    console.log(input.value);
    async function git_call(url) {
      let res=await fetch(url)
      let data=await res.json()
      if(data.message=="Not Found")
      {
        error.style.display="flex";
        card.innerHTML='';
    }else{
        error.style.display='none'
      card.innerHTML=`
           <img src="${data.avatar_url}" alt="Placeholder Image">
            <div class="card-body">
                <h5 class="name" style="text-align: center;">${data.name}</h5>
                <p class="follower" style="text-align: center;">${data.followers}</p>
                <p class="followling" style="text-align: center;">${data.following}</p>
            </div>
      `
main.style.display="flex";
      }

    }

    git_call(url);
})

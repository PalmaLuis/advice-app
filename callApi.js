
// document.addEventListener('DOMContentLoaded',()=>{
//   callAPI()
// })

const PrintContent =  (info) =>{
  document.getElementById("title").textContent=`ADVICE #${info.id}`
  document.getElementById("advice").textContent=`"${info.advice}"`
}

const callAPI = async()=>{
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    const info={
      id:data.slip.id,
      advice:data.slip.advice,
    }
    console.log(data)
    PrintContent(info)
  } catch (error) {
    console.log(error)
  }
}
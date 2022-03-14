const PrintContent =  (info) =>{
  document.getElementById("title-lbl").textContent=`ADVICE #${info.id}`
  document.getElementById("advice-lbl").textContent=`"${info.advice}"`
}

const callAPI = async()=>{
  let id = Math.floor(Math.random() * (224 - 1) + 1);
    try {
    const res = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const data = await res.json();
    const info={
      id:data.slip.id,
      advice:data.slip.advice,
    }
    PrintContent(info)
    console.log(data)
    console.log(id)
  } catch (error) {
    console.log(error)
  }
}
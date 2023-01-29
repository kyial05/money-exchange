let transSumEl = document.getElementById("currency")
let mountEl = document.getElementById("mount")
let sumEl = document.getElementById("sum")
let resultEl  = document.getElementById("result")

const sumCurrent = ()=>{
    let transSum = parseFloat(transSumEl.value)
    let mount = parseFloat(mountEl.value)
    let res = transSum*mount

    resultEl.innerHTML = "Sum: " + res.toFixed(2)
}

// parseFloat - превращает а number

sumEl.addEventListener("click", sumCurrent)
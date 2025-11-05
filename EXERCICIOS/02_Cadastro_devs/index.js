const form = document.getElementById("devsForm")
let addTecInfoBtn = document.getElementById("addTecInfoBtn")
let tecContainer = document.getElementById("tecContainer")
const devs = []

addTecInfoBtn.addEventListener("click", () => {
  const newTecDiv = document.createElement("div")
  newTecDiv.classList.add("tecRegistersDiv")
  
  const labelTec = document.createElement("label")
  labelTec.innerText = "Nome Tecnologia:"

  const inputTec = document.createElement("input")
  inputTec.type = "text"
  inputTec.name = "tecName"

  const labelExp = document.createElement("label")
  labelExp.innerText = "Tempo de Experiência:"

  const btnDeleteTecFields = document.createElement("button")
  btnDeleteTecFields.textContent = "Remover"
  btnDeleteTecFields.type = "button"
  btnDeleteTecFields.addEventListener("click", function () {
    this.parentElement.remove()
  })

  const expOptions = [
    { value: "0 - 2 anos", text: "0 - 2 anos" },
    { value: "3 - 4 anos", text: "3 - 4 anos" },
    { value: "5+ anos", text: "5+ anos" }
  ]

  const radios = expOptions.map((opt) => {
    const radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "experience-" + Date.now()
    radio.value = opt.value

    const label = document.createElement("label")
    label.innerText = opt.text

    return [radio, label, document.createElement("br")]
  })

  newTecDiv.appendChild(labelTec)
  newTecDiv.appendChild(document.createElement("br"))
  newTecDiv.appendChild(inputTec)
  newTecDiv.appendChild(document.createElement("br"))
  newTecDiv.appendChild(document.createElement("br"))
  newTecDiv.appendChild(labelExp)
  newTecDiv.appendChild(document.createElement("br"))

  radios.forEach(([radio, label, br]) => {
    newTecDiv.appendChild(radio)
    newTecDiv.appendChild(label)
    newTecDiv.appendChild(br)
  })

  newTecDiv.appendChild(btnDeleteTecFields)
  newTecDiv.appendChild(document.createElement("br"))

  tecContainer.appendChild(newTecDiv)
})

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const devName = document.getElementById("devName").value;

  const tecDivs = document.querySelectorAll(".tecRegistersDiv");
  let tecs = [];

  tecDivs.forEach(div => {
    const tecName = div.querySelector("input[type='text']").value;
    const experience = div.querySelector("input[type='radio']:checked")?.value;
    tecs.push({ tecName, experience });
  });

  // Salvar no array
  const newDev = {
    name: devName,
    technologies: tecs
  }

  devs.push(newDev)

  console.log("DEV CADASTRADOS:", devs)

  alert("Dev cadastrado com sucesso!")

  const ListInfoDiv = document.getElementById("devList")
  const ListInfo = document.createElement("p")
  ListInfo.innerText = devName + " - Tecnologias: " +
    tecs.map(t => `${t.tecName} (${t.experience || "sem experiência"})`).join(", ")

  ListInfoDiv.appendChild(ListInfo)

  document.getElementById("devName").value = ""
  tecContainer.innerHTML = ""
})

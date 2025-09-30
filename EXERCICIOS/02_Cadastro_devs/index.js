const form = document.getElementById("devsForm")
let addTecInfoBtn = document.getElementById("addTecInfoBtn")
let tecContainer = document.getElementById("tecContainer")

addTecInfoBtn.addEventListener("click", () => {
  // Criar um wrapper para cada tecnologia
  const newTecDiv = document.createElement("div")
  newTecDiv.classList.add("tecRegistersDiv")
  
  // Criar campo de nome da tecnologia
  const labelTec = document.createElement("label")
  labelTec.innerText = "Nome Tecnologia:"
  const inputTec = document.createElement("input")
  inputTec.type = "text"
  inputTec.name = "tecName"

  // Criar campos de experiência
  const labelExp = document.createElement("label")
  labelExp.innerText = "Tempo de Experiência:"

  const expOptions = [
    { value: "0 - 2 anos", text: "0 - 2 anos" },
    { value: "3 - 4 anos", text: "3 - 4 anos" },
    { value: "5+ anos", text: "5+ anos" }
  ]

  const radios = expOptions.map((opt, index) => {
    const radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "experience-" + Date.now() // nome único por tecnologia
    radio.value = opt.value

    const label = document.createElement("label")
    label.innerText = opt.text

    return [radio, label, document.createElement("br")]
  })

  // Montar a estrutura no DOM
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

  // Mostrar alerta
  alert(
    "Dev Cadastrado com Sucesso!!" +
    "\nNome do Dev: " + devName +
    "\nTecnologias: " + JSON.stringify(tecs, null, 2)
  );

  // Criar o item na lista
  const ListInfoDiv = document.getElementById("devList");
  const ListInfo = document.createElement("p");
  ListInfo.innerText = devName + " - Tecnologias: " +
    tecs.map(t => `${t.tecName} (${t.experience || "sem experiência"})`).join(", ");

  ListInfoDiv.appendChild(ListInfo); // <-- aqui

  // limpar form
  document.getElementById("devName").value = "";
  document.getElementById("tecContainer").innerHTML = "";
});


let tema = "claro"

const botaoTema = document.querySelector(".tema button")
botaoTema.addEventListener("click", trocarTema)

function trocarTema() {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema")
    }
    
    const body = document.querySelector("body")  

    if (tema === "claro") {
        body.classList.add("escuro")
        localStorage.setItem("tema", "escuro")
        botaoTema
    } else{
        body.classList.remove("escuro")
        localStorage.setItem("tema", "claro")
    }
}

function verificarTema() {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") {
        body.classList.add("escuro")
    }
}

verificarTema()
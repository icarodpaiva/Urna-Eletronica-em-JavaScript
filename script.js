const seuVotoPara = document.querySelector('.d-1-1 span')
const cargo = document.querySelector('.d-1-2 span')
const numeros = document.querySelector('.d-1-3')
const descricao = document.querySelector('.d-1-4')
const lateral = document.querySelector('.d-1--right')
const aviso = document.querySelector('.d-2')

let etapaAtual = 0
let numero = ''

const comecarEtapa = () => {
  let etapa = etapas[etapaAtual]

  let numeroHtml = ''

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>'
    } else {
      numeroHtml += '<div class="numero"></div>'
    }
  }

  seuVotoPara.style.display = 'none'
  cargo.innerHTML = etapa.titulo
  numeros.innerHTML = numeroHtml
  descricao.innerHTML = ''
  lateral.innerHTML = ''
  aviso.style.display = 'none'
}

const atualizaInterface = () => {
  let etapa = etapas[etapaAtual]
  let candidato = etapa.candidatos.filter(item => {
    if (item.numero === numero) {
      return true
    } else {
      return false
    }
  })

  if (candidato.length > 0) {
    candidato = candidato[0]
    seuVotoPara.style.display = 'block'
    descricao.innerHTML = `Nome: ${candidato.nome}<br/> Partido: ${candidato.partido}`
    aviso.style.display = 'block'

    let fotosHtml = ''
    for (let i in candidato.fotos) {
      fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`
    }

    lateral.innerHTML = fotosHtml
  } else {
    seuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
  }
}

const clicou = n => {
  let elNumero = document.querySelector('.numero.pisca')
  if (elNumero !== null) {
    elNumero.innerHTML = n
    numero = `${numero}${n}`

    elNumero.classList.remove('pisca')
    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add('pisca')
    } else {
      atualizaInterface()
    }
  }
}

const branco = () => alert('branco')

const corrige = () => alert('corrige')

const confirma = () => alert('confirma')

comecarEtapa()

function tocaSom(seletorAudio){

	const elemento = document.querySelector(seletorAudio);


	if(elemento != null && elemento.localName === 'audio') {
			elemento.play();
	}
	else {
		//alerta de Elemento não encontrado.
		console.log('Elemento não encontrado ou seletor inválido.')
	}
}


const keyList = document.querySelectorAll('.tecla');




for (let contador = 0; contador < keyList.length; contador = contador+1) {

	const tecla = keyList[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`; 

	tecla.onclick = function (){
		tocaSom(idAudio);
	}
	

	tecla.onkeydown = function(event) {

		if (event.code === 'Enter' || event.code ==='Space') {
			tecla.classList.add('ativa');
		}

	}

	tecla.onkeyup = function() {
		tecla.classList.remove('ativa')
	}


}	
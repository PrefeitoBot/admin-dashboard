$(document).ready(function(){
	$("#enviar").click(function(){
		html = '';
		var sexo = $('input[name="sex"]:checked').val();
		var etnia = $('input[name="etnia"]:checked').val();
		var mensagem = $('input[name="message"]').val();
		var idade_min = $('input[name="idade_min"]').val();
		var idade_max = $('input[name="idade_max"]').val();
		
		if(sexo)
			html += 'Essa mensagem será destinada a pessoas do sexo <strong>'+sexo+'</strong><br>';
		if(etnia) {
			html += 'Pertencentes ao(s) grupo(s) étnico(s) <strong>';
			$('input[name="etnia"]:checked').each(function(){
				html+= this.value + ', ';
			});
			html+= '</strong>';
		}
		if(idade_min!='') {
			html+= '<br>Com idade mínima de <strong>' + idade_min + ' anos</strong>';
		}
		else if(idade_max != '') {
			html+= '<br>Com idade máxima de <strong>' + idade_max + ' anos</strong><br>';
		}
		if (idade_max!= '' && idade_min != '' && idade_max >= idade_min) {
			html+= ' e máxima de <strong>' + idade_max + ' anos</strong><br>';
		}
		if(mensagem!= '') {
			html += '<br><strong>Mensagem</strong><br>'+mensagem;
		}
		$("#modalContent").html(html);
	});
	$("#btnConfirmar").click(function(){
		$("#broadForm").submit();
	});
});
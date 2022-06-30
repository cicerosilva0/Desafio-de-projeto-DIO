SalvarFormulario = {
    Salvar: function () {
        var contQuestionario = 1;
        $("div[id*='dvPrev-']").each(function () {
            var idQuestionario = $(this).attr("id");
            var questionario = {
                tituloQuest: $("#txaTitulo").val(),
                subTituloQuest: $("#txaSubTitulo").val(),
                tipousado: $("#" + idQuestionario + " #dvHead").attr("tipousado")
            }
            contQuestionario++;
        })

        var questoes = [];
        contQuestionario = 1;
        $("div[id*='dvQuestao-']").each(function () {

            var id = $(this).attr("id");
            var div = $("#" + id + "");
            var html = div[ 0 ].outerHTML;
            var obrigatorio = $("#" + id + " #chbObrigatorio").is(":checked");
            questoes.push({
                numeroQuestao: contQuestionario,
                htmQuestao: html,
                obrigario: obrigatorio
            });
            contQuestionario++;

            $.ajax({
                type: "POST",
                url: '/Questionario/Cadastro',
                data: {

                },

            });
        });
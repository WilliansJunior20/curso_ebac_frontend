$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<li>${nomeTarefa}</li>`);
        $(novaTarefa).appendTo('ul');

            $(novaTarefa).click(function() {
                $(this).addClass('riscado')
            })
            $('#nome-tarefa').val('');
        })
    })
$(document).ready(function() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeDaNovaTarefa = $('#nome-da-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`
            <div class="nova-tarefa">
                <p>
                    ${nomeDaNovaTarefa}
                </p>
            </div>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nome-da-tarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('marcado');
    });
})
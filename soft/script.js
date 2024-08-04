$(document).ready(function() {
    $('#todo-form').on('submit', function(e) {
        e.preventDefault();
        var newTodo = $('#new-todo').val();
        if (newTodo!== '') {
            $('#todo-list').append('<li><input type="checkbox"><label>' + newTodo + '</label></li>');
            $('#new-todo').val('');
        }
    });
});
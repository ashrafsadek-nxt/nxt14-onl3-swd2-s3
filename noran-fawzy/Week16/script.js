$(function() {
    function createPop(text) {
    const $el = $('<div class="pop"></div>').text(text);

    $('#stage').append($el);

    setTimeout(() => $el.addClass('show'), 20);

    $el.on('click', function() {
    $el.removeClass('show');
    setTimeout(() => $el.remove(), 400);
    });
}

$('#showBtn').on('click', function() {
    createPop('  Hello World ');
});
});
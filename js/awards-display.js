// set awards text on mouse over and move awards at the bottom of profile info
$(function() {
    $('.postprofile-info .label')
        .has('span img') // select award icons
        .each(function() {
            var $label = $(this);
            var $text = $($label[0].nextSibling);

            // set text on hover
            $label.attr('title', $text.text());
            // remove text
            $text.remove();
            // remove new line
            $label.next('br').remove();

            // move award at bottom of profile info
            var $container = $label.closest('.postprofile-info');
            $label.appendTo($container);
        });
});
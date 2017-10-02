$(function() {
    $('.block').has('.h3:contains("Who is online")').each(function() {
        var $block = $(this);
        var $header = $block.find('.h3').remove();
        var $footer = $block.find('.block-footer').remove();

        var rows = $block.html().split(/<br\s*\/?>/i);
        var registeredRow;
        var otherRows = [];
        
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (!row.trim()) // skip empty lines
                continue;

            if (row.indexOf('Registered Users') === 0) {
                registeredRow = row.replace('Registered', 'Online');
            } else {
                otherRows.push(row);
            }
        }

        $footer.append('<p><br>' + otherRows.join('<br>') + '</p>');
        $block.html('').append($header, registeredRow, $footer);
    });
});
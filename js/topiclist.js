// rearrange topic list
$(function() {
    // move last post column a bit right
    $('head').append('<style>.topiclist dd.lastpost { margin-left: 10%; width: 22% }</style>');

    $('.topiclist').each(function() {
        var $topicList = $(this);
        var $topicsColumn = $topicList.find('.topics');
        var $postsColumn = $topicList.find('.posts');
        var $viewsColumn = $topicList.find('.views');

        if ($viewsColumn.length) {
            // we're in the section view
            $firstColumn = $postsColumn;
            $secondColumn = $viewsColumn;
        } else {
            // we're in the general view
            $firstColumn = $topicsColumn;
            $secondColumn = $postsColumn;
        }
        
        // merge topic/posts columns
        $firstColumn.each(function(i) {
            $(this).append('<br>' + $secondColumn.eq(i).html() + '<br>');
        });

        // remove posts column
        $secondColumn.remove();
    });

    // change column header text
    $('.topiclist .header .topics').text('Threads/Posts');
    $('.topiclist .header .posts').text('Replies/Views');
});
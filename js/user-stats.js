// reorganize user statistics
$(function() {
    var $statsFields = $('.stats-field');
    if (!$statsFields.length)
        return;

    var $userStatsInfo = $statsFields.has('legend:contains("Information")');
    var $userStatsReputation = $statsFields.has('legend:contains("Reputation")');
    var $userStatsTopics = $statsFields.has('legend:contains("Topics")');
    var $userStatsPosts = $statsFields.has('legend:contains("Posts")');

    // remove unnecessary user info
    $userStatsInfo.find('li').each(function() {
        var $row = $(this);
        var labelText = $row.find('label').text(); 
        if (labelText.indexOf('Number of friends') === 0)
            $row.remove();
        else if (labelText.indexOf ('Private messages') === 0)
            $row.remove();
    });

    // move reputation field to user info
    $userStatsReputation.find('li').each(function() {
        var $row = $(this);
        var labelText = $row.find('label').text(); 
        if (labelText.indexOf('Reputation') === 0) {
            $userStatsInfo.find('li:first').before($row);
            return false; // to break the loop
        }
    });

    // change "topic" to "thread"
    $userStatsTopics.find('legend').text('Threads');
    $userStatsTopics.find('li').each(function() {
        var $row = $(this);
        var labelText = $row.find('label').text(); 
        if (labelText.indexOf('Latest topic') === 0) {
            $row.remove();
        } else {
            $row.html(
                $row.html()
                    .replace(/\bTopic(s)?\b/g, 'Thread$1')
                    .replace(/\btopic(s)?\b/g, 'thread$1')
                    .replace(/\([^\)]*\)/g, '')
            );
        }
    });

    $userStatsPosts.find('li').each(function() {
        var $row = $(this);
        var labelText = $row.find('label').text(); 
        if (labelText.indexOf('Latest post') === 0)
            $row.remove();
    });

    // move user info as first fieldset
    $userStatsReputation.before($userStatsInfo);

    // remove reputation fieldset
    $userStatsReputation.remove();
});
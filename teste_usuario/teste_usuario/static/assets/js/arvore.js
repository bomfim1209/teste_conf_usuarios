$(document).ready(function () {
    // create a tree
    $("#tree-data").jOrgChart({
        chartElement: $("#tree-view"),
        nodeClicked: nodeClicked
    });

    // lighting a node in the selection
    function nodeClicked(node, type) {
        node = node || $(this);
        $('.jOrgChart .selected').removeClass('selected');
        node.addClass('selected');
    }
});
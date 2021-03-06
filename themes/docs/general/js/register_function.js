/* Essential javascripts, used a lot. 
 * These should be placed inline
 * We have to be certain they are loaded before anything that uses them 
 */
// Deprecated, use jquery methods directly instead

// check for ie5 mac
var bugRiddenCrashPronePieceOfJunk = (
    navigator.userAgent.indexOf('MSIE 5') != -1
    &&
    navigator.userAgent.indexOf('Mac') != -1
)

// check for W3CDOM compatibility
var W3CDOM = (!bugRiddenCrashPronePieceOfJunk &&
               typeof document.getElementsByTagName != 'undefined' &&
               typeof document.createElement != 'undefined' );

// cross browser function for registering event handlers
var registerEventListener = function(elem, event, func) {
    jq(elem).bind(event, func);
}

// cross browser function for unregistering event handlers
var unRegisterEventListener = function(elem, event, func) {
    jq(elem).unbind(event, func);
}

var registerPloneFunction = jq;

function getContentArea() {
    // returns our content area element
    var node = jq('#region-content,#content');
    return node.length ? node[0] : null;
} 

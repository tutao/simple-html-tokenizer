/**
 * generated from https://raw.githubusercontent.com/w3c/html/26b5126f96f736f796b9e29718138919dd513744/entities.json
 * do not edit
 */
const HTML5NamedCharRefs = {
    // We don't need the complete named character reference because linkifyHtml
    // does not modify the escape sequences. We do need &nbsp; so that
    // whitespace is parsed properly. Other types of whitespace should already
    // be accounted for. &gt; &lt; and &quot; are also frequently relevant ones
    amp: "&",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "\""
};

export default HTML5NamedCharRefs;

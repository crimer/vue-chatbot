export default function highlightWords(words, query) {
  var iQuery = new RegExp(query, "ig");
  return words.toString().replace(iQuery, function(matchedTxt, a, b) {
    return "<span class='highlight'>" + matchedTxt + "</span>";
  });
}

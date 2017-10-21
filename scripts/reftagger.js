var refTagger = {
	settings: {
		bibleVersion: "menge"
	}
};
(function(d, t) {
	var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
	g.src = "//api.reftagger.com/v2/RefTagger.de.js";
	s.parentNode.insertBefore(g, s);
}(document, "script"));
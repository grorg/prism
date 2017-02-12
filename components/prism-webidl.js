Prism.languages.webidl = Prism.languages.extend('c', {
	'keyword': /\b(any|attribute|boolean|byte|ByteString|callback|const|deleter|dictionary|DOMString|double|enum|float|FrozenArray|getter|identifier|implements|Infinity|inherit|integer|interface|iterable|legacycaller|long|maplike|namespace|NaN|null|object|octet|optional|or|other|partial|readonly|required|sequence|serializer|setlike|setter|short|static|string|stringifier|typedef|unrestricted|unsigned|USVString|void)\b/,
	'boolean': /\b(true|false)\b/,
	'operator': /-|:|=|\?|\*|\//
});

Prism.languages.insertBefore('webidl', 'keyword', {
	'class-name': {
		pattern: /(class\s+)[a-z0-9_]+/i,
		lookbehind: true
	}
});

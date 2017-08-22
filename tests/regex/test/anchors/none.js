'use strict';

var q = symbolic q initial '';

if (/--.+=/.test(q)) {

	if (q.charAt(0) != '-') {
		throw 'Reachable';
	}

	if (q.charAt(q.length - 1) != '=') {
		throw 'Reachable';
	}

	throw 'Reachable';
}

throw 'Reachable';
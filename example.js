/* eslint-env node, es6 */
const obj = {
	key() {},
	example: 'Hello'
}

// Comments should have a new line above
const anonymousFunction = function ( param1, param2 ) {
	// Comments starting a block does not need it
	if ( param1 ) {
		return param1
	}

	// Comments should have a new line above
	return param2
}


anonymousFunction( obj, {
	key: 'string'
}) // No space after '}' in parens

namedFunction( obj )

function namedFunction({ key, example }) {
	if ( key ) {
		if ( example ) {
			if ( key === example ) {
				// No nesting lower than 4
				if ( key === null ) {
					return
				}
				return key
			}
		}
	}

	// No 'else return'
	return example
}

for ( const key in obj ) {
	if ( obj.hasOwnProperty( key ) ) {
		// No spaces around bracket when used as computed property
		delete obj[key]
	}
}

const array = [ 1, 2, 3, 4 ]

array.forEach( value => {
	console.log( value )
})

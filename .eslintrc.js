/* eslint-env node */
module.exports = {
	rules: {
		'no-dupe-keys': 'error',
		'no-negated-in-lhs': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unexpected-multiline': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		complexity: 'warn',
		'no-else-return': 'error',
		'no-labels': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new-wrappers': 'error',
		'no-return-assign': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-with': 'error',
		'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: true }],
		radix: [ 'error', 'as-needed' ],
		'wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: true }],
		yoda: 'error',
		'no-undef-init': 'error',
		'no-unused-vars': [ 'error', { ignoreRestSiblings: true }],
		'no-use-before-define': [ 'error', 'nofunc' ],
		'handle-callback-err': 'warn',
		'no-mixed-requires': [ 'error', {
			grouping: true,
			allowCall: true
		}],
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'brace-style': [ 'error', '1tbs', {
			allowSingleLine: false
		}],
		camelcase: [ 'error', {
			properties: 'always'
		}],
		'capitalized-comments': [ 'error', 'always', {
			ignorePattern: 'pragma|ignore',
			ignoreInlineComments: true,
			ignoreConsecutiveComments: true
		}],
		'comma-spacing': [ 'error', {
			before: false,
			after: true
		}],
		'comma-style': [ 'error', 'last' ],
		'eol-last': 'error',
		'func-call-spacing': [ 'error', 'never' ],
		'func-name-matching': 'error',
		'key-spacing': [ 'error', {
			beforeColon: false,
			afterColon: true
		}],
		'keyword-spacing': 'error',
		'max-depth': 'warn',
		'max-nested-callbacks': [ 'warn', 4 ],
		'max-params': [ 'warn', {
			max: 4
		}],
		'max-statements-per-line': 'error',
		'no-array-constructor': 'error',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-negated-condition': 'error',
		'no-new-object': 'error',
		'no-restricted-syntax': [ 'error', 'WithStatement' ],
		'no-whitespace-before-property': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'one-var-declaration-per-line': 'error',
		'operator-assignment': [ 'error', 'always' ],
		'operator-linebreak': [ 'error', 'after' ],
		'padded-blocks': [ 'error', 'never' ],
		'quote-props': [ 'error', 'as-needed' ],
		quotes: [ 'error', 'single', {
			allowTemplateLiterals: true
		}],
		'space-before-function-paren': [ 'error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always'
		}],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [ 'error', 'always', {
			line: {
				exceptions: [ '-' ]
			},
			block: {
				markers: [ '!' ],
				balanced: true
			}
		}],
		'template-tag-spacing': [ 'error', 'never' ],
		'arrow-parens': [ 'error', 'as-needed' ],
		'arrow-spacing': [ 'error', {
			before: true,
			after: true
		}],
		'constructor-super': 'error',
		'generator-star-spacing': [ 'error', 'both' ],
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'prefer-const': 'error',
		'no-var': 'error',
		'no-cond-assign': [
			'error',
			'except-parens'
		],
		curly: [
			'error',
			'multi-line',
			'consistent'
		],
		'object-curly-spacing': [
			'error',
			'always',
			{
				arraysInObjects: false,
				objectsInObjects: false
			}
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'array-bracket-spacing': [
			'error',
			'always',
			{
				arraysInArrays: false,
				objectsInArrays: false
			}
		],
		eqeqeq: [
			'error',
			'smart'
		],
		'no-nested-ternary': 'error',

		'no-caller': 'error',
		'no-undef': 'error',
		'dot-notation': [
			'error',
			{
				allowPattern: '^[a-z]+(_[a-z]+)+$'
			}
		],
		'max-len': [
			'warn',
			{
				code: 100,
				ignoreStrings: true,
				ignoreRegExpLiterals: true
			}
		],
		'comma-dangle': [
			'error',
			'never'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-in-parens': [
			'error',
			'always',
			{ exceptions: [ '{}' ]}
		],
		semi: [
			'error',
			'never'
		],
		'lines-around-comment': [
			'error',
			{
				beforeLineComment: true,
				allowBlockStart: true
			}
		],
		'no-spaced-func': 'error',
		'no-multiple-empty-lines': 2
	}
}

module.exports = {
	root : true,

	env     : { node : true },
	extends : ['plugin:vue/essential',
		'eslint:recommended',
		'plugin:vue/strongly-recommended'
	],

	rules : {
		'no-console'          : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger'         : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'quotes'                : ['error', 'single'],
		'semi'                  : ['error', 'never'],
		'space-before-blocks' : ['error', 'always'],
		'indent'                : [2, 'tab', { VariableDeclarator : 'first' }],
		'padded-blocks'       : ['error', 'never'],
		'brace-style'         : ['error', '1tbs'],
		'max-len'             : ['error', {
			code           : 120,
			tabWidth       : 4,
			ignoreComments : true
		}],
		'space-before-function-paren' : ['error', {
			anonymous  : 'always',
			named      : 'never',
			asyncArrow : 'always'
		}],
		'key-spacing' : ['error', {
			multiLine : {
				beforeColon : true,
				afterColon  : true,
				mode        : 'minimum'
			},
			align : {
				beforeColon : true,
				afterColon  : true,
				mode        : 'minimum'
			},
			singleLine : {
				beforeColon : true,
				afterColon  : true,
				mode        : 'minimum'
			}
		}],
		'quote-props'           : ['error', 'consistent'],
		'no-param-reassign'     : ['error', { props : false }],
		'no-multi-spaces'       : 'error',
		'prefer-const'          : 'error',
		'array-element-newline' : ['error', 'consistent'],
		'object-curly-spacing'  : ['error', 'always'],
		'object-curly-newline'  : ['error', {
			minProperties : 2,
			multiline     : true
		}],
		'object-property-newline' : 'error',
		'vue/html-indent'         : ['error', 'tab', {
			attribute                 : 1,
			baseIndent                : 1,
			closeBracket              : 0,
			alignAttributesVertically : true,
			ignores                   : []
		}],
		'vue/mustache-interpolation-spacing'   : ['error', 'always'],
		'vue/max-attributes-per-line'          : 'off',
		'vue/component-definition-name-casing' : 'off',
		'vue/html-closing-bracket-newline'     : ['error', {
			singleline : 'never',
			multiline  : 'never'
		}],
		'no-trailing-spaces'      : ['error'],
		'no-multiple-empty-lines' : ['error', {
			max    : 1,
			maxEOF : 0
		}],
		'array-bracket-spacing'          : ['error', 'never'],
		'space-in-parens'                : ['error', 'never'],
		'cypress/no-unnecessary-waiting' : 'off',
		'space-infix-ops'                : 'error',
		'comma-dangle'                   : ['error', 'never'],
		'no-alert'                       : 'error'
	}
}
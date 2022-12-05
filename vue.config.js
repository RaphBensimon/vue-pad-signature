module.exports = {
	css                   : { extract : false },
	chainWebpack          : config => config.optimization.minimize(false),
	transpileDependencies : false
}
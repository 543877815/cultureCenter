const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: "cheap-module-eval-source-map",

	devServer: {
		port: 8080,
		host: '0.0.0.0',
		inline:true,
		hot: true,
		contentBase: path.join(__dirname, "dist"),
		publicPath: '/',
		overlay:{
			errors:true,
		},
		// proxy: {
		//     '/news':{
         //        target: 'https://www.eunieunieuni.xin/news',
         //        secure: false,
         //    }
		// }
	},

	plugins:[

	new webpack.HotModuleReplacementPlugin(),

	new webpack.NoEmitOnErrorsPlugin(),

	new webpack.NamedModulesPlugin()

	]
}
var htmlwp = require('html-webpack-plugin');
module.exports = {
  entry:  __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "build.js"
  },
  module:{
    loaders:[
      {
        test: /\.css$/,  //打包 .css文件
        loader:'style-loader!css-loader'
      },
      {
        test: /\.scss$/,  //打包 .scss文件
        loader:'style-loader!css-loader!sass-loader'
      },
       {
        test: /\.less/,  //打包 .less文件
        loader:'style-loader!css-loader!less-loader'
      },
      {
          test: /\.(png|jpg|gif|ttf|svg)$/,
          loader:'url-loader?limit=20000'
      },
    
     {
      test:/\.vue$/,  
      loader:'vue-loader'  
     },
     {
        test: /\.js$/,  // .js文件
        loader:'babel-loader',
        exclude:/node_modules/ 
      },
        {
            test: /vue-preview.src.*?js$/,
            loader: 'babel'
        }

    ]
  },
  babel:{
    presets:['es2015'],  // 配置将es6语法转换成es5语法
    plugins:['transform-runtime']
  },
  plugins:[
    new htmlwp({
          title: '首页',  //生成的页面标题
          filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
          template: 'index1.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
    }
    )
  ]
}
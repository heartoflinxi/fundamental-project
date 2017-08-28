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
        test: /\.css$/,  //��� .css�ļ�
        loader:'style-loader!css-loader'
      },
      {
        test: /\.scss$/,  //��� .scss�ļ�
        loader:'style-loader!css-loader!sass-loader'
      },
       {
        test: /\.less/,  //��� .less�ļ�
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
        test: /\.js$/,  // .js�ļ�
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
    presets:['es2015'],  // ���ý�es6�﷨ת����es5�﷨
    plugins:['transform-runtime']
  },
  plugins:[
    new htmlwp({
          title: '��ҳ',  //���ɵ�ҳ�����
          filename: 'index.html', //webpack-dev-server���ڴ������ɵ��ļ����ƣ��Զ���buildע�뵽���ҳ��ײ�������ʵ���Զ�ˢ�¹���
          template: 'index1.html' //����index1.html���ģ��������(����ļ������Ա�Լ�����)
    }
    )
  ]
}
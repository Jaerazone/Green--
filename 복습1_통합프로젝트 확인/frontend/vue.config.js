const path = require('path')

module.exports = {
    outputDir : path.resolve(__dirname, '../backend/public'),
    // api로 주소가 전달되면 전부 백엔드로 넘겨준다.
    devServer:{
        proxyTable : {
            "/api":{
                target : "http:localhost:3000/api",
                changeOrigin : true,
                pathRewrite : {
                    '^/api' : ''
                }
            }
        }
    }
}
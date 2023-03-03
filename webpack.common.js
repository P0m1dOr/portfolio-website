const path = require("path");
const loader = require("sass-loader");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
        
    },
    output:{
        assetModuleFilename: 'img/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: {
                    loader: "html-loader"
                }
            },
            
        ]
    }
};
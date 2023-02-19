const path = require("path");
const loader = require("sass-loader");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
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
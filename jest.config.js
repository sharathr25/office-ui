module.exports = {
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/fileTransformer.js",
        "\\.(css|scss)$": "<rootDir>/styleMockForJest.js"
    },
    verbose: true
};

// See http://brunch.io for documentation.
exports.config = {
    paths: {
        public: "public",
        watched: ["app", "vendor"]
    },
    modules: {
        wrapper: "commonjs",
        definition: "commonjs",
        autoRequire: {
            'js/main.js': ['main']
        }
    },
    files: {
        javascripts: {
            joinTo: {
                "js/main.js": /(app)/,       // all code from 'app/',
                "js/vendor.js": /^node_modules/ // all BUT app code - 'vendor/', 'node_modules/', etc
            }
        },
        stylesheets: {
            joinTo: {
                "css/styles.min.css": /(app)/
            }
        }
    },
    plugins: {
        sass: {
            mode: "ruby"
            //options: ["--style compressed"]
        },
        autoReload: {
            enabled: true
        },
        babel: {
            ignore: [/web\/static\/vendor/, /node_modules/]
        }
    },
    overrides: {
        production: {
            optimize: true,
            sourceMaps: false,
            plugins: {
                autoReload: {
                    enabled: false
                }
            }
        }
    }
};

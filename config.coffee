# exports.config =
#
#   paths:
#     public: "public"
#     watched: ["app", "vendor"]
#
#   modules:
#     wrapper: "commonjs"
#     definition: "commonjs"
#     autoRequire: {
#       'js/main.js': ['main']
#     }
#
#   files:
#     javascripts:
#       joinTo:
#         "js/main.js": /(app)/
#         "js/vendor.js": /^node_modules/
#       order:
#         before: []
#
#     stylesheets:
#       joinTo:
#         "css/styles.min.css": /(app)/
#
#   plugins:
#     sass:
#       mode: "ruby"
#       #options: ["--style compressed"]
#     autoReload:
#       {enabled: true}
#     babel:
#       {ignore: [/web\/static\/vendor/, /node_modules/]}
#
#   overrides: {
#     production: {
#       optimize: true,
#       sourceMaps: false,
#       plugins: {autoReload: {enabled: false}}
#     }
#   }

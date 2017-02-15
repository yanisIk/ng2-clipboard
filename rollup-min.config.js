import uglify from "rollup-plugin-uglify";

export default {
    entry: 'index.js',
    dest: 'bundles/ng2-clipboard.umd.min.tmp',
    format: 'umd',
    moduleName: 'ng2.clipboard',
    external: [
        '@angular/core'
    ],
    globals: {
        '@angular/core': 'ng.core'
    },
    plugins: [
        uglify()
    ]
}

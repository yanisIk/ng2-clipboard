export default {
    entry     : 'index.js',
    dest      : 'bundles/ng2-clipboard.umd.tmp',
    format    : 'umd',
    external  : [
        '@angular/core'
    ],
    globals   : {
        '@angular/core': 'ng.core',
    },
    moduleName: 'ng2.clipboard'
}

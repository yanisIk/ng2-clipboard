# ng2-clipboard

[![Build Status](https://img.shields.io/travis/yanisIk/ng2-clipboard/master.svg?style=flat-square)](https://travis-ci.org/yanisIk/ng2-clipboard)
[![npm version](https://img.shields.io/npm/v/@yanisIk/ng2-clipboard.svg?style=flat-square)](https://www.npmjs.com/package/@yanisIk/ng2-clipboard)
[![devDependencies Status](https://img.shields.io/david/dev/yanisIk/ng2-clipboard.svg?style=flat-square)](https://david-dm.org/yanisIk/ng2-clipboard?type=dev)
[![peerDependencies Status](https://img.shields.io/david/peer/yanisIk/ng2-clipboard.svg?style=flat-square)](https://david-dm.org/yanisIk/ng2-clipboard?type=peer)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/yanisIk/ng2-clipboard/blob/master/LICENSE)

**ng2-clipboard** is a simple Angular2 clipboard service that responds to one simple need :

 - Ability to copy any string into the clipboard

This package is compatible with [Angular2 AoT compiler](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) and can be bundle with [RollupJS](http://rollupjs.org/).

## Installation

1. Install the npm package.

    ```
    npm install --save @yanisIk/ng2-clipboard
    ```
        
2. Import `Ng2ClipboardModule` in your application  :

    ```
    import { NgModule }         from '@angular/core';
    import { BrowserModule }    from '@angular/platform-browser';
    import { AppComponent }     from './app.component';
    import { Ng2ClipboardModule } from '@yanisIk/ng2-clipboard';
     
    @NgModule({
        imports:      [ BrowserModule, Ng2ClipboardModule ],
        declarations: [ AppComponent ],
        bootstrap:    [ AppComponent ]
    })
    export class AppModule { } 
    ```

3. Tells your application how to load `ng2-clipboard`.
    * Like Angular2 modules
        * All the compiled JS use ES2015 module format. *You cannot use them with SystemJS.*
        * UMD bundles are available for SystemJS loading.
    * With SystemJS, it can look like :
        ```
        System.config({
            paths: {
                'npm:': 'node_modules/'
            },
            map: {
                app: 'app',
                
                '@angular/core'   : 'npm:@angular/core/bundles/core.umd.js',
                '@angular/common' : 'npm:@angular/common/bundles/common.umd.js',
                // others angular bundles...
                
                '@yanisIk/ng2-clipboard': 'npm:@yanisIk/ng2-clipboard/bundles/ng2-clipboard.umd.js',
                
                rxjs: 'npm:rxjs',
            },
            packages: {
                app : {defaultExtension: 'js', main: './main.js'},
                rxjs: {defaultExtension: 'js'}
            }
        });
        ```
    * With AoT compilation, you don't have to do anything, `.metadata.json` files are here for you.
    * With RollupJS, you don't have to do anything either, JS files use ES2015 module.

## Usage

Inject the `ClipboardService` service anywhere you need it :
 
```
@Component({})
export class MyComponent(){

    constructor(private clipboard: ClipboardService){
    
        this.clipboard.copy("TEXT TO COPY");
        this.clipboard.onSuccess((e) => console.log("Copy to clipboard successful!"));
        this.clipboard.onError((e) => console.log("Copy to clipboard failed!"));
        
    }
}
```

## License

(c) 2017 Yanis Ikene
[MIT](https://github.com/yanisIk/ng2-clipboard/blob/master/LICENSE)

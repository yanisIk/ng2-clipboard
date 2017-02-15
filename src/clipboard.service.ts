/**
 * @license
 * Copyright Yanis Ikene All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/yanisIk/ng2-clipboard/blob/master/LICENSE
 */

import {Injectable, EventEmitter, OnInit, OnDestroy} from "@angular/core";

/**
 * Created by Yanis Ikene on 14/02/2017.
 */

declare const Clipboard: any; //clipboard.js

/**
 * A clipboard service that provide the functionality 
 * to copy programmaticaly a string to the clipboard.
 */
@Injectable()
export class ClipboardService implements OnInit, OnDestroy {

    private clipboard: any;
    private INPUT_TEXT_ID: string = "clipboard_text";
    private BUTTON_COPY_ID: string = "button_copy";

    public readonly onSuccess: EventEmitter<any> = new EventEmitter<any>();
    public readonly onError: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Copies a string to the clipboard.
     * @param text to copy to the clipboard
     */
    copy (text: string) {
        //Set the value we want to copy as the value of the hidden input.
        document.getElementById(this.INPUT_TEXT_ID).setAttribute('value', text);
        /*
          Execute the click event in a setTimeout so it will be captured by ngZone and not conflict
          change detection mechanisms.
          Also prevents a bug when using the UpgradeAdapter with an Angular1 downgraded app 
        */
        setTimeout(() => document.getElementById(this.BUTTON_COPY_ID).click(), 1);
    };

    constructor() {}

    ngOnInit() {
        this.addSaltToIds();
        this.initDomElements();
        this.initClipboard();
        this.initEventEmitters();
    }

    ngOnDestroy() {
        if (this.clipboard) this.clipboard.destroy();
        document.getElementById(this.INPUT_TEXT_ID).remove();;
        document.getElementById(this.BUTTON_COPY_ID).remove();
    }

    /**
     * Add salt to IDs that will be used to create the DOM elements
     * to avoid potential ID conflicts in the DOM.
     */
    private addSaltToIds() {
        const salt = Math.floor(Math.random() * 1000) + 1;  
        this.INPUT_TEXT_ID = this.INPUT_TEXT_ID + `_${salt}`;
        this.INPUT_TEXT_ID = this.BUTTON_COPY_ID + `_${salt}`;
    }

    /**
     * Create the hidden input and the hidden button
     * that will be used by clipboard.js
     */
    private initDomElements() {
        const copyBtn = document.createElement("button");
        copyBtn.id = this.BUTTON_COPY_ID;
        copyBtn.hidden = true;
        
        const input_text = document.createElement("input");
        input_text.id = this.INPUT_TEXT_ID;
        input_text.setAttribute('hidden', 'true');
        
        document.body.appendChild(copyBtn);
        document.body.appendChild(input_text);
    }

    /**
     * Init clipboard.js and attach it to the previously created 
     * button and get the text from the hidden input.
     */
    private initClipboard() {
        this.clipboard = 
        new Clipboard(`#${this.BUTTON_COPY_ID}`, {
            text: function() {
                return document.querySelector(this.INPUT_TEXT_ID).value;
            }
        });
    }

    /**
     * Pass the success/error events from clipboard.js
     * to our Event Emitters.
     */
    private initEventEmitters() {
        this.clipboard.on('success', (e) => this.onSuccess.emit(e));
        this.clipboard.on('error', (e) => this.onError.emit(e));
    }
}
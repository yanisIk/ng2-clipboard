/**
 * @license
 * Copyright Yanis Ikene All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/yanisIk/ng2-clipboard/blob/master/LICENSE
 */

import {ClipboardService} from "../src/clipboard.service";
import {TestBed, inject} from "@angular/core/testing";
import {Ng2ClipboardModule} from "../src/ng2-clipboard.module";

/**
 * Created by Yanis Ikene on 14/02/2017.
 */

describe('Clipboard Servcie', () => {

    describe('copy text', () => {

        before(() => {
            TestBed.configureTestingModule({imports: [Ng2ClipboardModule]});
        });

        it('should fire success event', (inject([ClipboardService], (clipboard: ClipboardService) => {
            
            clipboard.onSuccess((e) => {
                expect(e).toBeDefined();
                done();
            });

            clipboard.onError((e) => {
                expect(e).toBeUndefined();
                done();
            });
            
            const stringToCopy = "STRING_TO_COPY";
            clipboard.copy(stringToCopy);

        })));
    });

    

});
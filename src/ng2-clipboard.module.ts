/**
 * @license
 * Copyright Yanis Ikene All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/yanisIk/ng2-clipboard/blob/master/LICENSE
 */

import {NgModule} from "@angular/core";
import {ClipboardService} from "./clipboard.service";
/**
 * Created by Yanis Ikene on 09/17/2016.
 */

@NgModule({
  providers:    [ ClipboardService ]
})
export class Ng2ClipboardModule {}
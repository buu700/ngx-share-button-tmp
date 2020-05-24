import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { ShareService, ShareDirective, ShareModule, SHARE_BUTTONS_CONFIG } from '@ngx-share/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareButton {
    /**
     * @param {?} _cd
     * @param {?} _share
     */
    constructor(_cd, _share) {
        this._cd = _cd;
        this._share = _share;
        /**
         * Show button icon
         */
        this.showIcon = true;
        /**
         * Show button text
         */
        this.showText = false;
        /**
         * Show sharing count
         */
        this.showCount = false;
        /**
         * Button size
         */
        this.size = this._share.config.size;
        /**
         * Button theme
         */
        this.theme = this._share.config.theme;
        /**
         * Stream that emits when share count is fetched
         */
        this.count = new EventEmitter();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new EventEmitter();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new EventEmitter();
    }
    /**
     * @param {?} button
     * @return {?}
     */
    set createButton(button) {
        this.shareCount = 0;
        this.button = button;
    }
    /**
     * Set the sharing link
     * @param {?} url
     * @return {?}
     */
    set setUrl(url) {
        this.shareCount = 0;
        this.url = url;
    }
    /**
     * Set theme as button class
     * @return {?}
     */
    get buttonClass() {
        return `sb-button sb-${this.theme}`;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._cd.detectChanges();
    }
    /**
     * @param {?} count
     * @return {?}
     */
    onCount(count) {
        this.shareCount = count;
        this.count.emit(count);
    }
}
ShareButton.decorators = [
    { type: Component, args: [{
                selector: 'share-button',
                template: "<button class=\"sb-wrapper\"\n        [shareButton]=\"button\"\n        [url]=\"url\"\n        [image]=\"image\"\n        [title]=\"title\"\n        [description]=\"description\"\n        [tags]=\"tags\"\n        [autoSetMeta]=\"autoSetMeta\"\n        [getCount]=\"showCount\"\n        (count)=\"onCount($event)\"\n        (opened)=\"opened.emit($event)\"\n        (closed)=\"closed.emit($event)\"\n        [class.sb-show-icon]=\"showIcon\"\n        [class.sb-show-text]=\"showText\"\n        [class.sb-show-count]=\"showCount && shareCount\"\n        [style.fontSize.px]=\"(1 + size/20) * 14\">\n\n  <div class=\"sb-inner\">\n\n    <div class=\"sb-content\">\n\n      <div *ngIf=\"showIcon && ref?.shareButton\" class=\"sb-icon\">\n        <fa-icon [icon]=\"icon || ref.shareButton.icon\" [fixedWidth]=\"true\"></fa-icon>\n      </div>\n\n      <div *ngIf=\"showText && ref?.shareButton\" class=\"sb-text\">\n        {{ text || ref.shareButton.text }}\n      </div>\n\n    </div>\n\n    <div *ngIf=\"showCount && shareCount\" class=\"sb-count\">\n      <span>{{ shareCount | shareCount }}</span>\n    </div>\n\n  </div>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["::ng-deep .sb-button,::ng-deep .sb-group{display:inline-flex;align-items:flex-start}::ng-deep .sb-group{flex-wrap:wrap}::ng-deep .sb-button{margin:.3125em}::ng-deep .sb-wrapper{font-size:inherit;cursor:pointer;position:relative;outline:0;min-width:4.125em;height:2.5em;border:none;border-radius:1px;padding:0;line-height:2.571em;background-color:transparent}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-icon,::ng-deep .sb-wrapper .sb-text{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .sb-wrapper .sb-inner{display:flex;flex:1;width:100%;height:100%}::ng-deep .sb-wrapper .sb-content{display:flex;height:100%;width:100%}::ng-deep .sb-wrapper .sb-text{padding:0 .7em;flex:1;height:100%;white-space:nowrap}::ng-deep .sb-wrapper .sb-icon{text-align:center;width:100%;height:100%;font-size:1.2em;min-width:2em}::ng-deep .sb-wrapper .sb-count{font-size:.9em;padding:0 .7em}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-text{font-weight:700}::ng-deep .sb-show-text .sb-icon{width:2em}::ng-deep .sb-show-count{min-width:5.333em}"]
            }] }
];
/** @nocollapse */
ShareButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ShareService }
];
ShareButton.propDecorators = {
    createButton: [{ type: Input, args: ['button',] }],
    setUrl: [{ type: Input, args: ['url',] }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    image: [{ type: Input }],
    tags: [{ type: Input }],
    autoSetMeta: [{ type: Input }],
    showIcon: [{ type: Input }],
    showText: [{ type: Input }],
    showCount: [{ type: Input }],
    text: [{ type: Input }],
    icon: [{ type: Input }],
    size: [{ type: Input }],
    theme: [{ type: Input }],
    count: [{ type: Output }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    buttonClass: [{ type: HostBinding, args: ['class',] }],
    ref: [{ type: ViewChild, args: [ShareDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareButtonModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ShareButtonModule,
            providers: [{ provide: SHARE_BUTTONS_CONFIG, useValue: config }]
        };
    }
}
ShareButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ShareButton
                ],
                imports: [
                    ShareModule,
                    FontAwesomeModule,
                    CommonModule
                ],
                exports: [
                    ShareModule,
                    FontAwesomeModule,
                    ShareButton
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ShareButtonModule, ShareButton };

//# sourceMappingURL=ngx-share-button.js.map
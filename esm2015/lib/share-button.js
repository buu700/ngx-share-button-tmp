/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ShareService, ShareDirective } from '@ngx-share/core';
export class ShareButton {
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
if (false) {
    /**
     * The sharing link
     * @type {?}
     */
    ShareButton.prototype.url;
    /**
     * Share count value
     * @type {?}
     */
    ShareButton.prototype.shareCount;
    /**
     * Button name
     * @type {?}
     */
    ShareButton.prototype.button;
    /**
     * The title parameter
     * @type {?}
     */
    ShareButton.prototype.title;
    /**
     * The description parameter
     * @type {?}
     */
    ShareButton.prototype.description;
    /**
     * The image parameter for sharing on Pinterest
     * @type {?}
     */
    ShareButton.prototype.image;
    /**
     * The tags parameter for sharing on Twitter and Tumblr
     * @type {?}
     */
    ShareButton.prototype.tags;
    /**
     * Sets meta tags from document head, useful when SEO is available
     * @type {?}
     */
    ShareButton.prototype.autoSetMeta;
    /**
     * Show button icon
     * @type {?}
     */
    ShareButton.prototype.showIcon;
    /**
     * Show button text
     * @type {?}
     */
    ShareButton.prototype.showText;
    /**
     * Show sharing count
     * @type {?}
     */
    ShareButton.prototype.showCount;
    /**
     * Button custom text
     * @type {?}
     */
    ShareButton.prototype.text;
    /**
     * Button custom icon
     * @type {?}
     */
    ShareButton.prototype.icon;
    /**
     * Button size
     * @type {?}
     */
    ShareButton.prototype.size;
    /**
     * Button theme
     * @type {?}
     */
    ShareButton.prototype.theme;
    /**
     * Stream that emits when share count is fetched
     * @type {?}
     */
    ShareButton.prototype.count;
    /**
     * Stream that emits when share dialog is opened
     * @type {?}
     */
    ShareButton.prototype.opened;
    /**
     * Stream that emits when share dialog is closed
     * @type {?}
     */
    ShareButton.prototype.closed;
    /** @type {?} */
    ShareButton.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    ShareButton.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    ShareButton.prototype._share;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9idXR0b24vIiwic291cmNlcyI6WyJsaWIvc2hhcmUtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFFWCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUS9ELE1BQU0sT0FBTyxXQUFXOzs7OztJQTBFdEIsWUFBb0IsR0FBc0IsRUFDdEIsTUFBb0I7UUFEcEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBYzs7OztRQXJDL0IsYUFBUSxHQUFHLElBQUksQ0FBQzs7OztRQUdoQixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBR2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUFTbEIsU0FBSSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs7OztRQUd2QyxVQUFLLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOzs7O1FBR3hDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR3BDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBVzlDLENBQUM7Ozs7O0lBakVELElBQXFCLFlBQVksQ0FBQyxNQUFjO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUdELElBQWtCLE1BQU0sQ0FBQyxHQUFXO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBZ0RELElBQTBCLFdBQVc7UUFDbkMsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFRRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQTNGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHluQ0FBa0M7Z0JBRWxDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVRDLGlCQUFpQjtZQUVWLFlBQVk7OzsyQkFtQmxCLEtBQUssU0FBQyxRQUFRO3FCQU1kLEtBQUssU0FBQyxLQUFLO29CQU1YLEtBQUs7MEJBR0wsS0FBSztvQkFHTCxLQUFLO21CQUdMLEtBQUs7MEJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBR0wsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7bUJBR0wsS0FBSztvQkFHTCxLQUFLO29CQUdMLE1BQU07cUJBR04sTUFBTTtxQkFHTixNQUFNOzBCQUdOLFdBQVcsU0FBQyxPQUFPO2tCQUluQixTQUFTLFNBQUMsY0FBYzs7Ozs7OztJQXJFekIsMEJBQVk7Ozs7O0lBR1osaUNBQW1COzs7OztJQUduQiw2QkFBZTs7Ozs7SUFjZiw0QkFBdUI7Ozs7O0lBR3ZCLGtDQUE2Qjs7Ozs7SUFHN0IsNEJBQXVCOzs7OztJQUd2QiwyQkFBc0I7Ozs7O0lBR3RCLGtDQUE4Qjs7Ozs7SUFHOUIsK0JBQXlCOzs7OztJQUd6QiwrQkFBMEI7Ozs7O0lBRzFCLGdDQUEyQjs7Ozs7SUFHM0IsMkJBQXNCOzs7OztJQUd0QiwyQkFBc0I7Ozs7O0lBR3RCLDJCQUFnRDs7Ozs7SUFHaEQsNEJBQWtEOzs7OztJQUdsRCw0QkFBNkM7Ozs7O0lBRzdDLDZCQUE4Qzs7Ozs7SUFHOUMsNkJBQThDOztJQU85QywwQkFBK0M7Ozs7O0lBRW5DLDBCQUE4Qjs7Ozs7SUFDOUIsNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIEhvc3RCaW5kaW5nLFxuICBBZnRlclZpZXdJbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlU2VydmljZSwgU2hhcmVEaXJlY3RpdmUgfSBmcm9tICdAbmd4LXNoYXJlL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hhcmUtYnV0dG9uLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaGFyZS1idXR0b24uc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIC8qKiBUaGUgc2hhcmluZyBsaW5rICovXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qKiBTaGFyZSBjb3VudCB2YWx1ZSAqL1xuICBzaGFyZUNvdW50OiBudW1iZXI7XG5cbiAgLyoqIEJ1dHRvbiBuYW1lICovXG4gIGJ1dHRvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYnV0dG9uJykgc2V0IGNyZWF0ZUJ1dHRvbihidXR0b246IHN0cmluZykge1xuICAgIHRoaXMuc2hhcmVDb3VudCA9IDA7XG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaGFyaW5nIGxpbmsgKi9cbiAgQElucHV0KCd1cmwnKSBzZXQgc2V0VXJsKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFyZUNvdW50ID0gMDtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIC8qKiBUaGUgdGl0bGUgcGFyYW1ldGVyICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBkZXNjcmlwdGlvbiBwYXJhbWV0ZXIgKi9cbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAvKiogVGhlIGltYWdlIHBhcmFtZXRlciBmb3Igc2hhcmluZyBvbiBQaW50ZXJlc3QgKi9cbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcblxuICAvKiogVGhlIHRhZ3MgcGFyYW1ldGVyIGZvciBzaGFyaW5nIG9uIFR3aXR0ZXIgYW5kIFR1bWJsciAqL1xuICBASW5wdXQoKSB0YWdzOiBzdHJpbmc7XG5cbiAgLyoqIFNldHMgbWV0YSB0YWdzIGZyb20gZG9jdW1lbnQgaGVhZCwgdXNlZnVsIHdoZW4gU0VPIGlzIGF2YWlsYWJsZSAqL1xuICBASW5wdXQoKSBhdXRvU2V0TWV0YTogYm9vbGVhbjtcblxuICAvKiogU2hvdyBidXR0b24gaWNvbiAqL1xuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XG5cbiAgLyoqIFNob3cgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgc2hvd1RleHQgPSBmYWxzZTtcblxuICAvKiogU2hvdyBzaGFyaW5nIGNvdW50ICovXG4gIEBJbnB1dCgpIHNob3dDb3VudCA9IGZhbHNlO1xuXG4gIC8qKiBCdXR0b24gY3VzdG9tIHRleHQgKi9cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuXG4gIC8qKiBCdXR0b24gY3VzdG9tIGljb24gKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gIC8qKiBCdXR0b24gc2l6ZSAqL1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSB0aGlzLl9zaGFyZS5jb25maWcuc2l6ZTtcblxuICAvKiogQnV0dG9uIHRoZW1lICovXG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgPSB0aGlzLl9zaGFyZS5jb25maWcudGhlbWU7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgY291bnQgaXMgZmV0Y2hlZCAqL1xuICBAT3V0cHV0KCkgY291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBkaWFsb2cgaXMgb3BlbmVkICovXG4gIEBPdXRwdXQoKSBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBkaWFsb2cgaXMgY2xvc2VkICovXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKiogU2V0IHRoZW1lIGFzIGJ1dHRvbiBjbGFzcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGJ1dHRvbkNsYXNzKCkge1xuICAgIHJldHVybiBgc2ItYnV0dG9uIHNiLSR7dGhpcy50aGVtZX1gO1xuICB9XG5cbiAgQFZpZXdDaGlsZChTaGFyZURpcmVjdGl2ZSkgcmVmOiBTaGFyZURpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NoYXJlOiBTaGFyZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBvbkNvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnNoYXJlQ291bnQgPSBjb3VudDtcbiAgICB0aGlzLmNvdW50LmVtaXQoY291bnQpO1xuICB9XG5cbn1cbiJdfQ==
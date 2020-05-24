/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ShareService, ShareDirective } from '@ngx-share/core';
var ShareButton = /** @class */ (function () {
    function ShareButton(_cd, _share) {
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
    Object.defineProperty(ShareButton.prototype, "createButton", {
        set: /**
         * @param {?} button
         * @return {?}
         */
        function (button) {
            this.shareCount = 0;
            this.button = button;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButton.prototype, "setUrl", {
        /** Set the sharing link */
        set: /**
         * Set the sharing link
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.shareCount = 0;
            this.url = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButton.prototype, "buttonClass", {
        /** Set theme as button class */
        get: /**
         * Set theme as button class
         * @return {?}
         */
        function () {
            return "sb-button sb-" + this.theme;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ShareButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._cd.detectChanges();
    };
    /**
     * @param {?} count
     * @return {?}
     */
    ShareButton.prototype.onCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.shareCount = count;
        this.count.emit(count);
    };
    ShareButton.decorators = [
        { type: Component, args: [{
                    selector: 'share-button',
                    template: "<button class=\"sb-wrapper\"\n        [shareButton]=\"button\"\n        [url]=\"url\"\n        [image]=\"image\"\n        [title]=\"title\"\n        [description]=\"description\"\n        [tags]=\"tags\"\n        [autoSetMeta]=\"autoSetMeta\"\n        [getCount]=\"showCount\"\n        (count)=\"onCount($event)\"\n        (opened)=\"opened.emit($event)\"\n        (closed)=\"closed.emit($event)\"\n        [class.sb-show-icon]=\"showIcon\"\n        [class.sb-show-text]=\"showText\"\n        [class.sb-show-count]=\"showCount && shareCount\"\n        [style.fontSize.px]=\"(1 + size/20) * 14\">\n\n  <div class=\"sb-inner\">\n\n    <div class=\"sb-content\">\n\n      <div *ngIf=\"showIcon && ref?.shareButton\" class=\"sb-icon\">\n        <fa-icon [icon]=\"icon || ref.shareButton.icon\" [fixedWidth]=\"true\"></fa-icon>\n      </div>\n\n      <div *ngIf=\"showText && ref?.shareButton\" class=\"sb-text\">\n        {{ text || ref.shareButton.text }}\n      </div>\n\n    </div>\n\n    <div *ngIf=\"showCount && shareCount\" class=\"sb-count\">\n      <span>{{ shareCount | shareCount }}</span>\n    </div>\n\n  </div>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["::ng-deep .sb-button,::ng-deep .sb-group{display:inline-flex;align-items:flex-start}::ng-deep .sb-group{flex-wrap:wrap}::ng-deep .sb-button{margin:.3125em}::ng-deep .sb-wrapper{font-size:inherit;cursor:pointer;position:relative;outline:0;min-width:4.125em;height:2.5em;border:none;border-radius:1px;padding:0;line-height:2.571em;background-color:transparent}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-icon,::ng-deep .sb-wrapper .sb-text{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .sb-wrapper .sb-inner{display:flex;flex:1;width:100%;height:100%}::ng-deep .sb-wrapper .sb-content{display:flex;height:100%;width:100%}::ng-deep .sb-wrapper .sb-text{padding:0 .7em;flex:1;height:100%;white-space:nowrap}::ng-deep .sb-wrapper .sb-icon{text-align:center;width:100%;height:100%;font-size:1.2em;min-width:2em}::ng-deep .sb-wrapper .sb-count{font-size:.9em;padding:0 .7em}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-text{font-weight:700}::ng-deep .sb-show-text .sb-icon{width:2em}::ng-deep .sb-show-count{min-width:5.333em}"]
                }] }
    ];
    /** @nocollapse */
    ShareButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ShareService }
    ]; };
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
    return ShareButton;
}());
export { ShareButton };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9idXR0b24vIiwic291cmNlcyI6WyJsaWIvc2hhcmUtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFFWCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9EO0lBZ0ZFLHFCQUFvQixHQUFzQixFQUN0QixNQUFvQjtRQURwQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFjOzs7O1FBckMvQixhQUFRLEdBQUcsSUFBSSxDQUFDOzs7O1FBR2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFHakIsY0FBUyxHQUFHLEtBQUssQ0FBQzs7OztRQVNsQixTQUFJLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzs7O1FBR3ZDLFVBQUssR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7UUFHeEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7UUFHbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7UUFHcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFXOUMsQ0FBQztJQWpFRCxzQkFBcUIscUNBQVk7Ozs7O1FBQWpDLFVBQWtDLE1BQWM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBa0IsK0JBQU07UUFEeEIsMkJBQTJCOzs7Ozs7UUFDM0IsVUFBeUIsR0FBVztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQWdERCxzQkFBMEIsb0NBQVc7UUFEckMsZ0NBQWdDOzs7OztRQUNoQztZQUNFLE9BQU8sa0JBQWdCLElBQUksQ0FBQyxLQUFPLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7Ozs7SUFRRCxxQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsNkJBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Z0JBM0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIseW5DQUFrQztvQkFFbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUQyxpQkFBaUI7Z0JBRVYsWUFBWTs7OytCQW1CbEIsS0FBSyxTQUFDLFFBQVE7eUJBTWQsS0FBSyxTQUFDLEtBQUs7d0JBTVgsS0FBSzs4QkFHTCxLQUFLO3dCQUdMLEtBQUs7dUJBR0wsS0FBSzs4QkFHTCxLQUFLOzJCQUdMLEtBQUs7MkJBR0wsS0FBSzs0QkFHTCxLQUFLO3VCQUdMLEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLEtBQUs7d0JBR0wsTUFBTTt5QkFHTixNQUFNO3lCQUdOLE1BQU07OEJBR04sV0FBVyxTQUFDLE9BQU87c0JBSW5CLFNBQVMsU0FBQyxjQUFjOztJQWUzQixrQkFBQztDQUFBLEFBN0ZELElBNkZDO1NBdkZZLFdBQVc7Ozs7OztJQUd0QiwwQkFBWTs7Ozs7SUFHWixpQ0FBbUI7Ozs7O0lBR25CLDZCQUFlOzs7OztJQWNmLDRCQUF1Qjs7Ozs7SUFHdkIsa0NBQTZCOzs7OztJQUc3Qiw0QkFBdUI7Ozs7O0lBR3ZCLDJCQUFzQjs7Ozs7SUFHdEIsa0NBQThCOzs7OztJQUc5QiwrQkFBeUI7Ozs7O0lBR3pCLCtCQUEwQjs7Ozs7SUFHMUIsZ0NBQTJCOzs7OztJQUczQiwyQkFBc0I7Ozs7O0lBR3RCLDJCQUFzQjs7Ozs7SUFHdEIsMkJBQWdEOzs7OztJQUdoRCw0QkFBa0Q7Ozs7O0lBR2xELDRCQUE2Qzs7Ozs7SUFHN0MsNkJBQThDOzs7OztJQUc5Qyw2QkFBOEM7O0lBTzlDLDBCQUErQzs7Ozs7SUFFbkMsMEJBQThCOzs7OztJQUM5Qiw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgSG9zdEJpbmRpbmcsXG4gIEFmdGVyVmlld0luaXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVTZXJ2aWNlLCBTaGFyZURpcmVjdGl2ZSB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGFyZS1idXR0b24uaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NoYXJlLWJ1dHRvbi5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLyoqIFRoZSBzaGFyaW5nIGxpbmsgKi9cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqIFNoYXJlIGNvdW50IHZhbHVlICovXG4gIHNoYXJlQ291bnQ6IG51bWJlcjtcblxuICAvKiogQnV0dG9uIG5hbWUgKi9cbiAgYnV0dG9uOiBzdHJpbmc7XG5cbiAgQElucHV0KCdidXR0b24nKSBzZXQgY3JlYXRlQnV0dG9uKGJ1dHRvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFyZUNvdW50ID0gMDtcbiAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHNoYXJpbmcgbGluayAqL1xuICBASW5wdXQoJ3VybCcpIHNldCBzZXRVcmwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYXJlQ291bnQgPSAwO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgLyoqIFRoZSB0aXRsZSBwYXJhbWV0ZXIgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAvKiogVGhlIGRlc2NyaXB0aW9uIHBhcmFtZXRlciAqL1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIC8qKiBUaGUgaW1hZ2UgcGFyYW1ldGVyIGZvciBzaGFyaW5nIG9uIFBpbnRlcmVzdCAqL1xuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgdGFncyBwYXJhbWV0ZXIgZm9yIHNoYXJpbmcgb24gVHdpdHRlciBhbmQgVHVtYmxyICovXG4gIEBJbnB1dCgpIHRhZ3M6IHN0cmluZztcblxuICAvKiogU2V0cyBtZXRhIHRhZ3MgZnJvbSBkb2N1bWVudCBoZWFkLCB1c2VmdWwgd2hlbiBTRU8gaXMgYXZhaWxhYmxlICovXG4gIEBJbnB1dCgpIGF1dG9TZXRNZXRhOiBib29sZWFuO1xuXG4gIC8qKiBTaG93IGJ1dHRvbiBpY29uICovXG4gIEBJbnB1dCgpIHNob3dJY29uID0gdHJ1ZTtcblxuICAvKiogU2hvdyBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBzaG93VGV4dCA9IGZhbHNlO1xuXG4gIC8qKiBTaG93IHNoYXJpbmcgY291bnQgKi9cbiAgQElucHV0KCkgc2hvd0NvdW50ID0gZmFsc2U7XG5cbiAgLyoqIEJ1dHRvbiBjdXN0b20gdGV4dCAqL1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG5cbiAgLyoqIEJ1dHRvbiBjdXN0b20gaWNvbiAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgLyoqIEJ1dHRvbiBzaXplICovXG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciA9IHRoaXMuX3NoYXJlLmNvbmZpZy5zaXplO1xuXG4gIC8qKiBCdXR0b24gdGhlbWUgKi9cbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy50aGVtZTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBjb3VudCBpcyBmZXRjaGVkICovXG4gIEBPdXRwdXQoKSBjb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBvcGVuZWQgKi9cbiAgQE91dHB1dCgpIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBjbG9zZWQgKi9cbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKiBTZXQgdGhlbWUgYXMgYnV0dG9uIGNsYXNzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBnZXQgYnV0dG9uQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGBzYi1idXR0b24gc2ItJHt0aGlzLnRoZW1lfWA7XG4gIH1cblxuICBAVmlld0NoaWxkKFNoYXJlRGlyZWN0aXZlKSByZWY6IFNoYXJlRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2hhcmU6IFNoYXJlU2VydmljZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2NkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG9uQ291bnQoY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc2hhcmVDb3VudCA9IGNvdW50O1xuICAgIHRoaXMuY291bnQuZW1pdChjb3VudCk7XG4gIH1cblxufVxuIl19
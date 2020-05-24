/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule, SHARE_BUTTONS_CONFIG } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButton } from './share-button';
var ShareButtonModule = /** @class */ (function () {
    function ShareButtonModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ShareButtonModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ShareButtonModule,
            providers: [{ provide: SHARE_BUTTONS_CONFIG, useValue: config }]
        };
    };
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
    return ShareButtonModule;
}());
export { ShareButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFzQixvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUFBO0lBc0JBLENBQUM7Ozs7O0lBTlEsNEJBQVU7Ozs7SUFBakIsVUFBa0IsTUFBMkI7UUFDM0MsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQy9ELENBQUM7SUFDSixDQUFDOztnQkFyQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLFdBQVc7cUJBQ1o7aUJBQ0Y7O0lBUUQsd0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQVBZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2hhcmVNb2R1bGUsIFNoYXJlQnV0dG9uc0NvbmZpZywgU0hBUkVfQlVUVE9OU19DT05GSUcgfSBmcm9tICdAbmd4LXNoYXJlL2NvcmUnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IFNoYXJlQnV0dG9uIH0gZnJvbSAnLi9zaGFyZS1idXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTaGFyZUJ1dHRvblxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTaGFyZU1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBTaGFyZUJ1dHRvblxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uTW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU2hhcmVCdXR0b25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUJ1dHRvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBTSEFSRV9CVVRUT05TX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dXG4gICAgfTtcbiAgfVxufVxuIl19
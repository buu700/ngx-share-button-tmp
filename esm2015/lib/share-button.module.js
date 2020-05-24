/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule, SHARE_BUTTONS_CONFIG } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButton } from './share-button';
export class ShareButtonModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFzQixvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWlCN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUEyQjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDL0QsQ0FBQztJQUNKLENBQUM7OztZQXJCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsaUJBQWlCO29CQUNqQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsV0FBVztpQkFDWjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaGFyZU1vZHVsZSwgU2hhcmVCdXR0b25zQ29uZmlnLCBTSEFSRV9CVVRUT05TX0NPTkZJRyB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgU2hhcmVCdXR0b24gfSBmcm9tICcuL3NoYXJlLWJ1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNoYXJlQnV0dG9uXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZU1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNoYXJlTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIFNoYXJlQnV0dG9uXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25Nb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlQnV0dG9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFNIQVJFX0JVVFRPTlNfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfV1cbiAgICB9O1xuICB9XG59XG4iXX0=
import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class ModalService {
    constructor() {
        this.transitionData = false;
        this.stateData = new BehaviorSubject({ modalState: false, action: false, component: null });
        this.componentData = null;
        const that = this;
        document.onkeyup = function (evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27 && that.state.value.modalState === true) {
                that.close(false);
            }
        };
    }
    get transition() {
        return this.transitionData;
    }
    get state() {
        return this.stateData;
    }
    get component() {
        return this.componentData;
    }
    get modalContent() {
        return this.modalContentData;
    }
    setTransition(state) {
        this.transitionData = state;
    }
    open(component, options) {
        this.setModalContent(options === null || options === void 0 ? void 0 : options.content);
        this.stateData.next({ modalState: true, action: null, component: null });
        this.componentData = component;
        console.log(this.component);
        console.log(this.modalContent);
    }
    close(action, component = null) {
        this.setTransition(false);
        setTimeout(() => {
            // parâmetro action define se o usuário cancelou ou afirmou ao fechar o modal. false === cancelou, true === afirmou
            this.stateData.next({ modalState: false, action, component });
            this.componentData = null;
            this.stateData = new BehaviorSubject({ modalState: false, action: false, component });
        }, 100);
    }
    setModalContent(content) {
        this.modalContentData = content;
    }
}
ModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ModalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ModalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.component = null;
        this.modalContent = null;
        window.addEventListener('click', (e) => {
            var _a, _b;
            if (!e)
                return;
            if (document.getElementById('clickbox') && !((_a = document.getElementById('clickbox')) === null || _a === void 0 ? void 0 : _a.contains(e.target)) && ((_b = this.modalContent) === null || _b === void 0 ? void 0 : _b.backdropClick)) {
                this.close();
            }
        });
    }
    get transition() {
        return this.modalService.transition;
    }
    ngOnInit() {
        setTimeout(() => {
            this.modalService.setTransition(true);
            console.log(this.component);
        }, 1);
    }
    close() {
        if (this.transition) {
            this.modalService.close(false);
        }
    }
}
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ModalComponent, deps: [{ token: ModalService }], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: ModalComponent, selector: "lib-modal", inputs: { component: "component", modalContent: "modalContent" }, ngImport: i0, template: "<main [ngClass]=\"{'side-slide': modalContent?.sideSlide}\">\n    <div id=\"clickbox\" class=\"modal-content {{modalContent?.class}}\"\n        [ngStyle]=\"{'width': modalContent?.sideSlide ? '680px' : ''}\" [ngClass]=\"{'transition': transition}\">\n        <ng-container *ngComponentOutlet=\"component\"></ng-container>\n    </div>\n</main>", styles: ["main{position:fixed;background-color:#39393959;z-index:2;height:100vh;width:100%;top:0;display:flex;justify-content:center;align-items:flex-start;padding-top:50px}main.side-slide{padding-top:0;justify-content:flex-end;align-items:center}main.side-slide .modal-content{transform:translateY(0);transform:translate(680px);height:100vh;transition:.5s;border-radius:0;max-height:100vh}main .modal-content{max-width:98%;overflow:hidden;overflow-y:scroll;border:none;border-radius:12px;background-color:#fff;width:500px;transition:.1s;padding:24px;transform:translateY(50px);max-height:95vh}main .modal-content.transition{transform:translateY(0)}.lg{width:800px!important}.md-lg{width:600px!important}.xl{width:1200px!important}.sm{width:350px!important}\n"], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModuleFactory"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-modal', template: "<main [ngClass]=\"{'side-slide': modalContent?.sideSlide}\">\n    <div id=\"clickbox\" class=\"modal-content {{modalContent?.class}}\"\n        [ngStyle]=\"{'width': modalContent?.sideSlide ? '680px' : ''}\" [ngClass]=\"{'transition': transition}\">\n        <ng-container *ngComponentOutlet=\"component\"></ng-container>\n    </div>\n</main>", styles: ["main{position:fixed;background-color:#39393959;z-index:2;height:100vh;width:100%;top:0;display:flex;justify-content:center;align-items:flex-start;padding-top:50px}main.side-slide{padding-top:0;justify-content:flex-end;align-items:center}main.side-slide .modal-content{transform:translateY(0);transform:translate(680px);height:100vh;transition:.5s;border-radius:0;max-height:100vh}main .modal-content{max-width:98%;overflow:hidden;overflow-y:scroll;border:none;border-radius:12px;background-color:#fff;width:500px;transition:.1s;padding:24px;transform:translateY(50px);max-height:95vh}main .modal-content.transition{transform:translateY(0)}.lg{width:800px!important}.md-lg{width:600px!important}.xl{width:1200px!important}.sm{width:350px!important}\n"] }]
        }], ctorParameters: function () { return [{ type: ModalService }]; }, propDecorators: { component: [{
                type: Input
            }], modalContent: [{
                type: Input
            }] } });

class AngularLibModule {
}
AngularLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AngularLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AngularLibModule, declarations: [ModalComponent], imports: [CommonModule], exports: [ModalComponent] });
AngularLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AngularLibModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AngularLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ModalComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ModalComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularLibModule, ModalComponent, ModalService };
//# sourceMappingURL=lucasgomesagacode-angular-lib.mjs.map

import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ModalService {
    private transitionData;
    private stateData;
    private modalContentData;
    private componentData;
    get transition(): boolean;
    get state(): BehaviorSubject<any>;
    get component(): any;
    get modalContent(): any;
    constructor();
    setTransition(state: boolean): void;
    open(component: any, options?: {
        content: any;
    }): void;
    close(action: boolean | string, component?: any): void;
    setModalContent(content: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}

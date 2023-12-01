import { OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import * as i0 from "@angular/core";
export declare class ModalComponent implements OnInit {
    private modalService;
    component: any;
    modalContent: any;
    get transition(): boolean;
    constructor(modalService: ModalService);
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "lib-modal", never, { "component": "component"; "modalContent": "modalContent"; }, {}, never, never>;
}

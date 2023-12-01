import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/modal.service";
import * as i2 from "@angular/common";
export class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.component = null;
        this.modalContent = null;
        window.addEventListener('click', (e) => {
            if (!e)
                return;
            if (document.getElementById('clickbox') && !document.getElementById('clickbox')?.contains(e.target) && this.modalContent?.backdropClick) {
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
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ModalComponent, deps: [{ token: i1.ModalService }], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: ModalComponent, selector: "lib-modal", inputs: { component: "component", modalContent: "modalContent" }, ngImport: i0, template: "<main [ngClass]=\"{'side-slide': modalContent?.sideSlide}\">\n    <div id=\"clickbox\" class=\"modal-content {{modalContent?.class}}\"\n        [ngStyle]=\"{'width': modalContent?.sideSlide ? '680px' : ''}\" [ngClass]=\"{'transition': transition}\">\n        <ng-container *ngComponentOutlet=\"component\"></ng-container>\n    </div>\n</main>", styles: ["main{position:fixed;background-color:#39393959;z-index:2;height:100vh;width:100%;top:0;display:flex;justify-content:center;align-items:flex-start;padding-top:50px}main.side-slide{padding-top:0;justify-content:flex-end;align-items:center}main.side-slide .modal-content{transform:translateY(0);transform:translate(680px);height:100vh;transition:.5s;border-radius:0;max-height:100vh}main .modal-content{max-width:98%;overflow:hidden;overflow-y:scroll;border:none;border-radius:12px;background-color:#fff;width:500px;transition:.1s;padding:24px;transform:translateY(50px);max-height:95vh}main .modal-content.transition{transform:translateY(0)}.lg{width:800px!important}.md-lg{width:600px!important}.xl{width:1200px!important}.sm{width:350px!important}\n"], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModuleFactory"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-modal', template: "<main [ngClass]=\"{'side-slide': modalContent?.sideSlide}\">\n    <div id=\"clickbox\" class=\"modal-content {{modalContent?.class}}\"\n        [ngStyle]=\"{'width': modalContent?.sideSlide ? '680px' : ''}\" [ngClass]=\"{'transition': transition}\">\n        <ng-container *ngComponentOutlet=\"component\"></ng-container>\n    </div>\n</main>", styles: ["main{position:fixed;background-color:#39393959;z-index:2;height:100vh;width:100%;top:0;display:flex;justify-content:center;align-items:flex-start;padding-top:50px}main.side-slide{padding-top:0;justify-content:flex-end;align-items:center}main.side-slide .modal-content{transform:translateY(0);transform:translate(680px);height:100vh;transition:.5s;border-radius:0;max-height:100vh}main .modal-content{max-width:98%;overflow:hidden;overflow-y:scroll;border:none;border-radius:12px;background-color:#fff;width:500px;transition:.1s;padding:24px;transform:translateY(50px);max-height:95vh}main .modal-content.transition{transform:translateY(0)}.lg{width:800px!important}.md-lg{width:600px!important}.xl{width:1200px!important}.sm{width:350px!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ModalService }]; }, propDecorators: { component: [{
                type: Input
            }], modalContent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbHVjYXNnb21lc2FnYWNvZGUvYW5ndWxhci1saWIvc3JjL2xpYi9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9sdWNhc2dvbWVzYWdhY29kZS9hbmd1bGFyLWxpYi9zcmMvbGliL21vZGFsL21vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBUXpELE1BQU0sT0FBTyxjQUFjO0lBUXpCLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTnJDLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFNaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU87WUFDZixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUU7Z0JBQ3ZJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBWEQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUN0QyxDQUFDO0lBV0QsUUFBUTtRQUNOLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7OzJHQTdCVSxjQUFjOytGQUFkLGNBQWMsbUhDUjNCLHdWQUtPOzJGREdNLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsV0FBVzttR0FNWixTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjb21wb25lbnQ6IGFueSA9IG51bGw7XG4gIEBJbnB1dCgpIG1vZGFsQ29udGVudDogYW55ID0gbnVsbDtcbiAgZ2V0IHRyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLnRyYW5zaXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrYm94JykgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGlja2JveCcpPy5jb250YWlucyhlLnRhcmdldCkgJiYgdGhpcy5tb2RhbENvbnRlbnQ/LmJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNldFRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudCk7XG5cbiAgICB9LCAxKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKGZhbHNlKTtcbiAgICB9XG4gIH1cblxufVxuIiwiPG1haW4gW25nQ2xhc3NdPVwieydzaWRlLXNsaWRlJzogbW9kYWxDb250ZW50Py5zaWRlU2xpZGV9XCI+XG4gICAgPGRpdiBpZD1cImNsaWNrYm94XCIgY2xhc3M9XCJtb2RhbC1jb250ZW50IHt7bW9kYWxDb250ZW50Py5jbGFzc319XCJcbiAgICAgICAgW25nU3R5bGVdPVwieyd3aWR0aCc6IG1vZGFsQ29udGVudD8uc2lkZVNsaWRlID8gJzY4MHB4JyA6ICcnfVwiIFtuZ0NsYXNzXT1cInsndHJhbnNpdGlvbic6IHRyYW5zaXRpb259XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50XCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L21haW4+Il19
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ModalService {
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
        this.setModalContent(options?.content);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2x1Y2FzZ29tZXNhZ2Fjb2RlL2FuZ3VsYXItbGliL3NyYy9saWIvc2VydmljZXMvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxZQUFZO0lBdUJ2QjtRQXJCUSxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFNUYsa0JBQWEsR0FBUSxJQUFJLENBQUM7UUFtQmhDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixRQUFRLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBUTtZQUNuQyxHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDMUIsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXhCRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBWUQsYUFBYSxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksQ0FBQyxTQUFjLEVBQUUsT0FBMEI7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFHakMsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUF3QixFQUFFLFlBQWlCLElBQUk7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsbUhBQW1IO1lBQ25ILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDeEYsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFZO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7SUFDbEMsQ0FBQzs7eUdBM0RVLFlBQVk7NkdBQVosWUFBWSxjQUZYLE1BQU07MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblxuICBwcml2YXRlIHRyYW5zaXRpb25EYXRhOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc3RhdGVEYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHsgbW9kYWxTdGF0ZTogZmFsc2UsIGFjdGlvbjogZmFsc2UsIGNvbXBvbmVudDogbnVsbCB9KTtcbiAgcHJpdmF0ZSBtb2RhbENvbnRlbnREYXRhOiBhbnk7XG4gIHByaXZhdGUgY29tcG9uZW50RGF0YTogYW55ID0gbnVsbDtcblxuICBnZXQgdHJhbnNpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZURhdGE7XG4gIH1cblxuICBnZXQgY29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERhdGE7XG4gIH1cblxuICBnZXQgbW9kYWxDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLm1vZGFsQ29udGVudERhdGE7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBkb2N1bWVudC5vbmtleXVwID0gZnVuY3Rpb24gKGV2dDogYW55KSB7XG4gICAgICBldnQgPSBldnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgaWYgKGV2dC5rZXlDb2RlID09IDI3ICYmIHRoYXQuc3RhdGUudmFsdWUubW9kYWxTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGF0LmNsb3NlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc2V0VHJhbnNpdGlvbihzdGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMudHJhbnNpdGlvbkRhdGEgPSBzdGF0ZTtcbiAgfVxuXG4gIG9wZW4oY29tcG9uZW50OiBhbnksIG9wdGlvbnM/OiB7IGNvbnRlbnQ6IGFueSB9KSB7XG4gICAgdGhpcy5zZXRNb2RhbENvbnRlbnQob3B0aW9ucz8uY29udGVudCk7XG4gICAgdGhpcy5zdGF0ZURhdGEubmV4dCh7IG1vZGFsU3RhdGU6IHRydWUsIGFjdGlvbjogbnVsbCwgY29tcG9uZW50OiBudWxsIH0pO1xuICAgIHRoaXMuY29tcG9uZW50RGF0YSA9IGNvbXBvbmVudDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudCk7XG4gICAgY29uc29sZS5sb2codGhpcy5tb2RhbENvbnRlbnQpO1xuXG5cbiAgfVxuXG4gIGNsb3NlKGFjdGlvbjogYm9vbGVhbiB8IHN0cmluZywgY29tcG9uZW50OiBhbnkgPSBudWxsKSB7XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uKGZhbHNlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIHBhcsOibWV0cm8gYWN0aW9uIGRlZmluZSBzZSBvIHVzdcOhcmlvIGNhbmNlbG91IG91IGFmaXJtb3UgYW8gZmVjaGFyIG8gbW9kYWwuIGZhbHNlID09PSBjYW5jZWxvdSwgdHJ1ZSA9PT0gYWZpcm1vdVxuICAgICAgdGhpcy5zdGF0ZURhdGEubmV4dCh7IG1vZGFsU3RhdGU6IGZhbHNlLCBhY3Rpb24sIGNvbXBvbmVudCB9KTtcbiAgICAgIHRoaXMuY29tcG9uZW50RGF0YSA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlRGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3QoeyBtb2RhbFN0YXRlOiBmYWxzZSwgYWN0aW9uOiBmYWxzZSwgY29tcG9uZW50IH0pO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBzZXRNb2RhbENvbnRlbnQoY29udGVudDogYW55KSB7XG4gICAgdGhpcy5tb2RhbENvbnRlbnREYXRhID0gY29udGVudDtcbiAgfVxuXG59XG4iXX0=
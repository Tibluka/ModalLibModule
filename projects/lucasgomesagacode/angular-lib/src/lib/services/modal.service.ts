import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private transitionData: boolean = false;
  private stateData = new BehaviorSubject<any>({ modalState: false, action: false, component: null });
  private modalContentData: any;
  private componentData: any = null;

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

  constructor() {
    const that = this;
    document.onkeyup = function (evt: any) {
      evt = evt || window.event;
      if (evt.keyCode == 27 && that.state.value.modalState === true) {
        that.close(false);
      }
    };
  }

  setTransition(state: boolean) {
    this.transitionData = state;
  }

  open(component: any, options?: { content: any }) {
    this.setModalContent(options?.content);
    this.stateData.next({ modalState: true, action: null, component: null });
    this.componentData = component;
    console.log(this.component);
    console.log(this.modalContent);


  }

  close(action: boolean | string, component: any = null) {
    this.setTransition(false);
    setTimeout(() => {
      // parâmetro action define se o usuário cancelou ou afirmou ao fechar o modal. false === cancelou, true === afirmou
      this.stateData.next({ modalState: false, action, component });
      this.componentData = null;
      this.stateData = new BehaviorSubject({ modalState: false, action: false, component });
    }, 100);
  }

  setModalContent(content: any) {
    this.modalContentData = content;
  }

}

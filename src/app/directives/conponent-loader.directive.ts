import { Directive, ViewContainerRef, Input, ComponentFactory, OnInit, Output, ComponentRef, EventEmitter } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Directive({
  selector: '[appConponentLoader]'
})
export class ConponentLoaderDirective implements OnInit {

  @Input() componentFactory: ComponentFactory<any>;
  @Input() name : string;
  @Output() componentRef: ComponentRef<any>;
  constructor(private viewContainerRef : ViewContainerRef) { }

  ngOnInit(): void {
    this.componentRef = this.viewContainerRef.createComponent(this.componentFactory);
  }


}

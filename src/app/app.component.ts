import { Component, Injector, Compiler, ViewContainerRef, ViewChild, OnInit } from '@angular/core';

import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as BrowserAnimations from '@angular/platform-browser/animations';
import * as AngularForms from	'@angular/forms'
import * as RXJS from 'rxjs';
import * as RXJS_OPERATORS from 'rxjs/operators';
import * as RXJS_OBSERVABLES from 'rxjs/Observable';

declare var SystemJS: any;

import { ModuleData } from './models/module.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSelectionListChange } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'DynamicModuleLoader';
  private modules: ModuleData[];
  private componentFactoryMap = new Map<string,any>();
  
  constructor(injector: Injector,private compiler: Compiler ,private viewContainerRef : ViewContainerRef, private http: HttpClient) {
  }


  ngOnInit(): void {
    this.loadModules().subscribe(modules=>{ 
      console.log(modules);
      this.modules = modules;
    });
  }

  selectionChanged(event : MatSelectionListChange)
  {
    console.log(event);
    const moduleName = event.option.value;
    if(event.option.selected){
      const module = this.modules.find(mod =>{
        return mod.moduleName === moduleName;
      });
      if(!module){
        return;
      }
      this.load(module.location,module.moduleName,module.entryComponent);
    }else
    {
     
      if(this.componentFactoryMap.has(moduleName))
      {
        this.componentFactoryMap.delete(moduleName);
      }
    }
  }

  loadModules(): Observable<ModuleData[]> {
    return this.http.get<ModuleData[]>('./assets/modules.json');
  }




  load(location,moduleName,entryComponent) {

    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    SystemJS.set('rxjs', SystemJS.newModule(RXJS));
    SystemJS.set('rxjs/operators', SystemJS.newModule(RXJS_OPERATORS));
    SystemJS.set('rxjs/Observable', SystemJS.newModule(RXJS_OBSERVABLES));
    SystemJS.set('@angular/forms', SystemJS.newModule(AngularForms));

    // now, import the new module
    return SystemJS.import(`${location}`).then((module) => {
      console.log(module);
      return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleName}`]).then(compiled => {
        console.log(compiled);

        const componentFactory = compiled.componentFactories
          .find(e => e.componentType.name === entryComponent); // find the entry component

        if (componentFactory) {
          
          this.componentFactoryMap.set(moduleName, componentFactory);
          // componentRef.instance.data = 'Some Data';
        }
        return module;
      });
    });
  }

}

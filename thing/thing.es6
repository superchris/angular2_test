import {Component, Template} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-thing',
  bind: {
    wut: "wut"
  }
})

@Template({
  url: 'thing/thing.html'
})

// Component controller
export class Thing {
  wut;
}

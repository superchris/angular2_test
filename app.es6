import {Component, Template, bootstrap} from 'angular2/angular2';
import {ControlGroup, Control, FormDirectives } from 'angular2/forms';
import {Thing} from 'thing/thing';

// Annotation section
@Component({
  selector: 'my-foo'
})

@Template({
  url: 'foo.html',
  directives: [Thing,FormDirectives]
})

// Component controller
class MyFooComponent {
  constructor() {
    this.title = 'Some stuff';
    this.body = "other stuff";
    this.form = new ControlGroup({
      'foo': new Control('whatever')
    });
  }
}

bootstrap(MyFooComponent);

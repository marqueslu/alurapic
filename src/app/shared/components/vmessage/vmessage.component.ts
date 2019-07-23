import { Input, Component } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
    selector: 'ap-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent{
    @Input() text = '';
}
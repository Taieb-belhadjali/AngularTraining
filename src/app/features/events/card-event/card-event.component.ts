import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Eventy} from '../../../models/eventy';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
  //data ???
  @Input() event: Eventy;
  @Output() eventNotifParent:EventEmitter<Eventy>  =
    new EventEmitter();
  notifParent(e: Eventy) {
    this.eventNotifParent.emit(e);
  }
}

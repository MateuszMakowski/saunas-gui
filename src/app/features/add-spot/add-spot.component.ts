import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonFullComponent } from '../../shared/components/button-full/button-full.component';
import { ButtonTransparentComponent } from '../../shared/components/button-transparent/button-transparent.component';
import { FaqComponent } from './faq/faq.component';
import { ProcessComponent } from './process/process.component';

@Component({
  selector: 'app-add-spot',
  standalone: true,
  templateUrl: './add-spot.component.html',
  styleUrl: './add-spot.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonFullComponent,
    ButtonTransparentComponent,
    FaqComponent,
    ProcessComponent,
  ],
})
export class AddSpotComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

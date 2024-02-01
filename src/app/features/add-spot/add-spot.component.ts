import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}

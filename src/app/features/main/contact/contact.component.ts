import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
} from '@angular/core';
import { ButtonFullComponent } from '../../../shared/components/button-full/button-full.component';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';
import { ButtonFullLightComponent } from '../../../shared/components/button-full-light/button-full-light.component';
import { VisibilityService } from '../../../shared/visibility.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonFullComponent,
    ButtonTransparentComponent,
    ButtonFullLightComponent,
  ],
})
export class ContactComponent implements AfterViewInit {
  constructor(
    public visibilityService: VisibilityService,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.visibilityService.visible$.subscribe((isVisible) => {
      if (isVisible) {
        setTimeout(() => {
          this.el.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }, 100);
      }
    });
  }
}

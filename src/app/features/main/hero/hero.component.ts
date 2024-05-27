import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ButtonFullComponent } from '../../../shared/components/button-full/button-full.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonFullComponent, RouterModule],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('scrollContainer2') scrollContainer2!: ElementRef;

  private speed: number = 1;
  private intervalId!: number;

  constructor() {}

  ngAfterViewInit(): void {
    this.startScrolling(this.scrollContainer, -150);
    this.startScrolling(this.scrollContainer2, 0);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startScrolling(item: ElementRef, scrollTop: number): void {
    this.intervalId = window.setInterval(() => {
      const element = item.nativeElement;
      element.scrollTop += this.speed;

      if (element.scrollTop >= element.scrollHeight / 2) {
        element.scrollTop = scrollTop;
      }
    }, 20);
  }
}

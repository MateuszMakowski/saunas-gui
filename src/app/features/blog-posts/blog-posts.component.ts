import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTransparentComponent } from '../../shared/components/button-transparent/button-transparent.component';

@Component({
  selector: 'app-blog-posts',
  standalone: true,
  templateUrl: `./blog-posts.component.html`,
  styleUrl: './blog-posts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonTransparentComponent],
})
export class BlogPostsComponent {}

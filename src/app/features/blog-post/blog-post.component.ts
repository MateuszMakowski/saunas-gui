import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostComponent { }

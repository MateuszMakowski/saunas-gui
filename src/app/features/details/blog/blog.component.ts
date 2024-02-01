import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';
import { Article } from './article.model';

@Component({
  selector: 'details-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonTransparentComponent],
})
export class BlogComponent {
  dots = Array(4);

  articles: Article[] = [
    {
      title: 'Korzyści z regularnych sesji sauny 1',
      summary:
        'Dowiedz się, dlaczego regularne sesje sauny są korzystne dla twojego zdrowia',
      imageUrl: './../assets/sample.png',
      hashtag: 'Sauna',
      readTime: '1 min',
    },
    {
      title: 'Korzyści z regularnych sesji sauny 2',
      summary:
        'Dowiedz się, dlaczego regularne sesje sauny są korzystne dla twojego zdrowia',
      imageUrl: './../assets/sample.png',
      hashtag: 'Sauna',
      readTime: '2 min',
    },
    {
      title: 'Korzyści z regularnych sesji sauny 3',
      summary:
        'Dowiedz się, dlaczego regularne sesje sauny są korzystne dla twojego zdrowia',
      imageUrl: './../assets/sample.png',
      hashtag: 'Sauna',
      readTime: '3 min',
    },
    {
      title: 'Korzyści z regularnych sesji sauny 4',
      summary:
        'Dowiedz się, dlaczego regularne sesje sauny są korzystne dla twojego zdrowia',
      imageUrl: './../assets/sample.png',
      hashtag: 'Sauna',
      readTime: '4 min',
    },
  ];

  currentIndex = 0;

  scrollLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  scrollRight(): void {
    if (this.currentIndex < this.articles.length - 3) {
      this.currentIndex++;
    }
  }
}

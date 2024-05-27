import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { S3UploadService } from '../../../core/services/S3Upload.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent {
  constructor(private s3UploadService: S3UploadService) {}

  uploadFile(event: any) {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      this.s3UploadService.getPresignedUrl(file.name).subscribe((response) => {
        console.log(response);
        const presignedUrl = response.url;
        this.uploadToS3(presignedUrl, file);
      });
    } else {
      console.error('No file selected');
    }
  }

  private uploadToS3(presignedUrl: string, file: File) {
    console.log(file);
    fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'file.type', // Upewnij się, że typ zawartości odpowiada typowi pliku
      },
      body: file, // Obiekt pliku wybrany przez użytkownika
    })
      .then((response) => {
        if (response.ok) {
          console.log('Upload successful');
        } else {
          response.text().then((text) => console.error('Upload failed:', text));
        }
      })
      .catch((error) => console.error('Error fetching:', error));
  }
}

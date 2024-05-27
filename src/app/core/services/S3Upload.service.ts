import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class S3UploadService {
  constructor(private http: HttpClient) {}

  getPresignedUrl(fileName: string) {
    // Dostosuj baseUrl do adresu twojego API
    const baseUrl = 'http://localhost:5182/api'; // Zmień na właściwy adres URL twojego API
    return this.http.get<{ url: string }>(
      `${baseUrl}/upload/presigned-url?fileName=${fileName}`
    );
  }
}

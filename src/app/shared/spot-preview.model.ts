export interface ObiektMiniaturka {
  id: string;
  projectName: string; // Nazwa obiektu, np. nazwa hotelu lub strefy saun
  description: string; // Krótki opis obiektu i jego głównych atrakcji
  tags: string[]; // Tagi mogą zawierać słowa kluczowe związane z saunami, spa, wellness itp.
  imageUrl: string; // URL do zdjęcia obiektu
  location: string; // Lokalizacja obiektu, np. miasto lub region
  specialOffers: string; // Informacje o promocjach lub cenach (opcjonalnie)
  logoUrl: string; // URL do logo obiektu (opcjonalnie)
  bookingInfo: string; // Krótka informacja o dostępności i rezerwacji (opcjonalnie)
}

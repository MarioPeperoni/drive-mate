# Drive Mate - dokumentacja

## Charakterystyka projektu

Drive-Mate to innowacyjna platforma, która zmienia sposób, w jaki podróżujemy. Zapewnia wygodne i ekonomiczne rozwiązanie dla podróżujących, którzy chcą podzielić się przejazdem lub skorzystać z oferty miejsca w samochodzie.


Dzięki Drive-Mate podróżowanie staje się bardziej przystępne. Osoby planujące podróż mogą łatwo wystawić ogłoszenie informujące o trasie i dostępnych miejscach w samochodzie. Z kolei pasażerowie mogą wyszukać interesujące ich przejazdy i skontaktować się z kierowcami, aby zarezerwować miejsce. 

Korzyści z korzystania z Drive-Mate są obopólne. Pasażerowie mogą podróżować w niższych kosztach, dzieląc się opłatami za paliwo i drogę z kierowcą. Z drugiej strony kierowcy mogą zrekompensować sobie koszty podróży, udostępniając wolne miejsca w swoim samochodzie.

## Prawa autorskie

### Autorzy

- Mateusz Wiącek
- Grzegorz Nowak

### Licencja MIT

Licencja ta umożliwia użytkownikom swobodne korzystanie z oprogramowania, w tym jego modyfikację i rozpowszechnianie, zarówno w projektach otwartoźródłowych, jak i komercyjnych, bez większych ograniczeń. Dzięki temu modelowi licencjonowania, Drive-Mate może przyciągać szeroki zakres współtwórców i użytkowników, zachęcając do współpracy i rozwoju platformy w sposób otwarty i dostępny dla wszystkich zainteresowanych.

## Specyfikacja wymagań

## Architektura oprogramowania

| Obszar                      | Technologia/Narzędzie               |
| --------------------------- | ----------------------------------- |
| Język programowania klienta | TypeScript (_w frameworku Next.js_) |
| Język programowania serwera | C# (_w frameworku ASP.NET Core_)    |
| Framework frontend          | NEXT.JS z ReactJS                   |
| Framework backend           | ASP.NET Core                        |
| Baza danych                 | PostgreSQL (_hostowana na Neon_)    |
| Testowanie                  | Jest, React Testing Library         |
| Kontrola wersji             | Git                                 |
| Środowisko programistyczne  | Visual Studio Code                  |

## Scenariusze testowe

### Testowanie listy przejazdów

1. **Sprawdzenie listy rekordów przejazdów**

- **Opis**: Testuje czy lista rekordów przejazdów jest renderowana poprawnie.
- **Kroki**:
  1.  Wysłanie żądania GET do API `/rides`, które zwraca pustą listę przejazdów.
  2.  Renderowanie komponentu `RideRecordsList`.
- **Oczekiwany Rezultat**: Lista rekordów przejazdów jest wyrenderowana poprawnie.

2. **Wyświetlanie informacji o braku przejazdów**

- **Opis**: Testuje czy wyświetlane jest odpowiednie powiadomienie gdy lista przejazdów jest pusta.
- **Kroki**:
  1.  Wysłanie żądania GET do API `/rides`, które zwraca pustą listę przejazdów.
  2.  Renderowanie komponentu `RideRecordsList`.
- **Oczekiwany Rezultat**: Wyświetlane jest powiadomienie informujące o braku przejazdów.

3. **Wyświetlanie przejazdów po udanym zapytaniu**

- **Opis**: Testuje czy przejazdy są wyświetlane po udanym zapytaniu do API.
- **Kroki**:
  1.  Wysłanie żądania GET do API `/rides`, które zwraca listę przejazdów.
  2.  Renderowanie komponentu `RideRecordsList`.
- **Oczekiwany Rezultat**: Lista przejazdów jest wyświetlana na ekranie.

4. **Przekierowanie do szczegółów przejazdu po kliknięciu**

- **Opis**: Testuje czy użytkownik jest przekierowany do szczegółów przejazdu po kliknięciu na rekord przejazdu.
- **Kroki**:
  1.  Wysłanie żądania GET do API `/rides`, które zwraca przynajmniej jeden przejazd.
  2.  Renderowanie komponentu `RideRecordsList`.
  3.  Kliknięcie na rekord przejazdu.
- **Oczekiwany Rezultat**: Użytkownik zostaje przekierowany do strony szczegółów przejazdu.

5. **Filtrowanie przejazdów na podstawie wyszukiwania**

- **Opis**: Testuje czy przejazdy są filtrowane na podstawie wyszukiwania.
- **Kroki**:
  1.  Symulacja wprowadzenia danych do pól wyszukiwania (np. miejsce początkowe i końcowe).
  2.  Kliknięcie przycisku "Szukaj".
- **Oczekiwany Rezultat**: Lista przejazdów jest filtrowana na podstawie wprowadzonych danych wyszukiwania.

### Wyszukiwarka przejazdów

1. **Wyświetlanie karty wyszukiwania**

- **Opis**: Testuje czy karta wyszukiwania jest renderowana poprawnie.
- **Kroki**:
  1.  Renderowanie komponentu `SearchCard`.
- **Oczekiwany Rezultat**: Karta wyszukiwania jest wyrenderowana poprawnie.

2. **Wyświetlanie dwóch pól wprowadzania danych**

- **Opis**: Testuje czy karta wyszukiwania zawiera dwa pola tekstowe z odpowiednimi placeholderami.
- **Kroki**:
  1.  Renderowanie komponentu `SearchCard`.
- **Oczekiwany Rezultat**: Karta wyszukiwania zawiera dwa pola tekstowe z odpowiednimi placeholderami.

3. **Wyświetlanie przycisku wyboru daty**

- **Opis**: Testuje czy karta wyszukiwania zawiera przycisk umożliwiający wybór daty.
- **Kroki**:
  1.  Renderowanie komponentu `SearchCard`.
- **Oczekiwany Rezultat**: Karta wyszukiwania zawiera przycisk umożliwiający wybór daty.

4. **Wyświetlanie kalendarza po kliknięciu w przycisk daty**

- **Opis**: Testuje czy po kliknięciu w przycisk daty wyświetlany jest kalendarz do wyboru daty.
- **Kroki**:
  1.  Renderowanie komponentu `SearchCard`.
  2.  Kliknięcie w przycisk daty.
- **Oczekiwany Rezultat**: Po kliknięciu w przycisk daty wyświetlany jest kalendarz do wyboru daty.

5. **Filtrowanie przejazdów po wyszukaniu**

- **Opis**: Testuje czy po wysłaniu formularza wyszukiwania odpowiednie zapytanie jest przekazywane do routera.
- **Kroki**:
  1.  Wypełnienie pól wyszukiwania (np. miejsce początkowe i końcowe).
  2.  Wysłanie formularza wyszukiwania.
- **Oczekiwany Rezultat**: Po wysłaniu formularza wyszukiwania odpowiednie zapytanie jest przekazywane do routera.

6. **Wyświetlanie popovera z kalendarzem po kliknięciu w przycisk daty**

- **Opis**: Testuje czy po kliknięciu w przycisk daty wyświetla się popover z kalendarzem umożliwiającym wybór daty.
- **Kroki**:
  1.  Renderowanie komponentu `SearchCard`.
  2.  Kliknięcie w przycisk daty.
- **Oczekiwany Rezultat**: Po kliknięciu w przycisk daty wyświetla się popover z kalendarzem umożliwiającym wybór daty.

7. **Fokusowanie drugiego pola po wypełnieniu pierwszego i zatwierdzeniu formularza**

- **Opis**: Testuje czy po wypełnieniu pierwszego pola wyszukiwania i zatwierdzeniu formularza kursor zostaje przeniesiony do drugiego pola.
- **Kroki**:
  1.  Wypełnienie pierwszego pola wyszukiwania.
  2.  Zatwierdzenie formularza.
- **Oczekiwany Rezultat**: Po wypełnieniu pierwszego pola wyszukiwania i zatwierdzeniu formularza kursor zostaje przeniesiony do drugiego pola.

8. **Fokusowanie pierwszego pola po wypełnieniu drugiego i zatwierdzeniu formularza**

- **Opis**: Testuje czy po wypełnieniu drugiego pola wyszukiwania i zatwierdzeniu formularza kursor zostaje przeniesiony do pierwszego pola.
- **Kroki**:
  1.  Wypełnienie drugiego pola wyszukiwania.
  2.  Zatwierdzenie formularza.
- **Oczekiwany Rezultat**: Po wypełnieniu drugiego pola wyszukiwania i zatwierdzeniu formularza kursor zostaje przeniesiony do pierwszego pola.

9. **Przekazywanie poprawnego zapytania wyszukiwania do routera po zatwierdzeniu formularza**

- **Opis**: Testuje czy po zatwierdzeniu formularza wyszukiwania poprawne zapytanie jest przekazywane do routera.
- **Kroki**:
  1.  Wypełnienie pól wyszukiwania (np. miejsce początkowe i końcowe).
  2.  Zatwierdzenie formularza wyszukiwania.
- **Oczekiwany Rezultat**: Po zatwierdzeniu formularza wyszukiwania poprawne zapytanie jest przekazywane do routera.

import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { OfferPreview } from '../../models/offer/offerPreview.interface';
import { OfferDetails } from '../../models/offer/offerDetails.interface';
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  mockOfferPreviews: OfferPreview[] = [
    {
      offerId: 1, // Unikalny identyfikator oferty
      title: 'Przelot awionetką nad jeziorem',
      pricePerPerson: 299,
      aircraftType: 'samolot',
      imageFilename: "swietokrzyski_park_narodowy.jpg",
    },
    {
      offerId: 2,
      title: 'Widok z balonu nad miastem',
      pricePerPerson: 399,
      aircraftType: 'balon',
      imageFilename: "swietokrzyski_park_narodowy.jpg",
    },
    {
      offerId: 3,
      title: 'Lot szybowcem nad górami',
      pricePerPerson: 450,
      aircraftType: 'szybowiec',
      imageFilename: "swietokrzyski_park_narodowy.jpg",
    },
    {
      offerId: 4,
      title: 'Przelot helikopterem nad wybrzeżem',
      pricePerPerson: 600,
      aircraftType: 'helikopter',
      imageFilename: "swietokrzyski_park_narodowy.jpg",
    },
    {
      offerId: 5,
      title: 'Lot samolotem Cessna wzdłuż rzeki',
      pricePerPerson: 350,
      aircraftType: 'samolot',
      imageFilename: "swietokrzyski_park_narodowy.jpg",
    },
    {
      offerId: 6,
      title: 'Podniebna przygoda w balonie',
      pricePerPerson: 500,
      aircraftType: 'balon',
      imageFilename: "swietokrzyski_park_narodowy.jpg",
    },
    {
      offerId: 7,
      title: 'Widokowy lot nad wulkanem',
      pricePerPerson: 700,
      aircraftType: 'samolot',
      imageFilename: "swietokrzyski_park_narodowy.jpg",
    },
  ];
  mockOfferDetails: OfferDetails[] = [
    {
      offerId: 1,
      title: 'Przelot awionetką nad jeziorem',
      pricePerPerson: 299,
      remainingSeats: 8,
      aircraftType: 'samolot',
      imagePath: "swietokrzyski_park_narodowy.jpg",
      description: "Wzbogać swoje wspomnienia o niezapomniane widoki! Przelot awionetką nad malowniczym jeziorem to idealna okazja, aby podziwiać zapierające dech w piersiach krajobrazy. Z perspektywy powietrza zobaczysz błękitne wody jeziora otoczone bujną zielenią lasów oraz wzniesienia. Uczucie wolności i radości, które poczujesz podczas tego lotu, na długo pozostanie w Twojej pamięci.",
      eventOrganizerId: 101,
      eventOrganizerName: "Aero Adventures",
      eventOrganizerRating: 4.5,
      comments: [
        {
          userId: 1,
          username: 'Ferdek_kiepski_1977',
          rating: 4,
          content: 'calkiem calkiem'
        },
        {
          userId: 2,
          username: 'Janek_123',
          rating: 5,
          content: 'Niesamowite przeżycie! Lot awionetką był rewelacyjny, a widoki zapierały dech w piersiach.'
      },
      {
          userId: 3,
          username: 'Kasia_M',
          rating: 4,
          content: 'Bardzo dobrze zorganizowana wycieczka. Pilot był profesjonalny, ale mogłoby być więcej czasu na podziwianie krajobrazów.'
      },
      {
          userId: 4,
          username: 'Marek_N',
          rating: 3,
          content: 'Ciekawe doświadczenie, ale odczuwałem lekki dyskomfort podczas lotu. Mimo to, widoki były fantastyczne.'
      },
      {
          userId: 5,
          username: 'Ania_P',
          rating: 5,
          content: 'Zdecydowanie polecam tę wycieczkę! Lot był płynny, a obsługa bardzo miła. Niezapomniane chwile!'
      },
      {
          userId: 6,
          username: 'Tom_G',
          rating: 4,
          content: 'Super przygoda! Widoki z góry były oszałamiające. Chciałbym polecieć jeszcze raz!'
      },
      ],
    },
    {
      offerId: 2,
      title: 'Widok z balonu nad miastem',
      pricePerPerson: 399,
      remainingSeats: 4,
      aircraftType: 'balon',
      imagePath: "swietokrzyski_park_narodowy.jpg",
      description: "Doświadcz magii latania w balonie i odkryj miasto z zupełnie innej perspektywy. Podczas lotu unosząc się nad pięknymi budowlami, możesz podziwiać panoramę, w tym zabytki i tętniące życiem ulice. Dźwięk szumu wiatru i zapierające dech w piersiach widoki sprawią, że poczujesz się jak ptak w powietrzu. To doskonała okazja, aby uwiecznić niezapomniane chwile na zdjęciach!",
      eventOrganizerId: 102,
      eventOrganizerName: "Sky High Tours",
      eventOrganizerRating: 4.7,
      comments: [],
    },
    {
      offerId: 3,
      title: 'Lot szybowcem nad górami',
      pricePerPerson: 450,
      remainingSeats: 6,
      aircraftType: 'szybowiec',
      imagePath: "swietokrzyski_park_narodowy.jpg",
      description: "Zrelaksuj się podczas spokojnego lotu szybowcem, gdzie krajobraz górski rozwija się przed Twoimi oczami. Przeżyj niezapomniane chwile, unosząc się nad malowniczymi szczytami i dolinami, które zachwycą Cię swoim pięknem. To idealna okazja, aby oderwać się od codzienności i poczuć harmonię z naturą, jednocześnie podziwiając majestatyczne góry z lotu ptaka.",
      eventOrganizerId: 103,
      eventOrganizerName: "Mountain Gliders",
      eventOrganizerRating: 4.8,
      comments: [],
    },
    {
      offerId: 4,
      title: 'Przelot helikopterem nad wybrzeżem',
      pricePerPerson: 600,
      remainingSeats: 3,
      aircraftType: 'helikopter',
      imagePath: "swietokrzyski_park_narodowy.jpg",
      description: "Odkryj piękno wybrzeża z lotu helikopterem, poczuj się jak VIP. Podczas lotu podziwiaj krystalicznie czyste wody oceanu, piaszczyste plaże i malownicze klify, które tworzą niepowtarzalny krajobraz. Dzięki swobodnej perspektywie helikoptera, będziesz mógł odkryć ukryte zatoki i przybrzeżne skarby, które tylko nieliczni mają szansę zobaczyć.",
      eventOrganizerId: 104,
      eventOrganizerName: "Coastal Helicopters",
      eventOrganizerRating: 4.6,
      comments: [],
    },
    {
      offerId: 5,
      title: 'Lot samolotem Cessna wzdłuż rzeki',
      pricePerPerson: 350,
      remainingSeats: 10,
      aircraftType: 'samolot',
      imagePath: "swietokrzyski_park_narodowy.jpg",
      description: "Przeżyj ekscytujący lot samolotem Cessna wzdłuż malowniczej rzeki. Z wysokości będziesz mógł podziwiać nie tylko wspaniałe widoki na wodę, ale również na okoliczne lasy i wzniesienia. Każdy moment tego lotu to nowe wrażenia i emocje, które na pewno na długo pozostaną w Twojej pamięci.",
      eventOrganizerId: 105,
      eventOrganizerName: "River Flight Services",
      eventOrganizerRating: 4.4,
      comments: [],
    },
    {
      offerId: 6,
      title: 'Podniebna przygoda w balonie',
      pricePerPerson: 500,
      remainingSeats: 2,
      aircraftType: 'balon',
      imagePath: "swietokrzyski_park_narodowy.jpg",
      description: "Spędź czas w balonie, ciesząc się spokojną i malowniczą podróżą. Wznosząc się w powietrze, otworzy się przed Tobą zapierający dech w piersiach widok na okoliczne krajobrazy. To niezapomniane doświadczenie, które łączy relaks z podziwianiem natury z perspektywy ptaka, idealne na romantyczny wypad lub przygodę z przyjaciółmi.",
      eventOrganizerId: 106,
      eventOrganizerName: "Ballooning Adventures",
      eventOrganizerRating: 4.9,
      comments: [],
    },
    {
      offerId: 7,
      title: 'Widokowy lot nad wulkanem',
      pricePerPerson: 700,
      remainingSeats: 1,
      aircraftType: 'samolot',
      imagePath: "swietokrzyski_park_narodowy.jpg",
      description: "Ekscytujący lot nad majestatycznym wulkanem to doświadczenie, które dostarczy Ci niezapomnianych wrażeń. Z samolotu będziesz mógł podziwiać imponującą strukturę wulkanu oraz otaczające go krajobrazy. To nie tylko przygoda, ale także wyjątkowa szansa na zobaczenie piękna natury z perspektywy, której nie doświadczysz nigdzie indziej.",
      eventOrganizerId: 107,
      eventOrganizerName: "Volcano View Tours",
      eventOrganizerRating: 4.3,
      comments: [],
    },
  ]
  constructor() { }

  getAllOffers(): Observable<OfferPreview[]> {

    return of(this.mockOfferPreviews).pipe(delay(300));
  }
  getOfferDetailsById(offerId: number): Observable<OfferDetails> {
    // call api
    const offer = this.mockOfferDetails.find(offer => offer.offerId == offerId);
    if (!offer) {
      return throwError(() => new Error('Offer not found'));
    }
    return of(offer).pipe(delay(500));
  }
}

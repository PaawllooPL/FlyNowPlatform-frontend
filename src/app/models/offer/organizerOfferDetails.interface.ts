import { OfferClient } from "../offerClient.interface";

export interface OrganizerOfferDetails {
    flightId: number,
    title: string,
    description: string,
    pricePerPerson: number,
    remainingSeats: number,
    aircraftType: string,
    imageFilename: string,
    eventOrganizerId: number,
    eventOrganizerName: string,
    eventOrganizerRating?: number,
    address: string,
    flightDate: Date,
    clients: OfferClient[]  
}
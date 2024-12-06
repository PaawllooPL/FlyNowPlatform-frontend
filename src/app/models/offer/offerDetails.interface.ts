import { OfferComment } from "../comment/offerComment.interface";

export interface OfferDetails {
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
    comments: OfferComment[],
    canBuy: boolean,
    canComment: boolean,
    address: string,
    voivodeship: string,
    flightDate: Date,
}

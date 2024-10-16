import { OfferComment } from "../comment/offerComment.interface";

export interface OfferDetails {
    offerId: number;
    title: string;
    pricePerPerson: number;
    remainingSeats: number;
    aircraftType: string;
    imagePath: string;
    description: string;
    eventOrganizerId: number;
    eventOrganizerName: string;
    eventOrganizerRating: number;
    comments: OfferComment[];
}

export const environment = {
    apiUrl: {
        baseUrl: 'http://localhost:8080/api/v1',
        allOffers: '/offers',
        offerDetails: '/details',
        register: '/authentication/register',
        login: '/authentication/login',
        refresh: '/authentication/refresh',
        image: '/image',

        get registerUrl() {return `${this.baseUrl}${this.register}`;},
        get loginUrl() {return `${this.baseUrl}${this.login}`;},
        get refreshUrl() {return `${this.baseUrl}${this.refresh}`;},
        get allOffersUrl() {return `${this.baseUrl}${this.allOffers}`;},
        offerDetailsUrl(flightId: number) {return `${this.baseUrl}${this.allOffers}/${flightId}${this.offerDetails}`;},
        offerImageUrl(imageFilename: string){return `${this.baseUrl}${this.image}/${imageFilename}`;},
    },
    appUrl: {
        offersList: '/offers',
    },
};

import { writeFile } from 'node:fs/promises';

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error('API_URL is not set');
}
await writeFile(
  'src/environments/environment.prod.ts',
  `
export const environment = {
  apiUrl: {
    baseUrl: '${apiUrl}',
    allOffers: '/offers',
    filteredOffers: '/offers/filtered',
    offerDetails: '/details',
    register: '/authentication/register',
    login: '/authentication/login',
    refresh: '/authentication/refresh',
    offerImage: '/image',
    createOffer: '/offers/create',
    buy: '/buy',
    createCompany: '/company/create',
    userOffers: '/user-offers',
    organizerOffers: '/organizer-offers',
    addComment: '/comments/add',

    get registerUrl() {return \`\${this.baseUrl}\${this.register}\`;},
    get loginUrl() {return \`\${this.baseUrl}\${this.login}\`;},
    get refreshUrl() {return \`\${this.baseUrl}\${this.refresh}\`;},
    get allOffersUrl() {return \`\${this.baseUrl}\${this.allOffers}\`;},
    get filteredOffersUrl() {return \`\${this.baseUrl}\${this.filteredOffers}\`;},
    get createOfferUrl(){return \`\${this.baseUrl}\${this.createOffer}\`;},
    get createCompanyUrl(){return \`\${this.baseUrl}\${this.createCompany}\`;},
    get userOffersUrl(){return \`\${this.baseUrl}\${this.allOffers}\${this.userOffers}\`;},
    get organizerOffersUrl(){return \`\${this.baseUrl}\${this.allOffers}\${this.organizerOffers}\`;},
    get addCommentUrl(){return \`\${this.baseUrl}\${this.addComment}\`;},
    
    offerDetailsUrl(flightId: number) {return \`\${this.baseUrl}\${this.allOffers}/\${flightId}\${this.offerDetails}\`;},
    organizerOfferDetailsUrl(flightId: number) {return \`\${this.baseUrl}\${this.allOffers}\${this.organizerOffers}/\${flightId}\${this.offerDetails}\`;},
    offerImageUrl(imageFilename: string){return \`\${this.baseUrl}\${this.offerImage}/\${imageFilename}\`;},
    buyOfferUrl(flightId: number) {return \`\${this.baseUrl}\${this.allOffers}/\${flightId}\${this.buy}\`;},
  },

  appUrl: {
    offersList: '/offers',
    organizerOffersList: '/organizer-offers',
    account: '/account',

    generateOfferDetailsUrl(flightId: number){return \`\/\${this.offersList}\/\${flightId}\`},
    generateOrganizerOfferDetailsUrl(flightId: number){return \`\/\${this.account}\${this.organizerOffersList}\/\${flightId}\`},
    },
}
`
);

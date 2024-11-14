export const environment = {
    apiUrl: {
        baseUrl: 'http://localhost:8080/api/v1',
        offer: '/offers',
        offerDetails: '/details',
        register: '/authentication/register',

        get registerUrl() {return `${this.baseUrl}${this.register}`;}
    },
    appUrl: {
        offersList: '/offers',
    },
};

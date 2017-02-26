export default function($http) {
    return {
        fetchStages() {
            return $http({
                url: '/api/stages',
                method: 'GET'
            }).then(res => res.data);
        },
        getCountries() {
            return $http({
                url: '/api/countries',
                method: 'GET'
            }).then(res => res.data);
        }
    };
}
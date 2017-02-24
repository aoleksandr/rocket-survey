'use strict';

export default function($http) {
    return {
        fetchStages() {
            return $http({
                url: './api/stages',
                method: 'GET'
            }).then(res => res.data);
        }
    };
}
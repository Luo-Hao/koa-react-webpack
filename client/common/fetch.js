/**
 * Created by luohao on 2017/6/23.
 */

import fetch from 'isomorphic-fetch';


export default {
    get: (options) => {
        fetch(options.url)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(stories) {
                options.callback(stories);
            });
    },


    post: (options) => {
        fetch(options.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(options.body)
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(stories) {
                options.callback(stories);
            });
    }
}

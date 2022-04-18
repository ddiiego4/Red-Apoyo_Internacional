import axios from 'axios';
import React from 'react'

import Cookies from 'universal-cookie';

/**
 * This function send new comment what user host or traveller the cookies verfic the values
 */
function NewComment(id_lease, status) {
    const cookie = new Cookies()
    const DbUrl = `https://isnft-prod.azurewebsites.net/api/leases/score/${id_lease}`;

    let idowner = cookie.get("id_usr_tok");


    const heade = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idowner}`
    }

    axios
        .put(DbUrl, {
            "comment": "Very good attention",
            "score": 500
        }, {
            headers: heade
        }
        )
        .then((response) => {
            console.log(response)
            return 0;
        })
        .catch((err) => {
            console.log(err)
            return 1;
        })
}

export default NewComment;
import axios from "axios";
import React, { useEffect, useState } from "react";

const Hi = (props) => {

    const [sneaker, setSneaker] = useState([])


      useEffect(()=>{
        axios.request(options)
        .then((res)=>{
          setSneaker(res.data.results);
        })
        .catch(err => console.log(err))
      })


    const options = {
    method: 'GET',
    url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
    params: {limit: '10'},
    headers: {
        'X-RapidAPI-Key': '70ee7b8814mshc7029aa8ced2e04p18ea3ejsn3deae91b6b82',
        'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
    }
    };

    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error);
    // }

    return (
        <div>
            <h2>Hello</h2>
                {
                    sneaker.map((sneak, i)=>(
                        <img src={sneak.image} alt="img" />
                    ))
                }
        </div>
    )
}

export default Hi;
import React, { Component } from 'react';
import GoogleMaps from "google-map-react";
export default class Maps extends Component {
    render() {
        return (
            <div className='container'>
                 <GoogleMaps
                    apiKey={"AIzaSyBwagwxR6PPGzFqcl-NG4FPVextZr1Nsds"} 
                    style={{ height: "500px", width: "370px" }}
                    zoom={10}
                    center={{
                        lat: 40.423765,
                        lng: -3.664428,
                    }}
                    markers={[
                         {lat: 40.423765,
                          lng: -3.664428,}
                        ]}
                    />
            </div>
        );
    }
}

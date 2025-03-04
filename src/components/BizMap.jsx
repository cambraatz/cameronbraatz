import React, { useEffect } from "react";

const BizMap = () => {
    useEffect(() => {
        if (!window.google) {
            const script = document.createElement("script");
            //script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBSJedPL8qN_R91kPRvrRkZ0t_2PpRaYTA`;
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBSJedPL8qN_R91kPRvrRkZ0t_2PpRaYTA&libraries=marker&v=beta`;
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            document.body.appendChild(script);
        } else {
            initMap();
        }
    }, []);
    
    async function initMap() {
        const { Map } = await window.google.maps.importLibrary("maps");
        const { AdvancedMarkerElement, PinElement } = await window.google.maps.importLibrary("marker");

        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 39.9908, lng: -102.0364 },
            zoom: 4
        });;

        const manufac_pin = new PinElement({
            background: "#FBBC04",
            borderColor: "#137333",
            glyphColor: "white",
        });

        const businesses = [
            { name: "Surly Brewing", lat: 44.9616, lng: -93.1776, address: "716 Prior Ave N, St Paul MN 55104" },
            { name: "Maletto Packaging", lat: 44.8679, lng: -91.4722, address: "2715 Hogarth Street, Eau Claire WI 54703" },
            { name: "Aster Beverage / Big Watt", lat: 45.1059, lng: -92.5495, address: "1280 Madison Ave, New Richmond, WI 54017" },
            { name: "Can Pack", lat: 40.1486, lng: -85.4140, address: "2451 W Fuson Rd, Muncie, IN 47302" },
            { name: "Fair State Brewing / Chill State", lat: 44.9694, lng: -93.1865, address: "2075 Ellis Ave, Door 32, St Paul, MN 55114" },
            { name: "Spirited Brands / Teabird", lat: 44.9694, lng: -93.1865, address: "2075 Ellis Ave, Door 32, St Paul, MN 55114" },
            { name: "Gigli, LLC", lat: 44.8846, lng: -93.0472, address: "422 11th Ave South, St Paul, MN 55378" },
            { name: "DRMZ Investments", lat: 35.4729, lng: -97.6005, address: "520 N. Meridian Ave, Oklahoma City, OK 73107" },
            { name: "Botanical Science Labs", lat: 33.6831, lng: -112.0890, address: "1225 W Deer Valley Road, Phoenix, AZ 85027" },
            { name: "Cycling Frog / Lazarus", lat: 45.5568, lng: -122.4902, address: "4630 NE 166th Ave, Ste 100, Portland, OR 97230" },
            { name: "LOON Juice", lat: 43.7092, lng: -92.4739, address: "78757 MN-16, Spring Valley, MN 55975" },
            { name: "LOON Juice", lat: 43.7092, lng: -92.4739, address: "78757 MN-16, Spring Valley, MN 55975" },
        ];
    
        businesses.forEach(function(biz) {
            var marker = new window.google.maps.Marker({
                position: { lat: biz.lat, lng: biz.lng },
                map: map,
                title: biz.name,
                content: manufac_pin.element,
                gmpClickable: true,
            });
    
            var info = new window.google.maps.InfoWindow({
                content: `<b>${biz.name}</b><br>${biz.address}`
            });
    
            marker.addListener('click', () => {
                info.close();
                info.open(map, marker);
            });
        });
        return;
    }

    return (
        <>
            <div id="map" style={{ width: "100%", height: "500px" }}></div>
        </>
    );
};

export default BizMap;
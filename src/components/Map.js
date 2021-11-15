import './Map.css';
import React, { useRef, useEffect } from "react";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import * as locator from "@arcgis/core/rest/locator";
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";

function Map(props) {

    const mapDiv = useRef(null);
  
    useEffect( () => {
      if (mapDiv.current) {
  
        esriConfig.apiKey = "AAPK662e36367e8e4b7cbabd6df1a6fe229dT1fDOpYUgOa0vdQTa61tIJX3nhxlCu2JVaCD63f-kl-t6TxAfhbqZDlfugT78yqX";
  
      const map = new WebMap({
        portalItem: {
          id: "aa1d3f80270146208328cf66d022e09c"
        }
      });
  
      const view = new MapView({
        container: mapDiv.current,
        map: map,
        constraints: {
          snapToZoom: false
        }
      });
  
      view.popup.actions = [];
  
      view.when(()=>{
  
        const locatorUrl = "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";
  
  
        const params = {
          address: {
            "address": props.data.postal + " Singapore"
          },
    
        }
  
        locator.addressToLocations(locatorUrl, params).then((results) => {
          showResult(results);
        });
  
  
        function showResult(results) {
          if (results.length) {
            console.log("results is:", results)
            const result = results[0];
            console.log(result.address)
            view.graphics.add(new Graphic({
                symbol: {
                  type: "simple-marker",
                  color: "#000000",
                  size: "8px",
                  outline: {
                    color: "#ffffff",
                    width: "1px"
                  }
                },
                geometry: result.location,
                attributes: {
                  title: props.data.name,
                  address: result.address,
                  score: result.score
                },
                popupTemplate: {
                  title: "{title}",
                  content: props.address
                  // content: result.address + "<br><br>" + result.location.longitude.toFixed(5) + "," + result.location.latitude.toFixed(5)
                }
              }
            ));
            if (results.length) {
              const g = view.graphics.getItemAt(0);
              view.popup.open({
                features: [g],
                location: g.geometry
              });
            }
            view.goTo({
              target: result.location,
              zoom: 18
            });
          }
        }
      });
  
      }
    }, [])
    
  
      
  
    return (
      <div className="mapDiv" ref={mapDiv}></div>
    );
  }
  
  export default Map;
import { GeoJSON, LayersControl} from "react-leaflet";
import { useRef} from "react";

export const SenateLayer = ({data}) => {

    const geoJsonRef = useRef();

    const onEachClick = (feature, layer) => {
        console.log("test");

        const District = feature.properties.DISTRICT;
        const Population = feature.properties.POPULATION;
        const Populationstr = Population.toLocaleString("en-US");

        const CVA = feature.properties.CVAP_19;
        const CVAstr = CVA.toLocaleString("en-US");

        const HSP = feature.properties.HSP_CVAP_1;
        const HSPstr = HSP.toLocaleString("en-US");

        const  AA = feature.properties.DOJ_NH_BLK;
        const AAstr = AA.toLocaleString("en-US");

        const  WHT = feature.properties.NH_WHT_CVA;
        const WHTstr = WHT.toLocaleString("en-US");

        const  ASN = feature.properties.DOJ_NH_ASN;
        const ASNstr = ASN.toLocaleString("en-US");

        const Party = feature.properties.Party;
        const RegVoters = feature.properties.RegVoters;
        const Baseline = feature.properties.Baseline;

        const Name = feature.properties.Name;

        layer.bindPopup(
            "Senate District: <b>" + District + "</b>" +
            "<br>Incumbent: " + Name +
            "<br>Party :" +  Party + 
            "<br>Registered Voters : " + RegVoters +
            "<br>Registration Baseline : " + Baseline +
            "<hr>Population: " + Populationstr +
            "<br>Citizens of Voting Age (CVA): " + CVAstr +
            "<br>Hispanic CVA: " + HSPstr + 
            "<br>African American CVA: " + AAstr +
            "<br>Asian CVA: " + ASNstr+ 
            "<br>White CVA: " + WHTstr
          );


          layer.on({ click: handleFeatureClick });

    }

    const handleFeatureClick = (e) => {
        if (!geoJsonRef.current) return;
        geoJsonRef.current.resetStyle();
    
        const layer = e.target;
    
        layer.setStyle({ color: "yellow" });
      };

      const senateStyle = ((feature)=> {

       
        if(feature.properties.Party === "(R)") {
            return({color:"red"}) }

        if(feature.properties.Party === "(D)") {
            return({color:"blue"}) }

        if(feature.properties.Party === "(NPP)") {
            return({color:"black"}) }  
            
        

     })

    const layer = (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        style = {senateStyle}
    ></GeoJSON>)

    return (
    <LayersControl.Overlay name="Senate   ">{layer}</LayersControl.Overlay>
    )
}
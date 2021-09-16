import React from 'react';
import './Hydro.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";



function Hydroapp() {
  return (
    <div className='canvas'>
    
      <TransformWrapper
      initialScale={1.5}
      initialPositionX={-950}
      initialPositionY={-1550}
      minScale= {1.2}
      maxScale={3}
      centerZoomedOut={true}
      limitToBounds={true}
    >
      {({ zoomIn, zoomOut, resetTransform, easeOut,...rest }) => (
          <React.Fragment>

              <div className="tools">
                <button className="button-hydro" style={{color:"black"}} onClick={() => zoomIn(0.4,3000,easeOut)}>+</button>
                <button className="button-hydro" style={{color:"black"}} onClick={() => zoomOut(0.4,3000,easeOut)}>-</button>
                <button className="button-hydro" style={{color:"black"}} onClick={() => resetTransform()}>INTRO</button>
              </div>
            
            <div className="canvas">
              
              
            <TransformComponent
            wrapperStyle={{ maxWidth: "100%", maxHeight: "100vh" }} 
            >

                  <div className="img"></div>

                  <div className="point-At_txt">+</div> 
                  <div className="cova-label">COVA</div> 
                  <div className="box-Hy_txt">
                    <div className="txt-Hy_txt">Val d’Agri is rich in surface and underground hydric resources. While sitting on the biggest oil reservoirs of continental Europe, the area also sits on one of the biggest aquifers of Italy.The 660 km2 oil field hosts 23 water bodies,over 650 springs and the Pertusillo freshwater reservoir. Pertusillo is an artificial lake with a capacity of 155 Mcm that provides water to irrigate over 35 000 hectares of cultivated land and drinkable water for Basilicata and Puglia. Pollution phenomena derived from oil extraction including oil spills, leaks from pipes and tanks, wastewater reinjection, rainwater runoff of deposited hydrocarbon molecules, compromise the chemical and physical characteristics both of the surface water bodies and of the groundwater flows. Moreover, the geographical distribution of the extraction infrastructures in the region,affects directly the main water resources.The Val d’Agri Oil Center is located less than 8 km upstream from the Pertusillo freshwater reservoir, just like the Costa Molina 2 reinjection well and other active wells. Pollutants detected in the water over the years include hydrocarbons, phosphorus, nitrogen and other pollutants that are detrimental to the ecosystem balance and make water not compatible with potable use. Monitoring by ARPAB hoewer, is infrequent and insufficient to determine temporal variability of water quality, Polluting molecules might sediment at the bottom of water bodies or move with the flows of water, displaced and made unmonitored. A number of detectable anomalies including fish deaths, algal blooms, black stains, paddles of noisome sludge visually communicate otherwise under the radar events of water pollution. The intrinsic characteristic of non fixity of water troubles the monitoring protocols and although such phenomena are not always traceable in terms of causation, a number of scientific studies has verified the presence of hydrocarbons concurrently to events and operations attributable to Eni extractive operations in Val d’Agri.The morphological fluidity of water and its entanglement with oil is what allows for the displacement and distribution of  industrial waste but also what brings back to the surface and to the visible the traces of extractive toxicity in the area.</div>
                    <div className="cit-Hy_txt"><b>Sources</b><br /><br />Albina Colella. “Hydrocarbons and metals in waters and sediments of the pertusillo lake, Italy.” Fresenius Environmental Bulletin. 21. 3003-3011. (2012).<br /><br /><a href="https://www.e-flux.com/architecture/liquid-utility/259651/living-with-aquifers/">Andrea Ballesterio, “Living with aquifers.”, e-flux architecture, July 2019</a><br /><br />Gabriella Cauzillo, Laura Gori, Maria Vincenza Liguori, “Sorveglianza sanitaria delle popolazioni residenti nelle aree regionali di estrazione petrolifera _ Relazione e proposte di sviluppo delle attività”, Regione Basilicata, 2010.<br /><br /><a href="https://www.terredifrontiera.info/lago-del-pertusillo/">Giorgio Santoriello, “La goccia che fa traboccare l’invaso”, Terre di Frontiera, June 30, 2017</a><br /><br /><a href="https://www.wateronline.info/2015/03/04/basilicata-terra-di-petrolio-ma-soprattutto-dacqua-sulla-diga-del-pertusillo-incombe-pero-un-grave-rischio-dinquinamento-da-oro-nero/">“Basilicata: terra di petrolio ma soprattutto d’acqua”, Water(on)line,Mar 4, 2015</a></div>
                  </div>

                  <div className="point-Hp_bub">+</div> 

                  <div className="label-viggiano">VIGGIANO</div> 
                  <div className="label-tramutola">TRAMUTOLA</div> 
                  <div className="label-villa">VILLA D'AGRI</div> 
                  <div className="label-lago">LAGO DEL PETRUSILLO</div>  


            </TransformComponent>
            </div>

          </React.Fragment>
        )}
        </TransformWrapper>

    </div>
  );
}


export default Hydroapp;
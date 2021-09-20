import React from 'react';
import './Hydro.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ReactPlayer from 'react-player';
import Ha1pdf1 from './Ha1pdf1';
import Ha1pdf2 from './Ha1pdf2';
import Ha1pdf3 from './Ha1pdf3';
import Ha1Arp1 from './Ha1Arp1';
import Ha1Arp2 from './Ha1Arp2';
import Ha2pdf1 from './Ha2pdf1';
import Ha2pdf2 from './Ha2pdf2';
import Ha2pdf3 from './Ha2pdf3';
import Hapaper1 from './Hapaper1';
import Hapaper2 from './Hapaper2';



function Hydroapp() {
  return (
    <div className='canvas'>
    
      <TransformWrapper
      initialScale={1.5}
      initialPositionX={-950}
      initialPositionY={-1550}
      minScale= {1.2}
      maxScale={3.5}
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
                  <div className="Hp_bub1"></div>
                  <div className="Hp_bub2"></div>
                  <div className="Hp_bub3"></div>
                  <div className="Hp_bub4"></div>
                  <div className="video-Hy_video2"><ReactPlayer width={'200px'} height={'206px'}url='https://www.youtube.com/watch?v=6MKGrPtlrHc&t=161s' /></div>
                  <div className="box-Hv2_txt">
                    <div className="txt-Hv2_txt"><b>Natural spring of Tramutola</b><br /><br />In the springs of Tramutola oil and water emerge together in the stream in the woods not far from the village.The natural emerging of hydrocarbons prompted research and drilling at the beginning of the 20th century by Agip, the National Oil company at the time. Agip exploited the Tramutola oil field by drilling 47 wells, 26 of which were productive in the period 1936-1943. The field was officially closed in 1959.The presence of oil in the spring varies over the years, with different coloration and gaseous bubbles that characterize the water stream. Such coexistence of hydrocarbons and water on the earth surface has been used by extractive corporations to justify histories of geological exploitation by describing Val d’Agri as the “land of energy by nature”.<br /><br />Video by Mimmo Nardozza, Images by A.Giocoli<br /><a href="https://www.cuorebasilicata.it/affioramenti-naturali-di-idrocarburi/">https://www.cuorebasilicata.it/affioramenti-naturali-di-idrocarburi/</a></div>
                  </div> 

                  <div className="point-Ha1">+</div> 
                  <div className="Ha1_1"></div>
                  <div className="Ha1_2"></div>
                  <div className="Ha1_3"></div>
                  <div id="Ha1pdf1">
                    <Ha1pdf1/>
                  </div>
                  <div id="Ha1pdf2">
                    <Ha1pdf2/>
                  </div>
                  <div id="Ha1pdf3">
                    <Ha1pdf3/>
                  </div>
                  <div className="box-Ha1_txt">
                    <div className="txt-Ha1_txt"><b>Analysis by Cova Contro: hydrocarbons in the spring</b><br /><br />During the onset of an anomalous black spot near the Agri river and the Pertusillo lake connection point, the association Cova Contro commissioned, with the collaboration of two local inhabitants, the analysis of a water sample of the local Casuriedd spring, located in an intermediate position between the Val d’Agri Oil Center and Pertusillo Lake.The results highlighted high levels of hydrocarbons and nitrogen in the drinking water, with hydrocarbon parameters that would be four times the regulated legal threshold for spring waters.<br /><br /><a href="https://covacontro.org/idrocarburi-nella-sorgente-tra-cova-e-pertusillo-a-casuriedd-grumento-anche-livelli-di-azoto-elevati-ma-siamo-in-attesa-di-altre-analisi"> https://covacontro.org/idrocarburi-nella-sorgente-tra-cova-e-pertusillo-a-casuriedd-grumento-anche-livelli-di-azoto-elevati-ma-siamo-in-attesa-di-altre-analisi/</a></div>
                  </div> 
                  <div className="video-Hy_video1"><ReactPlayer width={'200px'} height={'206px'}url='https://www.youtube.com/watch?v=6MKGrPtlrHc&t=161s' /></div>
                  <div className="video-Hy_video3"><ReactPlayer width={'200px'} height={'206px'}url='https://www.youtube.com/watch?v=6MKGrPtlrHc&t=161s' /></div>
                  <div className="box-Hv1_txt">
                    <div className="txt-Hv1_txt"><b>Lieutenant Giuseppe di Bello</b><br /><br />In January 2010, lieutenant of the provincial police Giuseppe di Bello and Maurizio Bolognetti, leader of the Lucanian Radical Party, self-financed independent analyses to shed light on the state of health of Val d’Agri waters and Pertusillo Lake. From the analysis biological and chemical pollutants attributable to industrial operations of oil extraction and wastewater reinjection emerged and Di Bello informed the press and the Prosecutor's Office. A file was opened by the prosecutor against Di Bello : the lieutenant was sentenced on appeal of the crime of disclosure of official secrecy, suspended and later returned to service as a guard at the Provincial Museum of Potenza.In 2018 the Supreme Court finally annulled the sentences in first and second degree. In this video from 2013, Giuseppe Di Bello shows the phenomena of pollution affecting the land above the Pertusillo lake and the water reservoir.<br /><br /><a href="https://www.basilicata24.it/2018/12/sentenza-assoluzione-bello-un-processo-non-avrebbe-mai-dovuto-celebrato-61081/">https://www.basilicata24.it/2018/12/sentenza-assoluzione-bello-un-processo-non-avrebbe-mai-dovuto-celebrato-61081/</a></div>
                  </div> 

                  <div id="Ha1Arp1">
                    <Ha1Arp1/>
                  </div>
                  <div id="Ha1Arp2">
                    <Ha1Arp2/>
                  </div>
                  <div className="box-HaArp_txt">
                    <div className="txt-HaArp_txt">Following the Oil Spill from the Val d’Agri Oil Center in February 2017, ARPAB set up a monitoring system based on a network of piezometers inside and outside the plant to monitor contamination of surface and underground water.The sampling highlighted the contamination of underground water and the migration of contaminants through the water network.In face of non-fulfillment and delays by Eni with respect to the provisions imposed by the Basilicata Region aimed at stopping the diffusion of pollutants, the regional council approved the suspension of all the activities of the Viggiano Oil Center for 90 days.<br /><br /><a href="https://www.regione.basilicata.it/giunta/site/giunta/department.jsp?dep=100050&area=3027479&level=1">https://www.regione.basilicata.it/giunta/site/giunta/department.jsp?dep=100050&area=3027479&level=1</a></div>
                  </div> 

                  <div className="point-Ha2">+</div> 
                  <div className="Ha2_1"></div>
                  <div className="Ha2_2"></div>
                  <div className="Ha2_3"></div>
                  <div id="Ha2pdf1">
                    <Ha2pdf1/>
                  </div>
                  <div id="Ha2pdf2">
                    <Ha2pdf2/>
                  </div>
                  <div id="Ha2pdf3">
                    <Ha2pdf3/>
                  </div>
                  <div className="video-Ha2"><ReactPlayer width={'200px'} height={'206px'}url='https://www.youtube.com/watch?v=aQe6wYzQHok&t=1s' /></div>

                  <div className="point-Ha">+</div> 
                  <div id="Hapaper1">
                    <Hapaper1/>
                  </div>
                  <div id="Hapaper2">
                    <Hapaper2/>
                  </div>
                  <div className="box-Hapaper_txt">
                    <div className="txt-Hapaper_txt"><b>Two scientific studies on Pertusillo Lake</b><br /><br />A number of scientific studies has been confirming phenomena of hydrocarbon contamination in the Pertusillo Freshwater reservoir over the years. The first one, by Prof. Albina Colella and Maria R. D'Orsogna, was published in 2013 and sampled water and subaqueous surface sediments from Lake Pertusillo, identifying and quantifying metals and hydrocarbons in water samples and in subaqueous grab sediment samples. With values exceeding the threshold limits of Italian legislation, when present. The study also identifies asymmetry in concentration between the subaqueous lake margins, with higher concentration in the margin interfered by oil-producing operations. The second study, published in 2021, studied water samples collected from Lake Pertusillo 10 months prior to and 3 months after the oil spill accident of 2017. The presence of hydrocarbons was verified and the analysis revealed specialized successional patterns of lake microbial communities that were potentially capable of degrading complex hydrocarbons.<br /><br /><a href="https://www.academia.edu/31259174/HYDROCARBON_CONTAMINATION_IN_WATERS_AND_SEDIMENTS_OF_THE_PERTUSILLO_FRESHWATER_RESERVOIR_VAL_DAGRI_SOUTHERN_ITALY">https://www.academia.edu/31259174/</a><br /><a href="https://pubmed.ncbi.nlm.nih.gov/33871774/">https://pubmed.ncbi.nlm.nih.gov/33871774/</a></div>
                  </div> 

                  <div className="point-Ha4">+</div> 
                  <div className="Ha4_1"></div>
                  <div className="Ha4_2"></div>
                  <div className="Ha4_3"></div>
                  <div className="Ha4_4"></div>
                  <div className="box-Ha4_txt">
                    <div className="txt-Ha4_txt"><b>Analysis by Cova Contro: algal bloom</b><br /><br />After a green spot was photographed by several citizens on the surface of the Pertusillo lake in the first half ofJune 2019, Cova Contro collected a water sample and had it analyzed by a laboratory in Roma. The results confirmed abundant flowering of coelastrum microsporum, a type of green algae different from the dinoflagellates algae studied during the oil spill from the Oil Center in 2017. According to the laboratory report green dinoflagellate algae are directly linked to the presence of hydrocarbons and nitrogen in the reservoir.<br /><br /><a href="https://covacontro.org/fioritura-algale-nel-pertusillo-alti-i-tenori-di-clorofilla-a-ed-abbondanti-le-alghe-verdi">https://covacontro.org/fioritura-algale-nel-pertusillo-alti-i-tenori-di-clorofilla-a-ed-abbondanti-le-alghe-verdi/</a></div>
                  </div> 


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
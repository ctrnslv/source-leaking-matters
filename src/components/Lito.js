import React from 'react';
import './Lito.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ReactPlayer from 'react-player';
import Li_doc1 from './Li_doc1';
import Li_doc2 from './Li_docu2';
import Li_doc3 from './Li_docu3';
import Li_paper1 from './Li_paper1';



function Litoapp() {
  return (
    <div className='canvas'>

      <TransformWrapper
      initialScale={1.5}
      initialPositionX={-850}
      initialPositionY={-1180}
      minScale= {1.2}
      maxScale={3}
      centerZoomedOut={true}
      limitToBounds={true}
    >
      {({ zoomIn, zoomOut, resetTransform, easeOut,...rest }) => (
          <React.Fragment>

              <div className="tools">
                <button className="button-lito" style={{color:"black"}} onClick={() => zoomIn(0.4,3000,easeOut)}>+</button>
                <button className="button-lito" style={{color:"black"}} onClick={() => zoomOut(0.4,3000,easeOut)}>-</button>
                <button className="button-lito" style={{color:"black"}} onClick={() => resetTransform()}>INTRO</button>
              </div>

            <div className="canvas">


            <TransformComponent
            wrapperStyle={{ maxWidth: "100%", maxHeight: "100vh" }}
            >

                  <div className="img"></div>

                  <div className="point-At_txt">+</div>
                  <div className="cova-label">COVA</div>
                  <div className="box-Li_txt">
                    <div className="txt-Li_txt">In Basilicata 70% of the soil is subject to exploration license. Val d’Agri, falling for its entirety within the Val d’Agri oil concession, has been explored by the national oil companies Agip and Eni since the beginning of the 19th century, and has been pierced by hundreds of wells. Today a network of active and inactive wells perforate the soil surface both vertically and horizontally, reaching a depth of over 5000 meters to pump up hydrocarbons and direct oil to the network of pipes and trucks transporting it to the the Oil Center, and later to the refineries in Taranto. The infrastructures for the extraction of oil have been recognized to enhance seismicity in the area by a number of scientific studies, causing episodes of industrially induced microseismicity and altering the tectonic motions of the Apennine ridge. Nevertheless, studies in the geophysical, seismological and geochemical fields performed by Eni and the National Institute of Geophysics and Volcanology (Ingv) in Val d'Agri have never been published, and are classified as property of Eni. Moreover, the drilling of wells in Val d'Agri involves the production of muds and drilling fluids with a chemical composition that still remains under industrial secrecy. Such muds containing mercury, cadmium, barium, chemical additives such as trichloromethane and other toxic fluids are disposed of by reinjecting them in the ground. Public monitoring agencies struggle to publish environmental data resulting from soil and water sampling, even if prescribed by national laws. Even if the trial for environmental disaster that ended in 2021 has confirmed a contamination of 26,000 mq of soil around the Oil Center and the reinjection bby Eni of more than 850,000 tons of illegally classified waste at the Costa Molina 2 well, many more toxic flows are produced daily through the process of oil extraction. Underground movements of water displace industrial polluting particles permeating the soil layers and toxic sludge is brought to the surface of cultivated fields in the areas affected by wells. Efforts to dispose of processed hydrocarbon molecules by hiding them under the earth crust, out of sight, fail as the interconnectedness of matter brings back the altered oil molecules of the reservoir and the polluting excess of the extraction industry.</div>
                    <div className="cit-Li_txt"><b>Sources</b><br /><br /><br /><a href="https://covacontro.org/arpab-ancora-in-alto-mare-piu-debole-dei-controllati/">“Arpab ancora in alto mare, più debole dei controllati”, Cova Contro, December 2, 2020</a><br /><br /><a href=" https://valori.it/centro-eni-in-val-dagri-cronaca-di-un-disastro-ambientale/">“Centro ENI in Val d’Agri: cronaca di un disastro ambientale”, Valori, accessed September 09</a><br /><br /><a href="https://discardstudies.com/?s=toxicity&orderby=relevance&order=DESC">Discard Studies, accessed September 09, 2021</a><br /><br /><a href="https://www.facebook.com/osservatoriopopolarevaldagri/">Osservatorio Popolare per la Val d’Agri, accessed September 4, 2021</a><br /><br /><a href="https://www.e-gazette.it/sezione/energia/sentenza-tribunale-potenza-condanna-eni-inquinamento-centro-oli-basilicata">“La sentenza. Il Tribunale di Potenza condanna Eni per l’inquinamento del Centro Oli in Basilicata”, e-gazzete, March 15, 2021</a></div>
                  </div>


                  <div className="point-Li_video1">+</div>
                  <div className="video-Li_video1"><ReactPlayer width={'400px'} url="https://www.youtube.com/embed/GbikuFfeOsc" /></div> 
                  <div className="box-Li_video1">
                    <div className="txt-Li_video1"><b>Interview with Massimo Miranda, 05.07.2021</b><br /><br />Mr. Miranda is a farmer and a butcher running his farm with his mother on the outskirts of the industrial area where the Val d’Agri Oil Center is located. After the 400 tons oil spill from the storage tanks of the Oil Center in 2017, the use of part of his land for pasture and access to water in his farm was forbidden by municipal order. As of today, after more than four years since the accident, the mobile infrastructure to recover the spilled oil, set up by Eni as a form of remediation are still in place, and 25% of his land remains inaccessible and is controlled by Eni security guards. </div>
                  </div>
                  <div id="Li_doc1">
                    <Li_doc1 />
                  </div>
                  <div id="Li_doc2">
                    <Li_doc2 />
                  </div>
                  <div id="Li_doc3">
                    <Li_doc3 />
                  </div>
                  <div className="box-Ld_txt">
                    <div className="txt-Ld_txt"><b>Illegal waste disposal investigation and trial</b><br /><br />In 2016, claims from local citizens, environmental associations and local politicians led to a public inquiry into illegal waste disposal of wastewater and other waste coming from the Val d’Agri Oil Center and processed by Tecnoparco ValBasento in Pisticci, Potenza.<br /><br />In the “Relazione sulle questioni ambientali connesse a prospezione, produzione e trasporto di idrocarburi in Basilicata'' (Report on environmental issues related to prospecting, production and transport of hydrocarbons in Basilicata), the Public Investigative Commission acquired documentation from public entities and private individuals, administrative and judicial authorities, companies, associations and environmentalists, in order to provide a comprehensive and dialectical framework. The investigation was the base for Petrolgate 2, the trial against Eni. On the Third of March 2021, the Collegial Criminal Court of Potenza passed a guilty verdict against Eni on accounts of illegal waste classification and disposal, tampering pollution evidence and not adhering to standards when accidents of air pollution and flares would occur. The directors of the Oil Center at the time of the events were condemned to one to two years in prison, while Eni was subjected to an administrative fine of 700 thousand euros and the confiscation of approximately 44.2 million euros.<br /><br /><a href="https://www.recommon.org/traffico-illecito-di-rifiuti-eni-condannata-al-processo-a-potenza/">https://www.recommon.org/traffico-illecito-di-rifiuti-eni-condannata-al-processo-a-potenza/</a></div>
                  </div>


                  <div className="point-Li_paper">+</div>
                  <div className="box-Li_paptxt1">
                    <div className="txt-Li_paptxt1"><b>Monitoring network on Val d'Agri induced seismicity</b><br /><br />Val d’Agri, as a tectonically active area, is naturally affected by earthquakes. It is one of the areas of Italy with the highest seismic hazard. The infrastructures for the extraction of oil have been recognized to cause episodes of anthropogenic seismicity, increasing the tectonic instability of the area. The study “The INSIEME seismic network: a research infrastructure for studying induced seismicity in the High Agri Valley (southern Italy)”, released in 2019, monitored microearthquakes that have been connected to the process of wastewater disposal from oil extraction processes in the form of water reinjection at the Costa Molina 2 injection well cluster. The study is a collaboration of national and European research networks,and provides open access to all the collected data around induced seismicity registered in the cluster, where water used in the hydrocarbon extraction processes is sent back to the underground oil reservoir.<br /><br /><a href="https://essd.copernicus.org/articles/12/519/2020/">https://essd.copernicus.org/articles/12/519/2020/</a></div>
                  </div>
                  <div id="Li_paper1">
                    <Li_paper1 />
                  </div>
                  <div className="video-Li_video2"><ReactPlayer width={'200px'} url='https://www.youtube.com/watch?v=bvC_H5TcndA' /></div>
                  <div className="box-Li_video2">
                    <div className="txt-Li_video2"><b>Costa Molina 2 monitoring by Cova Contro</b><br /><br />The association Cova Contro has been monitoring from above the Costa Molina 2 injection well, where water used in the hydrocarbon extraction processes as well as wastewater from the Eni Oil Center activities is sent back to the underground oil reservoir. Cova Contro has been monitoring and interpreting available datasets collected by ARPAB stations around the well, finding a shortage in the number of monitored substances, non compliance with environmental laws, malfunctioning monitoring units and lack of communication with citizens around detected chemicals. As of February 2020, two piezometers were found inactive, while substances connected by scientific literature to oil extraction and processing such as phenols, glycol, phosphates, bromides, sulphides, and aliphatic hydrocarbons remain unmonitored.<br /><br /><a href="https://covacontro.org/dicloroetilene-centinaia-di-volte-la-soglia-di-legge-vicino-la-condotta-del-pozzo-eni-costa-molina-2-lillegalita-continua-a-vincere/">https://covacontro.org/dicloroetilene-centinaia-di-volte-la-soglia-di-legge-vicino-la-condotta-del-pozzo-eni-costa-molina-2-lillegalita-continua-a-vincere/</a></div>
                  </div>
                  <div className="Li_articolo"></div>
                  <div className="box-Li_articolo">
                    <div className="txt-Li_articolo"><b>ARPAB fined for lack of data communication</b><br /><br />On february 22, 2017, ARPAB, the regional environmental monitoring agency, received a fine of 800,000 euros by the Potenza province. ARPAB was found guilty of not  having communicated to the institutions and the public the discovery of over the threshold concentrations of hydrocarbons found at Contrada la Rossa in Montemurro, where the wastewater from the Val d’Agri Oil Center is reinjected through the Costa Molina 2 well. The total sum of the fine was calculated as 1,000 euros for each day that such peak values were not communicated to the public from 2014 to 2016. Finally, the fine was excused.<br /><br /><a href="https://www.ufficiostampabasilicata.it/attualita/inquinamento-costa-molina-2-il-giallo-delle-multe-allarpab-archiviate/">https://www.ufficiostampabasilicata.it/attualita/inquinamento-costa-molina-2-il-giallo-delle-multe-allarpab-archiviate/</a></div>
                  </div>


                  <div className="point-La">+</div>
                  <div className="La1"></div>
                  <div className="La2"></div>
                  <div className="La3"></div>
                  <div className="video-La_vid1"><ReactPlayer width={'200px'} url='https://www.youtube.com/watch?v=gHi6WaUqzHI' /></div>
                  <div className="video-La_vid2"><ReactPlayer width={'200px'} url='https://www.youtube.com/watch?v=RAVKCtyAvyg' /></div>
                  <div className="box-La_txt">
                    <div className="txt-La_txt"><b>Analysis by Cova Contro on Contrada Larossa</b><br /><br />Analysis performed by the association Cova Contro in 2020 and 2021 on the anomalous black sludge that emerged in the agricultural fields of Contrada Larossa (Montemurro - PZ), have shown concentrations of cadmium, mercury, tin and beryllium over the legal thresholds limits. Equally, the water fractions of the samples showed high concentrations of artificial heavy hydrocarbons, toluene and xylene, reaffirming some of the data already monitored over the years by different scientific papers and confirming contamination by industrial activities. The analysis showed a high concentration of dimethyl-tetrachloroethane, an artificial additive for herbicides banned in 2009 by the European Union, but allegedly used in industrial extraction activities, including enhanced oil recovery.<br /><br /><a href="https://covacontro.org/un-additivo-industriale-sta-riaffiorando-a-contrada-larossa-la-molecola-tossica-e-un-brevetto-anche-per-usi-petroliferi/">https://covacontro.org/un-additivo-industriale-sta-riaffiorando-a-contrada-larossa-la-molecola-tossica-e-un-brevetto-anche-per-usi-petroliferi/</a></div>
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


export default Litoapp;

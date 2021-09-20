import React from 'react';
import './Bio.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ReactPlayer from 'react-player';
import Bia2 from './Bia2';
import Bidocu1 from './Bidocu1';



function Bioapp() {
  return (
    <div className='canvas'>
    
      <TransformWrapper
      initialScale={1.5}
      initialPositionX={-950}
      initialPositionY={-1520}
      minScale= {1.2}
      maxScale={3}
      centerZoomedOut={true}
      limitToBounds={true}
    >
      {({ zoomIn, zoomOut, resetTransform, easeOut,...rest }) => (
          <React.Fragment>

              <div className="tools">
                <button className="button-bio" style={{color:"black"}} onClick={() => zoomIn(0.4,3000,easeOut)}>+</button>
                <button className="button-bio" style={{color:"black"}} onClick={() => zoomOut(0.4,3000,easeOut)}>-</button>
                <button className="button-bio" style={{color:"black"}} onClick={() => resetTransform()}>INTRO</button>
              </div>
            
            <div className="canvas">
              
              
            <TransformComponent
            wrapperStyle={{ maxWidth: "100%", maxHeight: "100vh" }} 
            >

                  <div className="img"></div>

                  <div className="point-At_txt">+</div> 
                  <div className="cova-label">COVA</div> 
                  <div className="box-Bi_txt">
                    <div className="txt-Bi_txt">Petroleum extraction has severe impacts on all environmental matrices, flora, fauna and human health. Biological contamination in the Val d’Agri region is derived from a variety of ordinary industrial procedures as well as from accidents that include leakage of oil in water and soil, reinjection of contaminated wastewater in the underground and burning of gases at the Val d’Agri Oil Center. Such contamination includes heavy metals, light and heavy hydrocarbons, benzene,ethylbenzene, toluene, xylenes (BTEX), polycyclic aromatic hydrocarbons (PAHs), polychlorinated biphenyls (PCB) and other extremely toxic substances that enter human and non-human bodies, affect the food chainand compromise the whole ecosystem of the region. Damages to human health include diseases of the circulatory system, diseases of the respiratory system, carcinogenicity, skin diseases, cognitive disorders and other detrimental effects.The damage to plants and crops is attributable to the acid rain that occurs as a result of combining H2S and water, while damage to animals might be assimilated to human damage and includes dizziness, respiratory problems, difficulties in breastfeeding, aggressive behavior. As of today, health monitoring in Val d'Agri and biomonitoring on the local food chain are not carried out. Sampling from regional agencies is sporadic and delayed. The lack of nationally regulated threshold concentration of pollutants in substances different from air and water makes claims of contamination harder to bring forward on a legal register. The lack of coordination between institutions’ policies and the absence of a comprehensive view over the interconnected molecular manifestation of pollution affects all living beings in Val d’Agri. Moreover, the power that the extractive economy wields on the territory at a national level, allows Eni to dismiss scientific findings and stimulate a climate of opacity and uncertainty around the health impact of the extractive activities carried out in the region. </div>
                    <div className="cit-Bi_txt"><b>Sources</b><br /><br /><br />Gabriella Cauzillo, Laura Gori,Maria Vincenza Liguori, “Sorveglianza sanitaria delle popolazioni residenti nelle aree regionali di estrazione petrolifera _ Relazione e proposte di sviluppo delle attività”, Regione Basilicata, 2010.<br /><br /><a href="https://www.eni.com/eni-basilicata/news/2017/2017-12-14-nessun-allarme-sanitario.page"> Eni. “Eni: nessun allarme sanitario, massima attenzione alla salute dei cittadini”, September 20, 2017.</a><br /><br />Fabrizio Bianchi, Liliana Cori. “Gli studi in Val D’Agri apportano conoscenza e partecipazione e richiedono interventi di prevenzione.”, Epidemiologia&Prevenzione,43 (1) gennaio-febbraio  79-82 (2019)<br /><br /><a href="https://doi.org/10.4000/aam.2631">Marialuisa Matera, «Nuove forme di ‘angoscia territoriale’: il caso Viggiano. Strategie culturali di un territorio in crisi», Archivio antropologico mediterraneo [Online], Anno XXIII, n. 22 (1) | 2020, online dal 20 juin 2020, consultato il 09 septembre 2021: https://doi.org/10.4000/aam.2631</a><br /><br /><a href="https://doi.org/10.14506/ca32.4.02">Michelle Murphy, “Alterlife and Decolonial Chemical Relations.”, Cultural Anthropology 32, no. 4: 494–503 (2017) : https://doi.org/10.14506/ca32.4.02</a><br /></div>
                  </div>


                  <div className="point-Bi_art">+</div> 
                  <div className="box-Bi_art">
                  <TwitterTweetEmbed  options={{width: '200' }} tweetId={'999986093989814272'}/>
                  </div>
                  <div id="Bia2">
                    <Bia2/>
                  </div>
                  <div className="box-Ba2_txt">
                    <div className="txt-Ba2_txt"><b>Food sampling by Cova Contro</b><br /><br /> In May 2018 the association Cova Contro managed to collect 3 liters of fresh cow's milk from a farm located just a few kilometers from the Viggiano Oil Center (Cova), as well as a number of oil wells.The analysis performed by an accredited laboratory on the sample showed contamination from arsenic, cadmium, chromium, other heavy metals and hydrocarbons, in the amount of over 11 thousand micrograms per kl. Despite the limited financial means, the sample was tested for fifty environmental parameters, of which only two are regulated byItalian law in reference to thresholds concentrations in water. Although the results showed a produce that is highly compromised under certain variables, the milk still enters the market without a regulatory framework in place.<br /><br /><a href="https://covacontro.org/idrocarburi-pesanti-in-un-campione-di-latte-proveniente-da-viggiano-presenti-anche-arsenico-cadmio-piombo-ed-ipa">https://covacontro.org/idrocarburi-pesanti-in-un-campione-di-latte-proveniente-da-viggiano-presenti-anche-arsenico-cadmio-piombo-ed-ipa/</a></div>
                  </div>


                  <div className="point-Bp">+</div> 
                  <div className="box-Bp_txt">
                    <div className="txt-Bp_txt"><b>Fish deaths in Pertusillo Lake</b><br /><br />A number of fish deaths have been recorded in the water of the Pertusillo fresh water reservoir from 2008, the most recent in 2018, 2019 and 2020. Trout carcasses are quite often spotted by inhabitants on the shores of the lake and later collected by Civil Protection officials or by the Police to have them analized. As of today a direct correlation between toxicity derived by fossil fuel extraction and animal death has not been confirmed by scientific testing performed by the local regional agency for pollution monitoring (ARPAB).<br /><br />Images by Mimmo Nardozza and <a href="https://www.basilicata24.it/">Basilicata24.it</a></div>
                  </div>
                  <div className="pesci1"></div>
                  <div className="pesci2"></div>
                  <div className="pesci3"></div>
                  <div className="video-Bp_video"><ReactPlayer width={'300px'} height={'206px'}url='https://www.youtube.com/watch?v=6MKGrPtlrHc&t=161s' /></div> 
                  <div className="box-BPv_txt">
                    <div className="txt-BPv_txt"><b>Interview with Mimmo Nardozza, video maker and activists, 01.09.2021</b><br /><br />Mimmo recorded images of fish deaths in the Pertusillo freshwater reservoir in August 2015, after spotting the floating carcassess acucmulating next to the dam wall. He also captured the Civil Protection officials' operations in retrieving one of the carcasses for testing.  Although scientific analysis could not provide a clear explanation of the event, scientific and public authorities attributed the death to events of algal blooms, limiting fish capacity to survive.The causes behind the algal blooms where not clearly analyzed or communicated  and a series of scientific studies started linking algal blooms to toxic anthropogenic pollution including hydrocarbon presence.</div>
                  </div>


                  <div className="point-Bv">+</div> 
                  <div className="box-Bv_txt">
                    <div className="txt-Bv_txt"><b>Open source interview with Dr. Giambattista Mele</b><br /><br />Doctor Gianbattista Mele is a general practitioner in the municipality of Viggiano, member of the Isde association (Association of Doctors for the Environment) and promoter of the Health Impact Assessment on Val d’Agri published in 2017. Dr Mele has been decoding and monitoring data on the health effects of air pollutants on bodies in Val d’Agri since 2010, finding resistance and obstructionism both from the public institutions and Eni.<br />Remembering the Health Impact Assessment he underlines how the study, financed with royalties funds, was not conducted against Eni but rather its aim was to monitor sentinel diseases and provide clear and impartial information to communities affected by emissions. Such health monitoring becomes even more complicated when emitted pollutants, such as non methane hydrocarbons are not regulated by law in the regionand public records of hospitalization are showing gaps and non accuracy in the datasets.<br /><br /><a href="https://www.youtube.com/watch?v=6MKGrPtlrHc&t=161s">https://www.youtube.com/watch?v=6MKGrPtlrHc&t=161s</a></div>
                  </div>
                  <div className="video-Bi_v"><ReactPlayer width={'300px'} height={'206px'}url='https://www.youtube.com/watch?v=6MKGrPtlrHc&t=161s' /></div> 
                  <div className="box-Bd_txt">
                    <div className="txt-Bd_txt"><b>Health Impact Assessment in Val d’Agri</b><br /><br />In 2009 the municipalities of  Viggiano and Grumento Nova set up a commission for the “Valutazione di Impatto Sanitario” (Health Impact Assessment, also known as VIS) to investigate the environmental and health impact of the Centro Olio Val d'Agri (COVA) on the local communities that are exposed to over 25 years of oil extraction operations in the region. The multidisciplinary study lasted from 2014 to 2017 and relied on the expertise of multiple universities and the National Research Center (CNR). Based on epidemiological investigations on the population residing around the Oil Center as well as on analysis on water, soil and air, the study shows an increase in mortality and / or hospitalizations for diseases of the circulatory system, as well as for diseases of the respiratory system, particularly in women, in relation to exposure to COVA emissions. Despite the scientific authority of the research the study was immediately dismissed on the basis of inaccuracy by Eni and the companyquickly presented a counter study that rejected all of the previous findings. Since 2017 the VIS has been published in international scientific journals but forgotten in Val d’Agri; no health protection or monitoring policies have been implemented by the two municipalities.<br /><br /><a href="http://www.comune.grumentonova.pz.it/docvar/Sintesi_VIS_VdA_092017.pdf">http://www.comune.grumentonova.pz.it/docvar/Sintesi_VIS_VdA_092017.pdf</a></div>
                  </div>
                  <div id="Bidocu1">
                    <Bidocu1/>
                  </div>


                  <div className="point-Bia1">+</div> 
                  <div className="box-Ba1_txt">
                    <div className="txt-Ba1_txt"><b>Food sampling by Cova Contro</b><br /><br /> In May 2018 the association Cova Contro managed to collect 3 liters of fresh cow's milk from a farm located just a few kilometers from the Viggiano Oil Center (Cova), as well as a number of oil wells.The analysis performed by an accredited laboratory on the sample showed contamination from arsenic, cadmium, chromium, other heavy metals and hydrocarbons, in the amount of over 11 thousand micrograms per kl. Despite the limited financial means, the sample was tested for fifty environmental parameters, of which only two are regulated byItalian law in reference to thresholds concentrations in water. Although the results showed a produce that is highly compromised under certain variables, the milk still enters the market without a regulatory framework in place.<br /><br /><a href="https://covacontro.org/idrocarburi-pesanti-in-un-campione-di-latte-proveniente-da-viggiano-presenti-anche-arsenico-cadmio-piombo-ed-ipa">https://covacontro.org/idrocarburi-pesanti-in-un-campione-di-latte-proveniente-da-viggiano-presenti-anche-arsenico-cadmio-piombo-ed-ipa/</a></div>
                  </div>
                  <div id="Bia1">
                    <Bia2/>
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


export default Bioapp;
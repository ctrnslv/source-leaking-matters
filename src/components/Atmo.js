import React from 'react';
import Pdfview from './pdfview';
import ATvideo1 from './ATvideo1';
import ATvideo2 from './ATvideo2';
import Avid1 from './Avid1';
import Avid3 from './Avid3';
import './Atmo.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ReactPlayer from 'react-player';



function Atmoapp() {
  return (
    <div className='canvas'>
    
      <TransformWrapper
      initialScale={1.5}
      initialPositionX={-950}
      initialPositionY={-1120}
      minScale= {1.2}
      maxScale={3}
      centerZoomedOut={true}
      limitToBounds={true}
    >
      {({ zoomIn, zoomOut, resetTransform, easeOut,...rest }) => (
          <React.Fragment>

              <div className="tools">
                <button className="button-atmo" style={{color:"black"}} onClick={() => zoomIn(0.4,3000,easeOut)}>+</button>
                <button className="button-atmo" style={{color:"black"}} onClick={() => zoomOut(0.4,3000,easeOut)}>-</button>
                <button className="button-atmo" style={{color:"black"}} onClick={() => resetTransform()}>INTRO</button>
              </div>
            
            <div className="canvas">
              
              
            <TransformComponent
            wrapperStyle={{ maxWidth: "100%", maxHeight: "100vh" }} 
            >

                  <div className="img"></div>

                  <div className="point-At_txt">+</div> 
                  <div className="cova-label">COVA</div> 
                  <div className="box-At_txt">
                    <div className="txt-At_txt">Extraction and processing of fossil hydrocarbons cause the release into the atmosphere of a number of pollutants including sulfur dioxide (SO2), hydrogen sulphide (H2S), nitrogen oxides (NOx),non-methane hydrocarbons (NMHC), particulate matter (PM), carbon monoxide (CO), ozone (O3) and other volatile organic compounds. Such emissions at the Val d’Agri Oil Center are mainly produced by the combustion of layer waters and excess gases that are incinerated and released through the safety torch during hydro-desulphurization process, as well as by drilling wells. Either as a result of gas flaring or of blow-outs, fires and explosions, a great amount of processed chemical molecules are displaced and released, transferred to and through other matters and absorbed by porous bodies. Exposure to hydrocarbon molecules has been proved to be the cause of a wide range of effects, from sensory discomfort to alterations in the state of the environmental matrices and state of health of humans. The sensory discomfort, either in the form of impressive flares, harassing smells,nausea and sickness of the throat, sudden loud noises,tactile feelings of trembling walls, is what prompts inhabitants to monitor such events and put into question corporation’s and state agencies’ s gappy datasets. Most of the monitoring is indeed carried out by Eni’s Center of Environmental Monitoring that retains exclusivity of data, or by ARAPB, the regional agency for environmental protection, which does not provide constant communication of the results of the various environmental assessment campaigns in the area and makes public access to such data difficult to decode. Moreover the absence of legal regulations for some of the pollutants released in the air, for example for Volatile Organic Compounds (VOCs), make actions towards the protection of the quality of air in the municipalities surrounding the Oil Center and the wells impossible to implement. Every flaring accident then becomes a 'non-accident'  that evades corporate accountability with the complicity of state systems of pollution regulation. Video and / or image captures of the torches can help in the interpretation of the air quality data but it is recommended to use thermal imaging cameras for future studies located very close to the industrial pole.<br /><br /><i>“You see fire, they said, but fire is just an expression of one form of oxidation. What’s important is not what you can see, but what you can’t. It’s all a careful measure. It’s all about knowing which chemicals are in which containers and how chemicals combine. It’s probably important to wear protective clothing. Chemicals burn in ways you might not notice until it is too late”. ( Povinelli 2017)</i></div>
                    <div className="cit-At_txt"><b>Sources</b><br /><br /><br /><a href="https://doi.org/10.14506/ca32.4.03">Elizabeth A.Povinelli, “Fires, Fogs, Winds.”, Cultural Anthropology 32, no. 4: 504–513 (2017) : https://doi.org/10.14506/ca32.4.03</a><br /><br />Gabriella Cauzillo,Laura Gori,Maria Vincenza Liguori, “Sorveglianza sanitaria delle popolazioni residenti nelle aree regionali di estrazione petrolifera _ Relazione e proposte di sviluppo delle attività”, Regione Basilicata, 2010.<br /><br /><a href="https://www.eni.com/eni-basilicata/salute-sicurezza/fiaccola-sicurezza.page">“La Fiaccola di sicurezza del COVA”, Eni, accessed September 4, 2021</a><br /><br /><a href="https://www.gazzettadellavaldagri.it/oggi-tavolo-tecnico-a-grumento-nova-su-cattivi-odori-dal-cova-eni/">“Oggi tavolo tecnico a Grumento Nova su cattivi odori dal Cova”, Gazzetta della Val d’Agri, 2019, accessed September 4, 2021</a><br /><br /><a href="http://www.osservatoriovaldagri.it/web/guest/qualita-dell-aria1">Osservatorio Ambientale “Val d’Agri”, accessed September 4, 2021</a><br /><br /><a href="https://uploads-ssl.webflow.com/5d9bafe75f6edb09b82b5aaf/60473a7f34cb2e71fb786b6a_Agri_sezione_Aria_grafica.pdf">Source International, Re:common, “Indagine ambientale sulla qualità dell’aria in Val d’Agri”, February 2021</a><br /><br /><a href="https://www.recommon.org/tira-una-brutta-aria-in-val-dagri/.">“Tira una brutta aria in Val d’Agri”, Re:common, 9 March,2021</a></div>
                  </div>

                  <div className="point-At_video1">+</div> 
                  <div className="video-At_video1"><ATvideo1 /></div> 
                  <div className="box-At_video1">
                    <div className="txt-At_video1"><b>Interview with Camilla Nigro, Agronomist and member of the Osservatorio Popolare per la Val d'Agri, and Libera Basilicata, 26.08.2021</b><br/ ><br/ >Camilla Nigro of the Val'Agri Popular Observatory has been involved in informal environmental data decoding and circulation of environmental information for over 20 years. Together with other environmental associations they monitor and collect publicly available data on polluting emissions in the atmosphere from the Oil Center, ask for absent data to regional monitoring agencies (ARPAB) and connect with experts to discuss odour harassment and safety. Living next to some of the wells and to the Oil Center Camilla can directly sense with her body the many incidents that send out polluting particles in the air. She describes the obstacles in receiving missing data about pollutant concentrations from monitoring agencies, even when such data should be made public by national and international legislation.</div>
                  </div>

                  <div className="video-Avid1"><Avid1 /></div> 
                  <div className="video-Avid2"><ReactPlayer width={'100px'} url='https://www.facebook.com/watch/?v=298509248032101' /></div> 
                  <div className="video-Avid3"><Avid3 /></div> 
                  <div className="video-Avid4"><ReactPlayer width={'300px'} url='https://www.facebook.com/watch/?v=252811959637420' /></div> 
                  <div className="box-Av_txt">
                    <div className="txt-Av_txt">Since burning produces a visible flame and a cloud of smoke, and affects breathing and smell. Such events go quite often unreported to the authorities or to the public, or classified by Eni as routine safety measures for the well functioning of the plant. Hoewer, they are monitored and recorded by affected inhabitants through different devices, including phone cameras. The open source recorded events reported here date between 2015 and 2020.< br />< br />Dates of the reported events:< br />July 10, 2020< br />Luglio 30, 2019< br />December 17, 2019< br />2015-2019</div>
                  </div>


                  <div className="point-APpaper1">+</div>
                  <div className="box-APpaper1">
                    <div className="txt-APpaper1"><b>Environmental Study on Air Quality in Val d’Agri</b><br /><br />The “Indagine Ambientale sulla qualità dell’aria in Val d’Agri” (Environmental study on air quality in Val d’Agri) is a scientific study that was carried out by Source International and published in March 2021. The study analyzed the air quality in the municipalities of ​​Viggiano and partially Grumento Nova, focusing on the residential and industrial areas surrounding the Oil Center.<br />On the basis of sampling carried out through monitoring units in August 2020, high concentrations of total volatile organic compounds (VOCs) were detected. With values over 250 μg / m³ as a daily average, the pollution levels in Val d’Agri can be compared to the ones found in cities such as Beijing and New Delhi. Despite their dangerousness, the regulation of VOCs emissions and their concentration in the air is not yet legislated either internationally or nationally. The study also provides evidence of a concentration gradient that increases in the vicinity of the plant both for VOCs and hydrogen sulphide. Despite the low concentrations of  H2S measured that are beneath the olfactory threshold value, the study showed how the concentrations grow downwind from the Oil Center.</div>
                  </div> 
                  <div className="box-Ai_int">
                    <div className="txt-Ai_int"><b>Interview with Fabiano Bianchini, environmentalist and naturalist and head of Source International, 09.06.2021</b><br /><br /><br /><br /><i>Could you tell me something about the sensing technologies that you used in the “Indagine Ambientale sulla qualità dell’aria in Val d’Agri” ( Environmental study on air quality in Val d’Agri)?</i><br /><br />For sure. We used two types of instruments.The first one is the Aeroqual Portable Handheld Air Quality Monitor (S500), it is a portable laser sensor that measures particles of pm 2.5 and pm10 and the Volatile Organic Compounds (VOC) and it is used by USEPA which is considered the golden standard in environmental monitoring. It is a very precise instrument, obviously it is not comparable to the massive and very expensive monitoring units of Eni or Arpab, but the values we measured were very similar. From a strictly scientific perspective a small error of let’s say 2% might be enormous but when you are performing an environmental monitoring and the registered values ​​exceed the threshold limit by a double amount, at that point the 2% error becomes irrelevant.<br />For hydrogen sulphide (H2S) we used Radielli or adsorbent cartridges that are set in place for a month and are used in Viggiano by Arpab as well. As a matter of fact we also positioned them close to the ones from Arpab. The downside of Radielli is that they measure the total H2S emitted in the month and are not able therefore to register daily intensity and pic events that might have gone above the threshold, so they are mostly long-term measuring tools for chronic exposure over the years. So we need to make a distinction between excessive exposure to a certain chemical and low but continuous exposure that causes harm in the long term. You might not have very high value everyday in the residential area of Le Vigne but rather low values over the 30 years that the Oil Center existed.<br /><br /><br /><i>Regarding this chronic exposure, how do you operate when the values you register scientifically do not exceed the threshold limits that are set and decided by protection policies? How do you navigate between the perceptions of inhabitants and the data that are collected?</i><br /><br />If there is an overrun of the legal limits, paradoxically it is easier and we have the space to open a legal action. If, on the other hand, there is no overflow it could become a bit more complex, when you live around the Oil Center you smell the S2H, so surely there are pick moments but monitoring them requires a much more precise and expensive study.<br />In regards to perception, if you live next to such an infrastructure as the OIl Center it is hard not to blame it for everything. It has a huge impact and sometimes it is difficult to understand the difference between the perception of the population, which is always justified and understandable, and the real scientific impact. As scientists we need to trust what the data tells us. Many studies starts with very limited funds, what would be needed is to continue and do in-depth studies.For example, for H2S values we could see that there is a downwind gradient with respect to the Oil Center, the same with pm10, the residential are of Le Vigne has higher values ​​but they remain anyway below the limits of the law. Also because, as you said, these limits are often decided upon, they are a compromise between higher limits to protect health and lower limits to allow industries to still operate. Clearly, from a legal point of view, you have nothing.<br /><br /><br /><i>How do you relate to practices of citizen science and the possible margin of error that “non expert” monitoring could carry with it? Do you think it is a valuable practice to stimulate care for one's environment and territory?</i><br /><br />Citizen science is a very relevant practice,it is very valuable. Citizen science tools still have a certain degree of accuracy: when we do such projects we tend to give very good tools for measurement so that citizens can produce accurate data and measure pollution over longer periods of time, more chronic exposures. Obviously, the ideal would be to combine citizen science with more in-depth research to give citizens the ability to control what happens in their territory.The only risk is that the data may not be interpreted correctly and the responsibilities attributed without discretion to forms of pervasive and widespread pollution that are not directly attributable to that single extractive or industrial source that inhabitants have in front of their eyes every day.<br /><br /></div>
                  </div> 
                  <div id="APpaper1">
                    <Pdfview />
                  </div>

                  <div className="video-At_video2"><ATvideo2 /></div> 
                  <div className="box-At_video2">
                    <div className="txt-At_video2"><b>News report of flare accident</b><br /><br />Material collected and recorded by inhabitants is sometimes mobilized to reach media outlets that work as sounding boards that give visibility to their claims. One of such instances is the flare event of October 24, 2019 which was recorded through pictures and phone recordings, and was broadcasted in the news on national Italian television. Although the amplified recordings of the inhabitants were later cross-checked with data from Eni and other monitoring agencies, flare events might be dismissed as non relevant accidents. Recordings constitute visual evidence that instigate a move towards the broader validation of citizens' claims for environmental and health safety.</div>
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


export default Atmoapp;
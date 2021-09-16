import React from 'react';
import './Bio.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";



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
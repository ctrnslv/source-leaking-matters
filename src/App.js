import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Litoapp from './components/Lito'
import Atmoapp from './components/Atmo'
import Bioapp from './components/Bio'
import Hydroapp from './components/Hydro'
import Addmap from './components/Add'
import './App.css';

const App = () => (
  <div className='app'>
    <Navigation />
    <Main />
  </div>
);


const Navigation = () => (
  <nav>
    <ul>
      <button><NavLink exact activeClassName="current" to='/'>X</NavLink></button>
      <button><NavLink exact activeClassName="current" to='/lito'>Litosphere</NavLink></button>
      <button><NavLink exact activeClassName="current" to='/hydro'>Hydrosphere</NavLink></button>
      <button><NavLink exact activeClassName="current" to='/atmo'>Atmosphere</NavLink></button>
      <button><NavLink exact activeClassName="current" to='/bio'>Biosphere</NavLink></button>
      <li></li>
      <button><NavLink exact activeClassName="current" to='/add'>ADDITIONAL MATERIALS</NavLink></button>
    </ul>
  </nav>
  
);
 
const Main = () => (
  <Switch>
    <Route exact path='/' component={X}></Route>
    <Route exact path='/lito' component={Lito}></Route>
    <Route exact path='/hydro' component={Hydro}></Route>
    <Route exact path='/atmo' component={Atmo}></Route>
    <Route exact path='/bio' component={Bio}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/add' component={Add}></Route>
    <Route exact path='/contacts' component={Contacts}></Route>
  </Switch>
);





const X = () => (
<div className="box-intro_txt">

  <svg>
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="name"/>
        <feColorMatrix in="name" mode="matrix" values="1 0 0 0 0
                                                       0 1 0 0 0
                                                       0 0 1 0 0
                                                       0 0 0 15 -10" result="b"/>

        <feBlend in="SourceGraphic" in2="b" />
      </filter>
    </defs>
  </svg>

  <div className="wrapper">
    <div id="container">
      <p className="text">LEAKING MATTERS</p>
      <div className="drop"></div>
    </div>
    <div id="title-intro_txt">Investigating the extractive ecologies of Val d’Agri</div>
  </div>
  <div id="descr-intro_txt">Val d’Agri holds the largest onshore oil field of continental Europe, uncovered at the beginning of the last century. Here, in the 1990s, ENI, the partially national company and one of the supermajor oil corporations of the world, began intensive prospecting and drilling activities. Today, the valley is pierced by over 44 wells of which more than 24 are productive. The many other wells that have been drilled through the ground in the last century have either been abandoned, cleared or used for wastewater reinjection, as in the case of the Cosa Molina 2 well. The territory is crossed by over 400 kms of pipes transporting the crude to the local Oil Center and later to the refineries in Taranto, Puglia. The Centro Olio Val d’Agri (COVA) is Eni’s hydrodesulfurization plant where crude oil is first processed and  separated into processed crude, gas and process water. COVA is located just a few kilometers from one of the biggest freshwater reservoirs of the south of Italy, Lago del Pertusillo, source of potable water for Basilicata and other regions of the south.<br /><br /><br />In January 2017, an oil leak from the COVA oil center was discovered in the town of Viggiano,Val d’Agri, in the southern italian region of Basilicata. Over the course of a few months monitoring, sampling and a police investigation discovered over 400 tons of oil contaminating the soil and the underground waters of the area surrounding Eni’s plant. Allegedly the leak was ongoing since 2016 and was the result of misconduct and illegality from Eni, who was accused of environmental disaster and brought to trial.The leak intensified the exposure to the public of the many risks connected to hydrocarbon production, from spills to flares.<br />The oil leak that was discovered in Val d’Agri is only one of the cases of pollution and illegality that the company is involved in. In March 2021, Eni was found guilty of illegal waste trafficking of the waste produced in the Val d’Agri Oil Center as well as of  illegal wastewater reinjection in the Costa Molina 2 well. The company was sentenced to an administrative fine, a temporary closure of the oil center and the directors at the time sent into custody. The other trial for environmental disaster related to the leak of 2017 is still ongoing and keeps being stalled by Eni’s attorneys. However critical the role these judicial actions might be in environmental protection and to obtain corporate accountability, the sentence seems to be unable to fully address accountability beyond mere monetary compensation. After a temporary stop of the Oil Center the extractive operations return to  full capacity. Moreover, what counts as evidence is put into question in hearings and trials are unable to register citizen claims that do not fit within the boundaries of juridical constructions of scientific knowledge.<br /><br /><br />In Val d’Agri toxic petrochemical contamination that falls under the threshold of what is visible or what is legally permissible as assessed by environmental protection policies, remains unaddressed by institutions. Phenomena of chronic and molecular pollution are largely overlooked or dismissed both by the extractive companies and by the public agencies that maintain spatial, economic and epistemological domain over permissible harm. Meanwhile the displaced matter of the industrial era keeps sedimenting in bodies, soil, water and atmosphere, molecularly distributed by the extractive fossil infrastructures.<br />Other actors on the ground register the signs of such contamination when it suddenly emerges into the realm of the senses or pushes the boundaries of guideline regulations and standards. Matter that leaks moves through different states, locations and temporalities, and becomes recordable.The leakage becomes part of the production of a communal knowledge resisting extraction.<br /><b>“Leaking matters”</b> assumes the form of an investigative atlas that locates spatially and temporally multiple instances of making sense of phenomena of pollution in the Val d’Agri region. It presents different possibilities of translating into knowledge what is sensed and experienced by inhabitants and activists within the region’s toxic ecologies by using techno-scientific sensors, cellphone videos, narrations and other forms of communication and media. By gathering this factual and affective material in a spatial interactive atlas, this platform seeks to foster a territorial and political imaginary that relies on the contiguity and mutual dependencies between phenomena, matters, scales, times and knowledge.It endeavours to give visibility to community claims for the right to environmental information and a safe environment by inviting to consider the manyfold relational struggles that forge the common ground  for challenging one sided narratives of economies of extraction.<br /><br /><br /><br /><br /><u>NOTE</u><br /><br />The atlas samples the leakage of displaced matter as it emerges in sensible phenomena throughout the lithosphere, hydrosphere, atmosphere, and biosphere.These four lenses work as an organizing principle to see claims that emerge while they intersect with the environment. For each of these interconnected spheres, it samples and recompose a number of interpretations and mediations of toxic contamination. It is not comprehensive but aims at making legible some complex relationships between different agents and at documenting resisting narratives.<br />The platform relies on open source research, archives of local activists associations, online interviews with inhabitants and experts and on a brief period of research on the field. To expand on the sources used for the platform click (here).<br /><br /><br /></div>
</div>
);

const Lito = () => (
  <div className='about'>
    <Litoapp></ Litoapp>
  </div>
);

const Hydro = () => (
  <div className='about'>
    <Hydroapp></ Hydroapp>
  </div>
);

const Atmo = () => (
  <div className='about'>
    <Atmoapp></ Atmoapp>
  </div>
);

const Bio = () => (
  <div className='about'>
    <Bioapp></ Bioapp>
  </div>
);


const About = () => (
  <div className='about'>
  </div>
);

const Add = () => (
  <div className=''>
    <Addmap></ Addmap>
  </div>
);

const Contacts = () => (
  <div className='about'>
  </div>
);




export default App;
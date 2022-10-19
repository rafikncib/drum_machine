import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Heater_1 from './assets/audio/Heater-1.mp3'
import Heater_2 from './assets/audio/Heater-2.mp3'
import Heater_3 from './assets/audio/Heater-3.mp3'
import Heater_4_1 from './assets/audio/Heater-4_1.mp3'
import Heater_6 from './assets/audio/Heater-6.mp3'
import Kick_n_Hat from './assets/audio/Kick_n_Hat.mp3'
import RP4_KICK_1 from './assets/audio/RP4_KICK_1.mp3'
import Cev_H2 from './assets/audio/Cev_H2.mp3'
import Dsc_Oh from './assets/audio/Dsc_Oh.mp3'


function App() {
  const [audio,setAudio]=useState("");
  const play=(elemnt)=>{
    let id=document.getElementById(elemnt);
    id.currentTime=0;
    id.play();
    setAudio(elemnt);
    console.log(id);
    //setAudio(id);
  }
  return (
    <div className="container-fluid bg-info d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className='text-center text-white bg-success p-4 rounded-3 text-uppercase'>drum machine</h1>
      <main className='bg-secondary w-50 border border-4 border-warning' id="drum-machine">
        <h1 id="display" className='text-center bg-white mb-3'>{audio}</h1>
          <div className="row container py-2">
              <div className="col">
                <div className="row mb-1">
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id='Qbtn' onClick={()=>play('Q')}>
                    Q
                      <audio className="clip" id="Q" src={Heater_1}>
                        
                      </audio>
                    </button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id='Wbtn' onClick={()=>play('W')}>W
                    <audio className="clip" id="W" src={Heater_2}>
                      </audio>
                    </button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id='Ebtn' onClick={()=>play('E')}>E
                      <audio className="clip" id="E" src={Heater_3}>
                      </audio>
                    </button>
                  </div>
                </div>

                <div className="row mb-1">
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id="Abtn" onClick={()=>play('A')}>A
                      <audio className="clip" id="A" src={Heater_4_1}>
                      </audio>
                    </button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id="Sbtn" onClick={()=>play('S')}>S
                      <audio className="clip" id="S" src={Heater_6}>
                      </audio>
                    </button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id="Dbtn" onClick={()=>play('D')}>D
                      <audio className="clip" id="D" src={Dsc_Oh}>
                      </audio>
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id="Zbtn" onClick={()=>play('Z')}>Z
                      <audio className="clip" id="Z" src={Kick_n_Hat}>
                      </audio>
                    </button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id="Xbtn" onClick={()=>play('X')}>X
                      <audio className="clip" id="X" src={RP4_KICK_1}>
                      </audio>
                    </button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-dark p-4 drum-pad w-100" id="Cbtn" onClick={()=>play('C')}>C
                    
                      <audio className="clip" id="C" src={Cev_H2}>
                      </audio>
                    </button>
                  </div>
                </div>
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;

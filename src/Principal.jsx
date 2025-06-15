import { BrowserRouter,Routes, Route,Link} from "react-router-dom";
import Acordeon from "./Acordeon";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
//import './estilos.css'
function Ini(props){
    return(
        <div className="inic">
            <h1 style={{background:'green'}}>DANZAS</h1>
            <Acordeon></Acordeon>
        </div>
    );
}
function Ofert(props){
    return(
        <div className="ofe">
            <h1 style={{background:'green'}}>OFERTAS DE CURSOS</h1>
            <div style={{display:'flex',justifyContent:"space-around"}}>
            <Card1></Card1>
            <Card2></Card2>
            <Card3></Card3>
            </div>
        </div>
    );
}

function Principal(props)
{
    return(
        <div>
           <div clasName="header" >
                  ACADEMIA DE BAILE
                <h1><span style={{color:'green'}}>"SERGIO EL BAILADOR"</span></h1>
                   
                
            </div>
           <div clasName="menu" style={{display:'flex',justifyContent:"space-around",background:'green'}}>
                       
                        <div  style={{backgroundColor:'green',padding:'20 px'}}><span style={{color:'white'}}>MENU : </span></div>
                      <div style={{backgroundColor:'green'}}> <Link to='/'style={{ textDecoration:'none'}}><span style={{color:'white'}}> INICIO </span></Link></div>
                        
                       <div style={{backgroundColor:'green', textDecoration:'none'}}> <Link to='/pag2'style={{ textDecoration:'none'}}><span style={{color:'white'}}> OFERTAS DE CURSOS </span></Link></div>
                                 
          </div>
          <div className="secction"style={{backgroundColor:'beige'}}>
En Tupiza, si buscas una academia de danza, puedes contactar a "SERGIO EL BAILADOR" Bolivia, ubicada en la calle Pichincha nro557, entre las calles Comercio e Ingavi. Ellos ofrecen clases de danza con un enfoque en la cultura y el folklore boliviano. Puedes contactarlos al 77782223 para obtener más información sobre sus clases y horarios. 
 "SERGIO EL BAILADOR", Academia de Danza y Teatro Ballet Folklórico Bolivia Folklor Facebook, y "SERGIO EL BAILADOR" - Academia Boliviana de Danza Facebook en La Paz, que ofrece clases de danza clásica y folklórica en varios niveles, incluyendo adultos. Si buscas algo más específico, Dance Academy se especializa en danza urbana experimental y se encuentra en Santa Cruz. 

          </div>
          <div className="navega">
                <Routes>
                    <Route path="/" element={<Ini></Ini>}></Route>
                    <Route path="/pag2" element={<Ofert></Ofert>}></Route>
                                       
                </Routes>
          </div>
            
            <footer>© 2025 Mi sitio web. Todos los Derechos Reservados</footer>
        </div>
    );
}
export default Principal;
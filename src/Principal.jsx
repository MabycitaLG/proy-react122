import { BrowserRouter,Routes, Route,Link} from "react-router-dom";
import Card from "./Card";
import Card1 from "./Card1";
import Acordeon from "./Acordeon";
//import './estilos.css'
function Ini(props){
    return(
        <div className="inic">

         <div>   <img src="./public/img1.jpg" alt="portada"/></div>
          <div className="secction"style={{backgroundColor:'beige'}}>
La Navidad es una festividad cristiana que conmemora el nacimiento de Jesucristo y se celebra anualmente el 25 de diciembre. Es una época de recogimiento familiar, paz, amor y generosidad. 
A continuación, se presentan ideas y tradiciones clave para celebrar la Navidad:
          </div>  </div>
    );
}
function Vestimenta(props){
    return(
        <div className="ofe"style={{display:'flex',justifyContent:"space-around"}}>
            <h1 style={{background:'red'}}>Traje de Grinch</h1>
            <div style={{display:'flex',justifyContent:"space-around"}}>
           <h1 style={{background:'red'}}>Traje de Papanoel</h1>
            <Card></Card>
            <h1 style={{background:'red'}}>Traje de Grinch</h1>
            <Card1></Card1>
            </div>
        </div>
    );
}

function Comida(props){
    return(
        <div className="ofe">
            <h1 style={{background:'green'}}>Comida</h1>
            <div style={{display:'flex',justifyContent:"space-around"}}>
            <Acordeon></Acordeon>
            </div>
        </div>
    );
}
function Historia(props){
    return(
        <div className="ofe">
            <h1 style={{background:'RED'}}>HISTORIA</h1>
                       <img
      src="./img4.jpg"
      alt="Snaci" />
            <div style={{display:'flex',justifyContent:"space-around"}}>
      

           La historia de la Navidad es una mezcla de la narración bíblica del nacimiento de Jesús en Belén, la adaptación de antiguas fiestas paganas de invierno (como las Saturnales romanas y el Solsticio) por la Iglesia en el siglo IV para el 25 de diciembre, y la incorporación de tradiciones como la decoración con árboles y el intercambio de regalos, fusionando lo religioso con lo cultural hasta convertirse en una celebración familiar y global. 
            </div>
            <div>

Origen Bíblico
La Anunciación: El ángel Gabriel anuncia a María que concebirá y dará a luz a Jesús, el Hijo de Dios, en Nazaret, según los evangelios de Lucas y Mateo.
El Censo y Belén: Un edicto del emperador Augusto ordena un censo, llevando a José y María a Belén, la ciudad de David.
El Nacimiento: Jesús nace en un establo y es acostado en un pesebre, siendo visitado por pastores y, más tarde, por los Reyes Magos de Oriente, quienes le traen regalos. 


            </div>
        </div>
    );
}
function Biografia(props){
    return(
        <div className="ofe">
            <h1 style={{background:'RED'}}>BIOGRAFIA</h1>
            <div style={{display:'flex',justifyContent:"space-around"}}>
           <div className="avatar">
  <div className="w-24 rounded">
    <img src="./img5.jpg" />
  </div>
</div>
            </div>
            <div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">Nombre: Mabel leon Guzman</div>
  <div className="divider"></div>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">Desarrollo de la pagina web navidad</div>
</div>
        </div>
    );
}
function Principal(props)
{
    return(
        <div>
           <div clasName="header" >
                  
                <h1><span style={{color:'RED'}}>"NAVIDAD"</span></h1>
                   
                
            </div>
           <div clasName="menu" style={{display:'flex',justifyContent:"space-around",background:'red'}}>
                       
                <div  style={{backgroundColor:'red',padding:'20 px'}}><span style={{color:'white'}}> </span></div>
                <div style={{backgroundColor:'red'}}> <Link to='/'style={{ textDecoration:'none'}}><span style={{color:'white'}}> INICIO </span></Link></div>
                <div style={{backgroundColor:'red', textDecoration:'none'}}> <Link to='/pag1'style={{ textDecoration:'none'}}><span style={{color:'white'}}> VESTIMENTA </span></Link></div>
                <div style={{backgroundColor:'red', textDecoration:'none'}}> <Link to='/pag2'style={{ textDecoration:'none'}}><span style={{color:'white'}}>COMIDA </span></Link></div>
                <div style={{backgroundColor:'red', textDecoration:'none'}}> <Link to='/pag3'style={{ textDecoration:'none'}}><span style={{color:'white'}}> HISTORIA </span></Link></div>
                <div style={{backgroundColor:'red', textDecoration:'none'}}> <Link to='/pag4'style={{ textDecoration:'none'}}><span style={{color:'white'}}> BIOGRAFIA </span></Link></div>
          
          </div>
       
          <div className="navega">
                <Routes>
                    <Route path="/" element={<Ini></Ini>}></Route>
                    <Route path="/pag1" element={<Vestimenta/>}></Route>
                    <Route path="/pag2" element={<Comida/>}></Route>
                    <Route path="/pag3" element={<Historia/>}></Route>
                    <Route path="/pag4" element={<Biografia/>}></Route>               
                </Routes>
          </div>
            
            <footer>© 2025 Mi sitio web. Todos los Derechos Reservados</footer>
        </div>
    );
}
export default Principal;
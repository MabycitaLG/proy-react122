import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1"><h2>CAPORAL</h2></AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>DESCRIPCION .-</strong>
            La palabra "caporal" tiene múltiples significados, dependiendo del contexto. En general, se refiere a alguien que tiene autoridad o que dirige un grupo de personas, especialmente en un contexto laboral o militar. 
Significados de "caporal":
Persona que tiene a su cargo el ganado que se emplea en la labranza:
En el ámbito rural, un caporal es el responsable de supervisar y dirigir el trabajo de los animales de trabajo. 

<h4><strong>Capataz:</strong></h4>
En la historia y en algunos contextos, un caporal era el capataz de un grupo de trabajadores, especialmente en haciendas o grandes propiedades. 
Bajo oficial de infantería:
En el ejército, un caporal es un grado inferior al de oficial, similar a un sargento. 
<h4><strong>Danza de caporales:</strong></h4>
En Bolivia, existe una danza tradicional llamada "caporales", que representa a los capataces o caporales de las haciendas. Esta danza se ha convertido en una expresión cultural importante en Bolivia y ha influenciado otras formas de expresión artística. 
Personaje en la literatura y otras artes:
El personaje del caporal ha sido representado en diversas obras de arte, tanto en Europa como en Hispanoamérica, incluyendo la literatura, la danza y el baile. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2"><h2>TOBAS</h2></AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>DESCRIPCION .-</strong>
            La danza de los Tobas es una danza folclórica boliviana, originaria de Oruro, que se inspira en el pueblo toba, también conocido como Qom. Aunque su nombre evoca al pueblo indígena, la danza en sí misma tiene un origen urbano y se baila en importantes festivales como el Carnaval de Oruro y la Fiesta del Gran Poder. Los Tobas, como pueblo indígena, son originarios del Gran Chaco, una región que abarca partes de Argentina, Bolivia y Paraguay. 
Información sobre el pueblo Toba (Qom):
<h4><strong>Nombre</strong></h4>
El nombre "Toba" es de origen guaraní y significa "frentones", debido a la costumbre de raparse el cabello en la frente. Se autodenominan "Qom". 
<h4><strong>Ubicación</strong></h4>
Originarios del Gran Chaco, habitan principalmente en Argentina, Bolivia y Paraguay. 
<h4><strong>Organización social</strong></h4>
Tradicionalmente nómadas, se organizaban en bandas compuestas por varias familias extensas. 
<h4><strong>Economía</strong></h4>
Su economía se basaba en la caza, pesca y recolección. 
<h4><strong>Idioma</strong></h4>
Hablan el idioma "Qom l'aqtac", perteneciente a la familia lingüística mataco-guaicurú. 
<h4><strong>Religión</strong></h4>
Poseían creencias chamánicas, con figuras como la Serpiente Arco Iris y la mujer caníbal. En el siglo XX, muchos adoptaron el cristianismo evangélico. 
<h4><strong>Estado actual</strong></h4>
Muchos se han trasladado a zonas urbanas debido a la migración y la búsqueda de mejores condiciones de vida. 
Información sobre la danza de los Tobas:
<h4><strong>Origen</strong></h4>
Urbana, creada en Oruro, Bolivia, a principios del siglo XX. 
<h4><strong>Estilo</strong></h4>
Caracterizada por movimientos rápidos y enérgicos, con saltos y juego de pies. 
<h4><strong>Vestimenta</strong></h4>
Los bailarines suelen llevar trajes coloridos y tocados con plumas, inspirados en la imagen que se tenía de los indígenas tobas. 
<h4><strong>Importancia</strong></h4>
Es una de las danzas más populares y representativas del carnaval de Oruro. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"><h2>TINKU</h2></AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>DESCRIPCION .-</strong>
            El Tinku es una tradición cultural y ritual originaria de la región andina de Bolivia, específicamente del norte de Potosí, que se caracteriza por enfrentamientos rituales entre comunidades. La palabra "Tinku" proviene del quechua y significa "encuentro". Estas peleas, aunque violentas, son consideradas una ofrenda a la Pachamama (Madre Tierra) y se cree que la sangre derramada durante la lucha trae fertilidad a la tierra y buenas cosechas. 
Características principales del Tinku:
<h4><strong>Encuentro ritual</strong></h4>
El Tinku es un encuentro entre dos bandos, a menudo llamados Alasaya (lado de arriba) y Ma-jasaya (lado de abajo). 
<h4><strong>Combate ritual</strong></h4>
Los participantes se enfrentan en peleas cuerpo a cuerpo, a menudo con elementos como monteras (cascos), guantes y, en el pasado, piedras. 
<h4><strong>Ofrenda a la Pachamama</strong></h4>
La sangre derramada se considera un sacrificio para la Pachamama, con la esperanza de obtener buenas cosechas y fertilidad. 
<h4><strong>Acompañamiento musical y festivo</strong></h4>
Los enfrentamientos están acompañados de música tradicional, como los jula julas y los charangos, y se celebra con bailes y festividades. 
<h4><strong>resencia de mujeres</strong></h4>
Aunque los enfrentamientos son protagonizados principalmente por hombres, las mujeres también participan animando a los combatientes y curando heridas. 
<h4><strong>Transformación en danza</strong></h4>
El Tinku también se ha transformado en una danza folklórica que simula el combate, con movimientos y ritmos que evocan la lucha. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4"><h2>POTOLOS</h2></AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>DESCRIPCION .-</strong>
            La danza de los Potolos es una danza folclórica originaria de la región de Potolo, en Chuquisaca, Bolivia, y también se practica en Potobamba, Potosí. Se caracteriza por sus movimientos rítmicos y el contoneo de caderas, con influencia del baile de la región de Chayanta. Los bailarines, tanto hombres como mujeres, suelen usar sombreros de cuero de oveja y un atado prominente en la zona de los glúteos. La danza se realiza en diferentes ocasiones, como las etapas de siembra y cosecha, en honor a la Pachamama y en Oruro en devoción a la Virgen del Socavón. 
Aquí hay más detalles sobre la danza de los Potolos:
<h4><strong>Origen y significado</strong></h4>
Se cree que representa el acarreo de agua y el enamoramiento, con movimientos que reflejan alegría y coquetería según la Revista Varianza. 
<h4><strong>Vestimenta</strong></h4>
Los hombres llevan sombreros abombados de ala corta de cuero de oveja, mientras que las mujeres también usan sombreros similares y suelen llevar un atado en la zona de los glúteos según Wikipedia. 
<h4><strong>Música</strong></h4>
Se acompaña con el sonido del charango, un instrumento musical andino, y el ritmo de los pies al zapatear. 
<h4><strong>Contexto cultural</strong></h4>
La danza es una expresión cultural importante en la región, practicada tanto en festividades religiosas como en eventos sociales y culturales. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5"><h2>CUECA TARIJEÑA</h2></AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>DESCRIPCION .-</strong>
            La cueca tarijeña, también conocida como cueca chapaca, es una danza alegre y vivaz que representa el cortejo entre parejas. Se caracteriza por el uso de pañuelos, movimientos circulares, floreos y zapateado. Los bailarines visten trajes típicos: para las mujeres, faldas, polleras, blusas y sombreros, mientras que los hombres llevan pantalones, camisas, sombreros, chalecos y ojotas. La cueca tarijeña es famosa por su energía y por ser la primera en incorporar el violín, otorgándole un sonido distintivo. 
Características de la Cueca Tarijeña:
<h4><strong>Alegre y vivaz</strong></h4>
La cueca tarijeña se distingue por su ritmo rápido y la alegría que transmiten los bailarines. 
<h4><strong>Cortejo</strong></h4>
Representa el coqueteo y la conquista entre la pareja, con movimientos que simbolizan la búsqueda y el escape. 
<h4><strong>Pañuelo</strong></h4>
Los bailarines, tanto hombres como mujeres, llevan un pañuelo en la mano derecha, que utilizan para realizar los movimientos y floreos. 
<h4><strong>Trajes típicos</strong></h4>
Los trajes reflejan la vestimenta tradicional de la región, con prendas coloridas y detalles característicos. 
<h4><strong>Sonido único</strong></h4>
La inclusión del violín le da a la cueca tarijeña un sonido particular y diferente a otras variantes de la cueca. 
<h4><strong>Zapateado</strong></h4>
El zapateado es una parte importante de la danza, donde los bailarines marcan el ritmo con sus pies. 
<h4><strong>Variantes</strong></h4>
Se pueden encontrar diferentes estilos y variaciones dentro de la cueca tarijeña, con algunas más enfocadas en lo urbano o lo rural. 
En resumen, la cueca tarijeña es una danza folklórica llena de energía y tradición, que refleja la cultura y el espíritu de la región de Tarija. 
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;
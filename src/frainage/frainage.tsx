
import { Col, Row } from "react-bootstrap";
import CardComponent from "../cardVideo/card";
import vediosList from "../videos.json"
import "./frainage.css"
// this a FrainageComponent to display the list of videos by H.N
 const  FrainageComponent: React.FC = () => {
   return (
     <div className="parent-flex">
         <div>
         {/*  this a row to display the carrossel by H.N */}
             <Row >
                 <Col><img className="img"  src={vediosList[0].image}/></Col>
                 <Col><img className="img"  src={vediosList[1].image}/></Col>
                 <Col><img className="img"  src={vediosList[2].image}/></Col>
             </Row>
         </div>
         {/*  this a div section with class flex-item to display 2 element per row by H.N */}
         {vediosList.map((el)=><div className="flex-item"><CardComponent date={el.createdAt} url={el.link} title={el.title} description={el.description}  /></div>)}
     </div>
   );
 };
 
 export default FrainageComponent;
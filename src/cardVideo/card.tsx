import { Row , Col } from "react-bootstrap"; 
import "./card.css" 
// this is a card component for the frainage videos by H.N
 const  CardComponent= (props :any) => {
   return (

    <div>  
         <Row>
             {/* this is i frame to show videos by H.N */}
             <Col><iframe src={props.url}></iframe></Col>
             <Col>
             {/* this is h4 section to show videos title by H.N*/}
             <h4 className="title">{props.title}</h4>
             {/* this is p section to show videos description by H.N */}
                <p className="paragraphe">{props.description.substring(0,100)} ...</p>
                <Row>
                    {/* this is a row  to show videos creation date by H.N*/}
                    <Col md={4} className="paragraphe">Ajouté le </Col> <Col className="createdAt">{props.date}</Col></Row>
                <div><button className="button border-1">2:30</button></div>
             </Col>
         </Row>
      </div>
   );
 };
 // export the component to use it later 
 export default CardComponent;
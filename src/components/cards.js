import { Card, Button, ButtonGroup , Form } from "react-bootstrap";
import ApiCards from "../api/Apicard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare, faTrashCan, faHeart } from '@fortawesome/free-regular-svg-icons'

const Cards = (props) => {
  return ApiCards.slice(0, 3).map((ApiCards, citem) => (
    <Card className="card shadow-0 border rounded-3 mb-3" key={citem}>
      <Card.Body>
        <div className="row">
          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light">
              <Card.Img variant="top" src={ApiCards.cImg} />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="d-flex flex-row">
              <Card.Title>{ApiCards.cTitle}</Card.Title>
            </div>
            <div className="d-flex mt-1 mb-3 text-muted small">
              <span>{ApiCards.cDesk}</span>
            </div>
            <div className="d-flex mt-1 mb-3 small">
              <small> {ApiCards.cSize} </small>
            </div>
              <div className="d-flex mb-0">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="none" size="sm"><FontAwesomeIcon icon={faTrashCan} /> REMOVE ITEMS</Button>
                    <Button variant="none" size="sm"><FontAwesomeIcon icon={faHeart} /> MOVE TO WISH LIST</Button>
                </ButtonGroup>
              </div>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3">
            <div className="d-flex align-items-end flex-column mb-1">
              <ButtonGroup aria-label="Basic example">
                <Button variant="none"> <FontAwesomeIcon icon={faMinusSquare} /> </Button>
                <Form.Control className="form-control input-number" type="number" name="quant[1]" min={1} max={30}/>
                <Button variant="none"> <FontAwesomeIcon icon={faPlusSquare} />  </Button>
              </ButtonGroup>
            </div>
            <div className="d-flex align-items-end flex-column mt-4">
              <div class="mt-auto p-2">
                <h5 className="mb-1 me-1">${ApiCards.cPrize}</h5>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  ));
};
export default Cards;

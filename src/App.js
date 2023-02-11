import "./App.css";
import { Card, Button, Form } from "react-bootstrap";
import Cards from '../src/components/cards.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faCreditCard } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="py-5 text-center">
          <h2>Shopping Chart</h2>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed.
          </p>
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span>The Total Amount Of</span>
              <span className="badge bg-primary rounded-pill">2</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
            </ul>
            <div className="d-grid gap-2 mb-3">
              <Button variant="primary" type="button" size="lg">
                TO CHECKOUT <FontAwesomeIcon icon={faCreditCard} />
              </Button>
            </div>

            <form className="card p-2">
              <div className="input-group">
                <Form.Control type="text" placeholder="Code Promo (optional)" />
                <Button variant="secondary" type="submit">
                  Redeem
                </Button>
              </div>
            </form>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3 text-start">Cart (3) items</h4>
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

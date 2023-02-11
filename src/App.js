import "./App.css";
import { Card, Button, Form } from "react-bootstrap";
import img1 from '../src/images/baju1.jpg'
import img2 from '../src/images/baju2.jpg'
import img3 from '../src/images/baju3.jpg'

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
          <div className="col-md-5 col-lg-4 order-md-last shadow-sm p-3 mb-5 bg-body rounded">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span>The Total Amount Of</span>
              <span className="badge bg-primary rounded-pill">3</span>
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
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">−$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
            <div className="d-grid gap-2 mb-3">
              <Button variant="primary" type="button" size="lg">
                TO CHECKOUT
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
            <Card className="card shadow-0 border rounded-3">
              <Card.Body>
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <Card.Img variant="top" src={img1} />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <Card.Title>Mint Green Denim Shirt</Card.Title>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>100% cotton</span>
                      <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div className="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span className="text-primary"> • </span>
                      <span>For Women</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Casual
                        <br />
                      </span>
                    </div>
                    <label className="fw-bold">SIZE M</label>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-start mb-1">
                      <h4 className="mb-1 me-1">$13.99</h4>
                      <span className="text-danger">
                        <s>$20.99</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <button className="btn btn-primary btn-sm" type="button">
                        Details
                      </button>
                      <button
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

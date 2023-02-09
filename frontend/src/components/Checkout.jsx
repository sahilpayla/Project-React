import React from 'react'

const Checkout = ({ order }) => {


   return (
      <>
         <div class="container mb-5">
            <main>
               <div class="py-5 text-center">
                  <h2>Checkout</h2>
               </div>

               <div class="row g-3">
                  <div class="col-md-5 col-lg-4 order-md-last">
                     <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge bg-secondary rounded-pill">{order.total_items}</span>
                     </h4>
                     <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                           <div>
                              <h6 class="my-0">Total</h6>
                              <small class="text-muted">Cart Items</small>
                           </div>
                           <span class="text-muted">${order.total_cost}</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between lh-sm">
                           <div>
                              <h6 class="my-0">Total</h6>
                              <small class="text-muted">Shipping Charges</small>
                           </div>
                           <span class="text-muted">${order.shipping_charge}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                           <div>
                              <h6 class="my-0">Total</h6>
                              <small class="text-muted">Discount</small>
                           </div>
                           <span class="text-muted"> - ${order.total_cost * order.discount_in_percent / 100}</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between">
                           <span>Total (USD)</span>
                           <strong>${order.total_cost - order.total_cost * order.discount_in_percent / 100 + order.shipping_charge}</strong>
                        </li>
                     </ul>

                  </div>
                  <div class="col-md-7 col-lg-8">
                     <h4 class="mb-3">Shipping address</h4>

                     <div class="card">
                        <div class="card-body">
                           <h5 class="card-title">John Doe</h5>
                           <h6 class="card-subtitle mb-2 text-muted ">111, Sapphire Street, NJ, 11111</h6>
                           <p class="card-text">+91-1111111111</p>
                           <input type="checkbox" name="address" id="" /> Use this Address
                        </div>
                     </div>

                     <hr class="my-4" />
                     <h5>OR</h5>

                     <h4 class="mb-3">Add New Address</h4>

                     <form class="needs-validation" novalidate="" action="/order-success.html">
                        <div class="row g-3">
                           <div class="col-sm-6">
                              <label for="firstName" class="form-label">First name</label>
                              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                              <div class="invalid-feedback">
                                 Valid first name is required.
                              </div>
                           </div>

                           <div class="col-sm-6">
                              <label for="lastName" class="form-label">Last name</label>
                              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                              <div class="invalid-feedback">
                                 Valid last name is required.
                              </div>
                           </div>


                           <div class="col-12">
                              <label for="phone" class="form-label">Phone <span class="text-muted"></span></label>
                              <input type="tel" class="form-control" id="phone" placeholder="+91-1111111111" value="" required="" />
                              <div class="invalid-feedback">
                                 Please enter a valid phone for shipping updates.
                              </div>
                           </div>

                           <div class="col-12">
                              <label for="address" class="form-label">Address</label>
                              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                              <div class="invalid-feedback">
                                 Please enter your shipping address.
                              </div>
                           </div>

                           <div class="col-12">
                              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                           </div>

                           <div class="col-md-5">
                              <label for="country" class="form-label">Country</label>
                              <select class="form-select" id="country" required="">
                                 <option value="">Choose...</option>
                                 <option>United States</option>
                              </select>
                              <div class="invalid-feedback">
                                 Please select a valid country.
                              </div>
                           </div>

                           <div class="col-md-4">
                              <label for="state" class="form-label">State</label>
                              <select class="form-select" id="state" required="">
                                 <option value="">Choose...</option>
                                 <option>California</option>
                              </select>
                              <div class="invalid-feedback">
                                 Please provide a valid state.
                              </div>
                           </div>

                           <div class="col-md-3">
                              <label for="zip" class="form-label">Zip</label>
                              <input type="text" class="form-control" id="zip" placeholder="" required="" />
                              <div class="invalid-feedback">
                                 Zip code required.
                              </div>
                           </div>
                        </div>

                        <hr class="my-4" />


                        <h4 class="mb-3">Payment</h4>

                        <div class="my-3">
                           <div class="form-check">
                              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="" />
                              <label class="form-check-label" for="credit">Credit card</label>
                           </div>
                           <div class="form-check">
                              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" />
                              <label class="form-check-label" for="debit">Debit card</label>
                           </div>
                           <div class="form-check">
                              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" />
                              <label class="form-check-label" for="paypal">PayPal</label>
                           </div>
                        </div>

                        <div class="row gy-3">
                           <div class="col-md-6">
                              <label for="cc-name" class="form-label">Name on card</label>
                              <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                              <small class="text-muted">Full name as displayed on card</small>
                              <div class="invalid-feedback">
                                 Name on card is required
                              </div>
                           </div>

                           <div class="col-md-6">
                              <label for="cc-number" class="form-label">Credit card number</label>
                              <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
                              <div class="invalid-feedback">
                                 Credit card number is required
                              </div>
                           </div>

                           <div class="col-md-3">
                              <label for="cc-expiration" class="form-label">Expiration</label>
                              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
                              <div class="invalid-feedback">
                                 Expiration date required
                              </div>
                           </div>

                           <div class="col-md-3">
                              <label for="cc-cvv" class="form-label">CVV</label>
                              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
                              <div class="invalid-feedback">
                                 Security code required
                              </div>
                           </div>
                        </div>

                        <hr class="my-4" />

                        <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                     </form>
                  </div>
               </div>
            </main>

         </div>
      </>
   )
}

export default Checkout
const Payment = () => {
    return (
        <div className="Payment">
            <div class="container">
                <div className="card">
            <div id="Checkout" class="inline">
                <div >

                </div>
                <h2>Add Payment</h2>
                <form>
                    <div class="form-group">
                        <label for="PaymentAmount">Payment amount</label>
                        <div class="amount-placeholder">
                            <span>$</span>
                            <span>500.00</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label or="NameOnCard">Name on card</label>
                        <input id="NameOnCard" class="form-control" type="text" maxlength="255"></input>
                    </div>
                    <div class="form-group">
                        <label for="CreditCardNumber">Card number</label>
                        <input id="CreditCardNumber" class="null card-image form-control" type="text"></input>
                    </div>
                    <div class="expiry-date-group form-group">
                        <label for="ExpiryDate">Expiry date</label>
                        <input id="ExpiryDate" class="form-control" type="text" placeholder="MM / YY" maxlength="7"></input>
                    </div>
                    <div class="security-code-group form-group">
                        <label for="SecurityCode">Security code</label>
                        <div class="input-container" >
                            <input id="SecurityCode" class="form-control" type="text" ></input>
                            <i id="cvc" class="fa fa-question-circle"></i>
                        </div>
                        <div class="cvc-preview-container two-card hide">
                            <div class="amex-cvc-preview"></div>
                            <div class="visa-mc-dis-cvc-preview"></div>
                        </div>
                    </div>
                    <div class="zip-code-group form-group">
                        <label for="ZIPCode">ZIP/Postal code</label>
                        <div class="input-container">
                            <input id="ZIPCode" class="form-control" type="text" maxlength="10"></input>
                            <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i class="fa fa-question-circle"></i></a>
                        </div>
                    </div>
                    <button id="PayButton" class="btn btn-block btn-success submit-button" type="submit">
                        <span class="submit-button-lock"></span>
                        <span class="align-middle">Pay $500.00</span>
                    </button>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Payment;
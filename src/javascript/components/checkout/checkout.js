var React = require('react');
var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

var PaymentForm = React.createClass({
  mixins: [ ReactScriptLoaderMixin ],

  getInitialState: function() {
    return {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
    };
  },

  getScriptURL: function() {
    return 'https://js.stripe.com/v2/';
  },

  onScriptLoaded: function() {
    if (!PaymentForm.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey('pk_test_j8D2dhgBhWY1ToEZm9NsrF48');

      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError: function() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  onSubmit: function(event) {
    var self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    Stripe.createToken(event.target, function(status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {

        self.setState({ submitDisabled: true });

        var data  = JSON.stringify({
          emailAddress: 'tester@hotmail.com',
          stripeToken: response.id,
          amount: 1000,
          description: 'Carpets At Home Site',
        });

        fetch('http://localhost:8081/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: data
        }).then(function(response){
          if(response.status == 200){
            self.setState({ paymentComplete: true });
          }
        })
      }
    });
  },

  render: function() {
    if (this.state.stripeLoading) {
      return <div>Loading</div>;
    }
    else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    else {
      return (<form onSubmit={this.onSubmit} >
        <span>{ this.state.paymentError }</span><br />
        <input type='text' data-stripe='number' placeholder='credit card number' value="4242424242424242" /><br />
        <input type='text' data-stripe='exp-month' placeholder='expiration month' value="09" /><br />
        <input type='text' data-stripe='exp-year' placeholder='expiration year' value="19" /><br />
        <input type='text' data-stripe='cvc' placeholder='cvc' value="333"/><br />
        <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
      </form>);
    }
  }
});

module.exports = PaymentForm;

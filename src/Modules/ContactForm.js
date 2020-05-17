import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <section class="subscribe centered">
        <h2 class="subscribe-header">get on the list</h2>
        <form class="subscribe-form">
          <input
            novalidate
            type="email"
            class="subscribe-input subscribe-mail"
            placeholder="Email Address"
          />
          <input
            type="button"
            class="subscribe-input subscribe-btn"
            value="subscibe"
          />
        </form>
      </section>
    );
  }
}

export default ContactForm;


import React, { Component } from 'react';
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints';

class Test extends Component {
  handleChange = e => {
    this.form.validateFields(e.target);
  }

  contactSubmit = e => {
    e.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }
  }

  render() {
    return (
      <FormWithConstraints
        ref={form => this.form = form}
        onSubmit={this.contactSubmit}
        noValidate>

        <div className="col-md-6">
          <input name="name" size="30" placeholder="Name"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="name">
            <FieldFeedback when="*" />
          </FieldFeedbacks>

          <input type="email" name="email" size="30" placeholder="Email"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="email">
            <FieldFeedback when="*" />
          </FieldFeedbacks>

          <input name="phone" size="30" placeholder="Phone"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="phone">
            <FieldFeedback when={value => !/\d/.test(value)} warning>  Debería contener sólo numeros</FieldFeedback>
          </FieldFeedbacks>

          <input name="address" size="30" placeholder="Address"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="address">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </div>

        <div className="col-md-6">
          <textarea name="comments" cols="40" rows="20" placeholder="Message"
                    required minLength={5} maxLength={50}
                    onChange={this.handleChange}
                    className="form-control" />
          <FieldFeedbacks for="comments">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </div>

        <div className="col-md-12">
          <button className="btn btn-lg btn-primary">Send Message</button>
        </div>
      </FormWithConstraints>
    );
  }
}

export default Test;

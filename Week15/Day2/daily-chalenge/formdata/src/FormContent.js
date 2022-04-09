import React, {Component} from "react";
import FormComponent from "./FormComponent";

class FormContent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false
    };
    
  }

  handleChange(e) {
    let { value, name, type, checked } = e.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
}

export default FormContent;
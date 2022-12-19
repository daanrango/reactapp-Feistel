/*
     elaborado: Leonel Anthony Herrera Orosco
     fecha: Diciembre, 2022
     referencia: https://www.youtube.com/watch?v=kJv5sxaGCMg&ab_channel=CarlosAlbertoTombePosso
*/
import React, { Component } from "react";

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      priority: "",
      textArea: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

    const alert = (message, type) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
    };
    const text = this.state.title;
    const textLeng = text.length;
    const key = Number(this.state.priority);

    let bt = false;
    let be = false;
    let cont = 0;

    if (textLeng > 4) {
      alert(
        "Error: Solo puedes ingresar una palabra de 4 carecteres",
        "danger"
      );
      bt = true;
    } else {
      bt = false;
    }

    while (!be && cont < text.length) {
      if (text.charAt(cont) == " ") {
        alert(
          "Error: No puedes ingresar una palabra con espacios en blanco",
          "danger"
        );
        be = true;
      }
      cont++;
    }

    let alfabeto = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "ñ",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const usingArrayFrom = Array.from(text);
    const valoresM1 = [];
    const valoresC1 = [];
    const valoresPERC1 = [];

    for (let index = 0; index < usingArrayFrom.length; index++) {
      for (let indexj = 0; indexj < alfabeto.length; indexj++) {
        if (usingArrayFrom[index] == alfabeto[indexj]) {
          valoresM1.push(indexj);
        }
      }
    }

    for (let index = 0; index < valoresM1.length; index++) {
      const C1 = (valoresM1[index] + key) % alfabeto.length;
      valoresC1.push(alfabeto[C1]);
    }

    valoresPERC1.push(valoresC1[2]);
    valoresPERC1.push(valoresC1[1]);
    valoresPERC1.push(valoresC1[3]);
    valoresPERC1.push(valoresC1[0]);

    console.log(usingArrayFrom);
    console.log(valoresM1);
    console.log(valoresC1);
    console.log(valoresPERC1);

    let resultado =
      "Palabra convertida en arreglo:\n" +
      usingArrayFrom +
      "\nValores M1: \n" +
      valoresM1 +
      "\nValores C1: \n" +
      valoresC1 +
      "\nValores PERM : \n" +
      valoresPERC1;

    if (!be && !bt) {
      this.setState({ textArea: resultado });
    } else {
      this.setState({ textArea: "" });
    }
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <div id="liveAlertPlaceholder"></div>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <form onSubmit={this.handleSubmit} className="card-body">
                <div className="form-group">
                  <label htmlFor="title">Ingrese el texto a cifrar:</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    placeholder="Texto"
                    style={{ marginBottom: 10 }}
                    required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Seleccione el numero de sub claves:</label>
                  <select
                    name="priority"
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                    style={{ marginBottom: 10 }}
                    required="true"
                    placeholder="Sub claves"
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-2"
                  id="liveAlertBtn"
                  style={{width:300}}
                >
                  Codificar
                </button>
              </form>
            </div>
          </div>
          <div className="col-6">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                value={this.state.textArea}
                style={{ height: 200 }}
              ></textarea>
              <label for="floatingTextarea">Resultado:</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;

/*
     elaborado: Leonel Anthony Herrera Orosco
     fecha: Diciembre, 2022
     referencia: https://www.youtube.com/watch?v=kJv5sxaGCMg&ab_channel=CarlosAlbertoTombePosso
*/
import Formulario from "./form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#4D5252" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand display-4" href="" style={{ color: "white" }}>
              Cifrado Feistel
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-flex flex-row-reverse"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="https://www.facebook.com/"
                    style={{ color: "white" }}
                  >
                    Leonel Anthony Herrera Orosco
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div class="card">
                <div class="card-header">Aplicacion Codificacion Feistel</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div>
                      <Formulario />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Select from "../Select/Select";

import Input from "../Input/Input";
import Title from "../Title/Title";
import "./Publicar.css";

import Rent from "../../../assets/img/Public/Rent.png";

import CreateHouse from "../../helpers/helpCreateHouse";
import InputCheck from "../InputCheck/InputCheck";
import Loader from "../Loader/Loader";



const Publicar = ({
  handleSubmit,
  handleChange,
  setLoading,
  setForm,
  setErr,
  form,
  setPublicar,
  Publica,
  page_name,
}) => {
  const [Load, setLoad] = useState(false);

  function public_house(form, setErr, setForm, setPublicar, Publica) {
    CreateHouse(form, setErr, setForm);

    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }

  return (
    <div className="container_publicar">
      <div className="Load_p">{Load && <Loader />}</div>
      <div className="Formulario_inputs">
        <Title title={page_name} />

        <form onSubmit={handleSubmit} className="form_dist">
          <div className="rent">
            <img src={Rent} alt="Rentar_Hogar"></img>
          </div>

          <div>
            <div className="In_puts">
              <Input
                atributo={{
                  id: "name_pub",
                  name: "name_pub",
                  type: "text",
                  placeholder: "Nombra Tu Publicacion",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>

            <div className="In_puts">
              <InputCheck
                form={form}
                handleChange={handleChange}
                setForm={setForm}
              />
              <br></br>
            </div>
            <div className="In_puts" onChange={handleChange}>
              <Select
                atributos={{
                  id: "Country",
                  name: "countyId",
                  placeholder: "Country",
                  onChange: handleChange,
                }}
                form={form}
              ></Select>

              <br />
              <br />
            </div>
            <div className="In_puts" onChange={handleChange}>
            <Input
                atributo={{
                  id: "precio",
                  name: "price",
                  type: "text",
                  placeholder: "Costo",
                  onChange: handleChange,
                }}
              />
              <br />
              <br />
            </div>
          </div>

          <div>
            <div className="In_puts">
              <Input
                atributo={{
                  id: "address",
                  name: "direction",
                  type: "text",
                  placeholder: "Direccion",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div className="In_puts">
              <Input
                atributo={{
                  id: "rooms",
                  name: "rooms",
                  type: "number",
                  placeholder: "Habitaciones Disponibles",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div className="In_puts">
              <Input
                atributo={{
                  id: "Bathrooms",
                  name: "Bathrooms",
                  type: "number",
                  placeholder: "Baños Disponibles",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div >
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">
                  Inserta tus Fotos
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  name="url"
                  onChange={handleChange}
                  multiple
                ></input>
              </div>

              <br></br>
            </div>
          </div>
        </form>
        <div className="buttons">
          <button
            className="btn btn-primary"
            onClick={() =>
              public_house(form, setErr, setForm, setPublicar, Publica)
            }
          >
            Publicar
          </button>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Publicar;

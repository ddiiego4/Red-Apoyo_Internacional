import React from "react";
import "./Houses.css";


const new_pr = (renta)=>{
    renta+=1;
    window.location.href=`/Products/${renta}`;
}


const Houses = ({ houses = [] }) => {
  //const [img, setimg] = useState(false);

  return (
    <div>
      <div className="Houses_Container">
        <div className="Houses">
          <div className="row">
            {houses.map((item, index ) => (
              <div key={index} className="col">
                <div
                  onClick={() => new_pr(index)}
                  className="cardd"
                  style={{ cursor: "pointer", margin:"auto", marginTop: "10px" }}
                >
                  <h1>{item.nombre}</h1>
                  <img
                    className="card-img"
                    alt="card_image"
                    src="https://a0.muscache.com/im/pictures/4b75813b-bc09-4719-b6b8-06a5f170724d.jpg?im_w=960"
                  />
                  <span className="spann">
                    <img
                    alt="card_image2"
                      className="card-img"
                      src="https://a0.muscache.com/im/pictures/4b75813b-bc09-4719-b6b8-06a5f170724d.jpg?im_w=960"
                    />
                  </span>
                  <p>
                    <p>{item.Direccion}</p>
                    <br />
                    {item.Ciudad}/{item.Pais}
                  </p>
                  <p></p>
                  <div className="ValueHouse">
                    <i class="bi bi-coin"></i>
                    <p>{item.costo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;

import axios from "axios";

const DbUrl="http://localhost:3003/houses";



const CreateHouse = (data, setErr, setForm, setLoading) => {
    
    let idowner = document.cookie
    let idownerpa = idowner.split(" ")
    let iidowner = idownerpa[1].split("=")
    let ownerId = iidowner[1].split(";")

  let state = {
    datos: {
            "city": {
              "id": data.cityId,
              "name": "string"
            },
            "description": `${data.name_pub}-${data.rooms}-${data.Bathrooms}-${data.price}`,
            "direction": data.direction,
            "finishAvailabilityDate": "string",
            "id": 0,
            "latitude": 0,
            "longitude": 0,
            "ownerId": ownerId[0],
            "photos": [
              {
                "id": 0,
                "url": data.url
              }
            ],
            "startAvailabilityDate": "string"
          }
  };

    //console.log(data.id);
    const DbUrlPhotos =`https://isnft-prod.azurewebsites.net/api/houses/photo?id=${data.id}`
    axios({
        method:'POST',
        url:DbUrl,
        data:state.datos
    }).then(res => console.log(res.data));

    axios({
        method:'POST',
        url: DbUrlPhotos,
        data : state.datos
    }).then((resp) => {
        console.log(resp.data)
    })
}
export default CreateHouse;
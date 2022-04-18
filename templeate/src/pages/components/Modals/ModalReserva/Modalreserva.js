import { Component } from "react";
import "../Modals.css"
import ModalReserva from "./ModalReserva";

/**
 * Use this modal reser in the hooks
 * Declare Hook 
 * cont [Modal, setModal] = useState([])
 *
 * {
 *  modal.modal && <Modalreserva props ={datmodal.datos_modal}  setmodal={setmodal} ></Modalreserva>
 * }
 * 
 */



export class Modalreserva extends Component {


    constructor(props, setmodal) {
        super(props);

    }
    render() {
        return (
            <>
                <div className="container_modal">
                    <ModalReserva datos={this.props} />
                </div>
            </>
        );
    }
}
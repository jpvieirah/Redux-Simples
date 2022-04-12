import "./Interval.css"
import React from "react"
import Card from './Card' 
import { connect } from "react-redux"

function Intervalo(props) {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Interval">
            <span>
                <strong>Mínimo: </strong>
                <input type="number" value={min} readOnly/>
            </span>
            <span>
                <strong>Máximo: </strong>
                <input type="number" value={max} readOnly/>
            </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,

    }
}

export default connect(mapStateToProps)(Intervalo)
import React from "react"
import Card from './Card'


export default props => {

    const min = props.min
    const max = props.max

    return (
        <Card title="Soma de Números" blue>
            <div>
            <span>
                <span>Resultado:</span>
                <strong>{ max + min }</strong>
                
                </span>
            </div>
        </Card>
    )
}
import React from 'react'
import Bars from './Bars'
import Total from './Total'

const BottumSection = ({ spends, total }) => {
    return (
        <div className="bg-white rounded-xl mt-5 px-10">
            <Bars spends={spends} total={total} />
            <Total total={total} />
        </div>

    )
}

export default BottumSection
import {
    Table
} from 'reactstrap'

function Payments (props) {
    const { paymentsData } = props
    return (
        <Table>
            <tbody>
                {
                    paymentsData.map( payment => {
                        let { img, alias, type, amount, date } = payment
                        return (
                            <tr>
                                <td><img src={img} alt="" /></td>
                                <td>
                                    <p className="d-flex flex-column">
                                        <b className="alias">{alias}</b>
                                        <span className="type">{type}</span>
                                    </p>
                                </td>
                                <td>
                                    <p className="d-flex flex-column text-right">
                                        <span className="date text-muted">{date}</span>
                                        <b className="amount">{amount}</b>
                                    </p>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Payments
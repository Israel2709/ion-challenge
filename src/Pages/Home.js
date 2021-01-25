import React, { useState } from 'react'
import avatar from '../assets/avatar.jpg'
import car from '../assets/icons/car.png'
import cfe from '../assets/icons/cfe.png'
import netflix from '../assets/icons/netflix.svg'
import shoppingCart from '../assets/icons/shopping_cart.png'

import BottomNav from '../Components/BottomNav/index'
import Header from '../Components/Header/index'
import Payments from '../Components/Payments/index'

import {
    Container,
    Row,
    Col,
} from 'reactstrap'

function Home() {
    const [ userData, setUserData ] = useState({
        name: "José",
        lastName: "",
        picUrl: avatar,
        availableBalance: "$1,499,970.00",
        nextPayment:{
            date:"16 de enero",
            amount:"$28,860.00"
        }
    })

    const [ paymentsData, setPaymentsData ] = useState([
        {
            img: car,
            alias: "Auto",
            type: "Mis logros",
            amount: "$350,000.00",
            date: "2m"
        },
        {
            img: cfe,
            alias: "CFE",
            type: "Pago de servicio",
            amount: "$280.00",
            date: "Ayer"
        },
        {
            img: netflix,
            alias: "NETFLIX",
            type: "Suscripciones",
            amount: "$140.00",
            date: "28 de dic"
        },
        {
            img: shoppingCart,
            alias: "Soriana Parque Delta",
            type: "Pago TD",
            amount: "$3,800.00",
            date: "26 de dic"
        }
    ])
    return (
        <>
            <BottomNav />
            <Container fluid className="has-nav">
                <Row>
                    <Col xs="12" className="p-0">
                        <Header 
                            userData = { userData }
                        />
                        <main>
                            <div className="movements-wrapper">
                                <h2 className="d-flex justify-content-between p-3 align-items-center">Tus movimientos <a href="">Ver todos</a></h2>
                                <Payments 
                                    paymentsData = { paymentsData }
                                />
                            </div>
                        </main>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
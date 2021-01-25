import React, { useState } from 'react'
import CircularSlider from '@fseehawer/react-circular-slider';
import CurrencyFormat from 'react-currency-format';

import {
    Link,
  } from "react-router-dom";

import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Form,
    FormGroup,
    Input,
    Button,
} from 'reactstrap'

function Available() {
    const [ totalAmount, setTotalAmount ] =  useState("350000.00")
    const [ term, setTerm ] = useState( 60 )

    const amountHandler = value => {
        setTotalAmount( value )
        console.log( monthlyPayment )
    }

    const termHandler = value => {
        setTerm( value )
    }

    const monthlyPayment = (( totalAmount * 1.166 ) / term).toFixed(2)

    return (
        <>
            <div className="controls-wrapper d-flex justify-content-between align-items-center p-5">
                <Link to="/" className="icon-arrow-left"></Link>
                <Link to="/" className="text-uppercase text-light-blue">cancelar</Link>
            </div>
            <Container fluid>
                <Row>
                    <Col xs="12" className="px-5">
                        <h4 className="font-weight-bold mb-5">Disposición</h4>
                        <Card body className="p-3 mb-5">
                            <CardTitle tag="h5" className="text-uppercase mb-0 mb-3">Tienes disponible</CardTitle>
                            <CardText className="text-light-purple font-weight-bold">$1,499,970.00</CardText>
                        </Card>
                        <Form className="mb-5">
                            <FormGroup>
                                <Input type="text" name="email" className="border-primary mb-3 font-weight-bold" value="Auto" />
                            </FormGroup>
                            <CurrencyFormat 
                                value={ totalAmount || 0 } 
                                displayType={'input'} 
                                thousandSeparator={true} 
                                prefix={'$'} 
                                className="form-control border-primary mb-3 font-weight-bold"
                                onValueChange = { value => {
                                    amountHandler( value.floatValue )
                                }}
                            />
                        </Form>
                        <p className="font-weight-bold">Selecciona tu plazo</p>
                        <div className="slider-wrapper d-flex justify-content-center position-relative mb-5">
                            <CircularSlider
                                onChange={value => { termHandler( value ) }}
                                knobPosition={"left"}
                                dataIndex={9}
                                width={240}
                                trackSize={20}
                                progressSize={20}
                                progressColorFrom={"#783183"}
                                progressColorTo={"#bb64c8"}
                                knobSize={24}
                                knobColor={"transparent"}
                                data={[
                                    6,12,18,24,30,36,42,48,54,60,66,72,78,84,90
                                ]}
                                hideLabelValue={true}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d)">
                                        <circle cx="12" cy="10" r="8" fill="#BB64C8" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy="2" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </CircularSlider>
                            <div className="custom-label">
                                <p class="font-weight-bold">Tu pago Mensual</p>
                                <CurrencyFormat 
                                    value={ monthlyPayment === "NaN" ? "0" : monthlyPayment } 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'} 
                                    className="font-weight-bold monthly-payment"
                                />
                                <p class="font-weight-bold">a {term} meses</p>
                                <p class="text-light-blue font-weight-bold">Tasa de interés <br/> 16.6%</p>
                            </div>
                        </div>
                        <Button color="primary" size="lg" className="text-uppercase btn-block text-white mb-5">lo quiero</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Available
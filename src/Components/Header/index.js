import bellIcon from '../../assets/icons/bell-fill-white.svg'
import tagIcon from '../../assets/icons/tag.svg'
import starIcon from '../../assets/icons/star-fill-white.svg'

import {
    Card,
    CardTitle,
    CardText,
    Button,
} from 'reactstrap'

function Header( props ) {
    const { name, picUrl, availableBalance, nextPayment } = props.userData
    return (
        <>
            <header className="p-3 position-relative">
                <div className="heading align-items-center position-relative">
                    <p className="user-name mt-3 text-center w-100">Hola { name } </p>
                    <img className="user-avatar rounded-circle" src={ picUrl } alt="" />
                </div>
                <Card body className="p-3">
                    <CardTitle tag="h5" className="text-uppercase mb-0">Saldo disponible</CardTitle>
                    <CardText className="text-light-purple">{ availableBalance }</CardText>
                </Card>
            </header>
            <nav className="d-flex align-items-center position-relative">
                <div className="link-wrapper w-100 d-flex justify-content-around align-items-center">
                    <div className="link-item d-flex flex-column">
                        <img src={ starIcon } alt="" />
                        <span>Crear logro</span>
                    </div>
                    <div className="link-item d-flex flex-column">
                        <img src={ tagIcon } alt="" />
                        <span>Pago servicio</span>
                    </div>
                    <div className="link-item d-flex flex-column">
                        <img src={bellIcon} alt="" />
                        <span>Suscripción</span>
                    </div>
                </div>
                <Card body className="p-3">
                    <CardTitle tag="h5" className="mb-0">Tu próximo pago</CardTitle>
                    <CardText className="mb-1">{ nextPayment.amount }</CardText>
                    <div className="payment-data d-flex justify-content-between align-items-center">
                        <p className="mb-0">Fecha de pago <br /> <b>{ nextPayment.date }</b></p>
                        <Button color="primary" className="text-uppercase text-white">Pagar ahora</Button>
                    </div>
                    <div className="info-wrapper mt-2">
                        <p className="info-item money-bag d-flex justify-content-between align-items-center"><span>Mis logros</span><b>$27,260.00</b></p>
                        <p className="info-item credit-card d-flex justify-content-between align-items-center"><span>Compras con TDC</span><b>$1,600.00</b></p>
                    </div>
                </Card>
            </nav>
        </>
    )
}

export default Header
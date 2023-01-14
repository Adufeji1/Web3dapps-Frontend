import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
  return (
    <>
    <div className='bgblack'>
        <p className='credix'>Cre <br /> dix</p>
        <FontAwesomeIcon icon={faMinus} className='minus'></FontAwesomeIcon>
        <p className='pinvest'>Invest/Withdraw</p>
        <p className='deal'><FontAwesomeIcon icon={faCircle} className='circledeal'></FontAwesomeIcon>Deals</p>
    </div>
    </>
  )
}

export default Sidebar
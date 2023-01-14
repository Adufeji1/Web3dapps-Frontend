import './Heading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';



const Heading = () => {
  return (
    <>
    <div className='headingbg'>
    <a href="https://testnets.opensea.io/assets/mumbai/0x433ca7ee22db9e0bb8c902c4f4cb18d21d46da8d/1"><button className='button'><FontAwesomeIcon icon={faCircle} className='circle'></FontAwesomeIcon> Active</button></a>

    <a href="https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US"><button className='buttontwo'><FontAwesomeIcon icon={faCircle} className='circle'></FontAwesomeIcon> Ej5zj..E2ldl</button></a>
    </div>
    </>
  );
}



export default Heading;
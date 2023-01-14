import React from 'react'
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Body = () => {
  return (
    <>
    <div className='bodysection'>
    <p className='greenp'><FontAwesomeIcon icon={faCircle} className='pcircle'></FontAwesomeIcon> Go back to all deals</p>
    <h3 className='hdeal'>Create New Deal</h3>

    <div className='orderedlist'>
        <span className='spa'>Deal details</span>
        <span className='spa'>Tranche structure</span>
        <span className='spa'>Review</span>
    </div>
    <div className='stagetwo'> 
    <hr />
    <p>please fill in all information needed to submit a new deal</p>
    </div>

    <div className='bodypartone'>
        <p className='ptranche'><FontAwesomeIcon icon={faCircle} className='alonecircle'></FontAwesomeIcon> One tranche structure</p>
        <hr />
    
        <table>
            <tr>
            <th>-</th>
            <th>Principal</th>
            <th>Expected APR</th>
            </tr>

        <tr>
            <td>Senior</td>
            <td>100%</td>
            <td>7.9%</td>
        </tr>

        <tr>
            <td>Mezanine</td>
            <td>/</td>
            <td>/</td>
        </tr>

        <tr>
            <td>Junior</td>
            <td>/</td>
            <td>/</td>
        </tr>
        </table>
        </div>

        <div className='twotrenche'>
        <p className='ptwotranche'><FontAwesomeIcon icon={faCircle} className='alonecircle'></FontAwesomeIcon> Two tranche structure</p>
        <p className='pedit'>Edit</p>
        <hr />
    
        <table>
            <tr>
            <th>-</th>
            <th>Principal</th>
            <th>Expected APR</th>
            </tr>

        <tr>
            <td>Senior</td>
            <td>100%</td>
            <td>7.9%</td>
        </tr>

        <tr>
            <td>Mezanine</td>
            <td>/</td>
            <td>/</td>
        </tr>

        <tr>
            <td>Junior</td>
            <td>/</td>
            <td>/</td>
        </tr>
        </table>
        </div>

        <div className='threetrenche'>
        <p className='ptwotranche'><FontAwesomeIcon icon={faCircle} className='alonecircle'></FontAwesomeIcon> Third tranche structure</p>
        <p className='pedit'>Edit</p>
        <hr />
    
        <table>
            <tr>
            <th>-</th>
            <th>Principal</th>
            <th>Expected APR</th>
            </tr>

        <tr>
            <td>Senior</td>
            <td>100%</td>
            <td>7.9%</td>
        </tr>

        <tr>
            <td>Mezanine</td>
            <td>/</td>
            <td>/</td>
        </tr>

        <tr>
            <td>Junior</td>
            <td>/</td>
            <td>/</td>
        </tr>
        </table>
        </div>

    <a href="https://testnets.opensea.io/assets/mumbai/0x433ca7ee22db9e0bb8c902c4f4cb18d21d46da8d/1"><button className='text'><FontAwesomeIcon icon={faCircle} className='alonecircle'></FontAwesomeIcon> Drop your text here or Submit your text</button></a>
    </div>

    </>
  )
}

export default Body
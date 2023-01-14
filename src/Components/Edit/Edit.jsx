import './Edit.css'; 
import React,{useState} from 'react';

const Edit = () => {
    const [count, setCount] = useState(80);
    const [value, setValue] = useState(5);


  return (
    <>
    <div className='wrapper'>
        <h3 className='headingthree'>Edit tranche structure</h3>


    <div>
        <h4 className='snr'>SENIOR TRANCHE</h4>
        <label htmlFor="text" className='principal'>Principal:
            <button className='button' onClick={() => setCount(count + 1)}>{count}</button>
        </label>

        <label htmlFor="text" className='apr'>APR:
            <button onClick={() => setValue(value + 1)} className='aprbutton'>{value}</button>
        </label>
    </div>

    <div>
        <h4 className='snrtwo'>JUNIOR TRANCHE</h4>
        <label htmlFor="text" className='principaltwo'>Principal:
            <button className='buttontwo' onClick={() => setCount(count + 1)}>{count}</button>
        </label>

        <label htmlFor="text" className='aprtwo'>APR:
            <button onClick={() => setValue(value + 1)} className='aprbtntwo'>{value}</button>
        </label>
    </div>

    <div>
        <h4 className='snrthree'>MEZZANINE TRANCHE</h4>
        <label htmlFor="text" className='principalthree'>Principal:
            <button className='buttonthree' onClick={() => setCount(count + 1)}>{count}</button>
        </label>

        <label htmlFor="text" className='aprthree'>APR:
            <button onClick={() => setValue(value + 1)} className='aprbtnthree'>{value}</button>
        </label>
    </div>
    </div>
    </>
  )
}

export default Edit;
import React , {useContext} from 'react';
import {CurrencyDataContext} from './currencyContext';
import Currency from './currency';

const Currencypopulate = () => {
    const [data,,firstSet,setFirstState] = useContext(CurrencyDataContext);

    const firsetOriginalCopy = [];

    const extarctContentFromData = (currencyArr,updateArr) =>{
        data.filter(function(val){
            if(val[0] === currencyArr){
                updateArr.push(val);
            }
        });
    } 

    firstSet.map(currency => {
        extarctContentFromData(currency[0],firsetOriginalCopy);
    })
    
    const removeCurrency = (ele) =>{
        let currencyEle = ele.target.closest(".item"),
            clickedListIndex = Array.prototype.indexOf.call(ele.target.closest(".currency-list").childNodes, currencyEle); 
        
        setFirstState(prevCurrenyList => {
            let updatedCurrenyList = [...prevCurrenyList];
            updatedCurrenyList.splice(clickedListIndex,1);
            return updatedCurrenyList;
        })
    }
    return(
        <ul className='currency-list'>
            {
                firstSet.map((currency,index) => {                                                            
                    return <Currency key={currency[0]} currencyData = {currency} removeCurrency = {removeCurrency} originalSet ={firsetOriginalCopy[index]}/>                                                                        
                })
            }
        </ul>
    )
}

export default Currencypopulate;
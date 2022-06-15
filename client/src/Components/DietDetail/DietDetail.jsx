import React from 'react';
import { getAllDietsAct } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import DietCards from '../DietCard/DietCard';

const DietDetail = ()=>{
    const dispatch = useDispatch()
React.useEffect(()=>{
    dispatch(getAllDietsAct())
    return
}, [])

const diets = useSelector(state=> state.diets)

return(
    <div>
        {diets && diets.map(r =>
            <div key ={r.id}>
            <DietCards diets={r.diets} />
            </div>
            )}
    </div>
    )
}


export default DietDetail
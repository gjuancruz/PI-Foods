import React from 'react';
import { getAllDietsAct } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import DietCards from '../DietCard/DietCard';
import styles from './DietDetail.module.css'

const DietDetail = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getAllDietsAct())
        return
    }, [])

    const diets = useSelector(state => state.diets)

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>In APPetite, you can find:</h1>
                {diets && diets.map(r =>
                    <div key={r.id}>
                        <DietCards diets={r.diets} />
                    </div>
                )}
                <h1> and more...</h1>
            </div>
        </div>
    )
}


export default DietDetail
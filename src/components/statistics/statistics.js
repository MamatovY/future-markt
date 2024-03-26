import { useEffect, useState } from 'react';
import style from './statistics.module.scss'

const Statistics = () => {
    const [gbp, setGbp] = useState('');

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const getDigitSum = (number) => {
        return number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    const sum = getDigitSum(day) + getDigitSum(month) + getDigitSum(year);



    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((response) => response.json())
            .then((data) => {
                const gbp = data.Valute.GBP.Value;
                setGbp(gbp);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    return (
        <div className={style.statistics}>
            <div className={style.box}>
                <h3>
                    {sum}
                </h3>
                <div className={style.description}>
                    техника для достижения целей
                </div>
            </div>
            {gbp &&
                <div className={style.box}>
                    <h3>
                        {gbp}
                    </h3>
                    <div className={style.description}>
                        увеличение личной продуктивности
                    </div>
                </div>}
        </div>
    )
}

export default Statistics
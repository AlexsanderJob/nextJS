import Head from 'next/head';
import Image from 'next/image';
import {useState, useEffect} from "react";
import {getBitcoin} from '../api/cryptoCurrency/bitcoin';
import {wrapper} from '../redux/index';

//style
import style from "../styles/Hero.module.scss";

//img
import Logo from "../public/logo.png";
import {getCoinAction} from "../redux/actions/action";
import {useDispatch, useSelector} from "react-redux";

let interval;

async function getCoinData () {
    const res = await getBitcoin();
    if (res) {
        const coinData = [];
        for (const key in res.bpi) {
            coinData.push({
                code: res.bpi[key].code,
                price: res.bpi[key].rate,
                symbol: res.bpi[key].symbol
            })
        }
        return {
            date: res.time.updated,
            title: res.chartName,
            description: res.disclaimer,
            data: coinData
        }
    }
    return {};
}

export default function Home() {
    const dispatch = useDispatch();
    const coin = useSelector(({coin}) => coin);

    useEffect(() => {
        clearInterval(interval);
        interval = setInterval(async() => {
            clearInterval(interval);
            const resData = await getCoinData();
            dispatch(getCoinAction(resData));
        },  60000);
        return () => {
            clearInterval(interval);
        }
    }, [coin]);

    return (
        <div className={style.hero}>
            <div className={style.wr}>
                <div className={style.heroLogo}>
                    <Image src={Logo} alt="#"/>
                </div>
                <div className={style.heroContent}>
                    <h1>{coin.title}</h1>
                    <div className={style.heroDescription}>{coin.description}</div>

                    {coin?.data?.map(({code, price, symbol}, index) => {
                        return (
                            <div className={style.heroBlock} key={index}>
                                <div className={style.heroCode}>
                                    {code}
                                </div>
                                <div className={style.heroPrice}>
                                    <span className={style.heroSymbol}
                                          dangerouslySetInnerHTML={{__html: symbol}}/> {price}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const getInitialProps = wrapper.getInitialPageProps(store => async () => {
    const resCoin = await getCoinData();
    store.dispatch(getCoinAction(resCoin));
    return {
        props: {}
    };
});


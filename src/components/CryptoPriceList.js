import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wsConnect, wsDisconnect } from "../store/actions/cryptoPricesAction";
import { CryptoPriceItem } from "./CryptoPriceItem";

const CryptoPriceList = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());

    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

  const cryptoData = useSelector(state => state.cryptoPrices.cryptoData);
  return (
    <>
      <h2 className="center-align">Cryptocurrency Price</h2>
      <table class="striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((item, i) => (
            <CryptoPriceItem key={item.name} item={item} index={i + 1} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CryptoPriceList;

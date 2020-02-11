import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { wsConnect, wsDisconnect } from "../store/actions/cryptoPricesAction"

const CryptoPriceList = props => {
  const dispatch = useDispatch()

  /* useEffect(() => {
    dispatch(wsConnect())

    return () => {
      dispatch(wsDisconnect())
    }
  }, [dispatch])
 */
  const cryptoData = useSelector(state => state.cryptoPrices.cryptoData)
  return (
    <>
      <h2 className="center-align">Cryptocurrency Price</h2>
      {cryptoData.map(c => {
        return (
          <p key={c.name}>
            {c.name} : ${c.price}
          </p>
        )
      })}

      <button
        className="btn waves-effect waves-light"
        onClick={() => dispatch(wsConnect())}
      >
        Открыть сокет
      </button>

      <button
        className="btn waves-effect waves-light"
        onClick={() => dispatch(wsDisconnect())}
      >
        Закрыть сокет
      </button>
    </>
  )
}

export default CryptoPriceList

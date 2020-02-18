import React from "react";

export const CryptoPriceItem = ({ item, index }) => {
  const spinner = (
    <div
      style={{ height: 25, width: 25, marginRight: 100 }}
      class="preloader-wrapper small active"
    >
      <div class="spinner-layer spinner-green-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );

  return (
    <tr>
      <td style={{ width: 50, textAlign: "center" }}>{index}</td>
      <td style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ width: 30, marginRight: 5 }}
          src={`https://static.coincap.io/assets/icons/${item.imgName}@2x.png`}
          alt={item.name}
        />
        {item.name}
      </td>
      <td>{item.price !== null ? `$${item.price}` : spinner}</td>
    </tr>
  );
};

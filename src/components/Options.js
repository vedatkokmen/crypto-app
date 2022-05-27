import { useState, useEffect } from "react";
import axios from "axios";
import Crypto from "./Crypto";

const myCrypto = {
  id: null,
  symbol: null,
  name: null,
  nameid: null,
  rank: null,
  price_usd: null,
  percent_change_24h: null,
  percent_change_1h: null,
  percent_change_7d: null,
  market_cap_usd: null,
  volume24: null,
  volume24_native: null,
  csupply: null,
  price_btc: null,
  tsupply: null,
  msupply: null,
};

const Options = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [crypto, setCrypto] = useState(myCrypto);

  useEffect(() => {
    axios
      .get(`https://api.coinlore.net/api/ticker/?id=${selectedOption}`)
      .then((res) => setCrypto(res.data[0]));
  }, [selectedOption]);

  return (
    <>
      <div className="container m-auto space-y-2 items-center p-8 justify-center w-1/2 border h-full mt-20">
        <div className="flex flex-col p-8">
          <h3 className="text-2xl text-gray-900 font-bold">Select Crypto</h3>
          <select
            className="border p-2 font-bold mt-2 hover:border-indigo-400 "
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Crypto crypto={crypto} />
        </div>
      </div>
    </>
  );
};

export default Options;

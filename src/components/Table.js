import { useEffect, useState } from "react";
import axios from "axios";

const symbols = [
  {
    title: "ripple",
    svg: (
      <svg
        width="237"
        height="236"
        viewBox="0 0 237 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M179.073 175.082C210.527 141.629 208.907 89.0106 175.454 57.556C142.001 26.1015 89.3829 27.7216 57.9283 61.1747C26.4737 94.6278 28.0938 147.246 61.547 178.7C95.0001 210.155 147.618 208.535 179.073 175.082Z"
          fill="#1276A7"
        />
        <path
          d="M98.9347 85.9316C97.5284 91.752 99.3151 97.6613 103.425 101.526C105.583 103.555 108.599 104.706 111.592 105.411C114.167 106.146 117.604 108.552 116.184 113.098C115.381 116.54 111.78 118.645 108.363 117.943C105.377 117.646 102.173 117.58 98.9875 118.379C93.2647 120.141 89.0596 124.613 87.653 130.434C86.2464 136.255 88.0483 142.168 92.1593 146.033C96.2703 149.898 102.261 151.334 108 149.567C113.723 147.805 117.928 143.333 119.334 137.512C120.143 134.478 119.891 131.296 118.982 128.352C118.307 126.033 118.667 121.74 123.336 120.248C126.722 119.235 130.175 121.221 131.291 124.358C132.19 127.313 133.725 130.017 135.883 132.046C139.999 135.916 145.985 137.347 151.724 135.568C157.447 133.807 161.652 129.334 163.059 123.514C164.465 117.693 162.679 111.783 158.569 107.919C154.459 104.055 148.462 102.624 142.723 104.391C139.744 105.385 137.214 107.214 134.908 109.666C133.014 111.68 129.21 113.138 125.962 110.083C123.362 107.638 123.315 103.8 125.827 101.128C127.921 98.9005 129.802 96.0375 130.611 93.0036C132.018 87.1832 130.231 81.2738 126.121 77.4098C122.012 73.5457 116.014 72.1143 110.28 73.8874C107.514 74.6562 104.989 76.4791 103.096 78.4922C101.202 80.4841 99.533 83.1442 98.9356 85.9307"
          fill="#1276A7"
        />
      </svg>
    ),
  },
  {
    title: "bitcoin",
    svg: (
      <svg
        className="w-50 h-50"
        viewBox="0 0 235 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="236"
        height="236"
      >
        <path
          opacity="0.2"
          d="M186.525 71.221C212.055 109.371 201.819 160.998 163.666 186.532C125.526 212.05 73.8978 201.817 48.3715 163.666C22.8341 125.517 33.0636 73.8886 71.2086 48.3643C109.361 22.8324 160.991 33.071 186.523 71.223L186.525 71.221Z"
          fill="#F7931A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M127.111 92.4055C122.306 86.5329 115.478 88.0547 108.235 92.0338L102.408 83.326L97.1063 86.8748L102.78 95.353C101.388 96.2843 99.9822 97.265 98.586 98.2401L92.8756 89.7051L87.5779 93.2499L93.4015 101.957C92.2696 102.748 91.1569 103.524 90.0585 104.26L90.0397 104.233L82.7274 109.123L86.5171 114.783C86.5171 114.783 90.3813 112.089 90.3645 112.205C92.5119 110.768 94.0459 111.546 94.9677 112.487L101.607 122.407C101.755 122.308 101.953 122.185 102.192 122.069L101.633 122.443L110.93 136.342C111.288 137.081 111.612 138.424 110.114 139.43C110.222 139.445 106.26 142.008 106.26 142.008L109.444 149.044L116.343 144.426C117.123 143.906 117.899 143.398 118.668 142.896L118.669 142.896L118.67 142.895C119.167 142.57 119.661 142.247 120.149 141.925L126.046 150.732L131.342 147.189L125.511 138.474C126.984 137.533 128.399 136.603 129.771 135.682L135.574 144.358L140.874 140.81L134.992 132.018C143.561 125.543 148.297 119.123 143.471 110.241C139.587 103.084 134.406 102.197 128.534 104.366C130.557 100.743 130.633 96.6998 127.11 92.4068L127.111 92.4055ZM132.296 116.201C136.34 122.241 126.759 128.459 122.38 131.302L122.379 131.302C121.987 131.556 121.637 131.784 121.342 131.982L113.535 120.312C113.896 120.07 114.327 119.767 114.816 119.422L114.816 119.422C119.193 116.341 128.162 110.028 132.297 116.199L132.296 116.201ZM110.839 114.398C114.502 112.033 122.484 106.878 118.813 101.389C115.057 95.7735 107.595 101.059 103.951 103.64C103.541 103.93 103.18 104.186 102.877 104.389L109.959 114.972C110.209 114.805 110.506 114.613 110.839 114.398Z"
          fill="#F7931A"
        />
      </svg>
    ),
  },
  {
    title: "ethereum",
    svg: (
      <svg
        viewBox="0 0 236 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="236"
        height="236"
      >
        <path
          opacity="0.1"
          d="M178.879 174.695C210.333 141.242 208.713 88.6237 175.26 57.1692C141.807 25.7146 89.1889 27.3347 57.7344 60.7878C26.2798 94.241 27.8999 146.859 61.353 178.314C94.8062 209.768 147.424 208.148 178.879 174.695Z"
          fill="#3AB83A"
        />
        <mask
          id="mask0"
          //maskType="alpha"
          maskUnits="userSpaceOnUse"
          x="35"
          y="34"
          width="167"
          height="167"
        >
          <path
            d="M178.879 174.695C210.333 141.242 208.713 88.6237 175.26 57.1692C141.807 25.7146 89.1889 27.3347 57.7344 60.7878C26.2798 94.241 27.8999 146.859 61.353 178.314C94.8062 209.768 147.424 208.148 178.879 174.695Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M102.023 128.767L106.775 102.384L132.756 96.2134L87.8771 84.749L102.023 128.767ZM105.685 131.033L110.12 105.495L135.067 99.6296L130.844 124.964L105.685 131.033ZM108.072 134.455C117.244 132.251 126.827 129.964 134.234 128.202L138.74 101.839C143.998 117.863 148.372 131.206 153.176 146.012C150.153 145.239 147.068 144.449 143.958 143.654L143.957 143.653L143.953 143.653C131.569 140.484 118.799 137.217 108.072 134.455Z"
            fill="#3AB83A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M87.8812 84.7446L106.77 102.39L132.756 96.2134L87.8812 84.7446ZM110.112 105.503L135.155 99.535L130.835 124.973L110.112 105.503ZM134.229 128.208L138.74 101.839C144.789 117.021 153.17 146.018 153.17 146.018L134.229 128.208Z"
            fill="#0B8311"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "dogecoin",
    svg: (
      <svg
        width="236"
        height="236"
        viewBox="0 0 236 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M178.766 175.322C210.221 141.869 208.601 89.2511 175.147 57.7965C141.694 26.3419 89.0763 27.9621 57.6217 61.4152C26.1671 94.8683 27.7872 147.486 61.2404 178.941C94.6935 210.396 147.312 208.775 178.766 175.322Z"
          fill="#32A4BE"
        />
        <path
          opacity="0.2"
          d="M178.766 175.322C210.221 141.869 208.601 89.2511 175.147 57.7965C141.694 26.3419 89.0763 27.9621 57.6217 61.4152C26.1671 94.8683 27.7872 147.486 61.2404 178.941C94.6935 210.396 147.312 208.775 178.766 175.322Z"
          fill="#C2A633"
        />
        <mask
          id="mask0"
          //maskType="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="236"
          height="236"
        >
          <path
            d="M178.766 175.322C210.221 141.869 208.601 89.2511 175.147 57.7965C141.694 26.3419 89.0763 27.9621 57.6217 61.4152C26.1671 94.8683 27.7872 147.486 61.2404 178.941C94.6935 210.396 147.312 208.775 178.766 175.322Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.8406 94.5231L79.29 111.062L101.255 131.715L91.7685 141.805L99.0904 148.689L108.577 138.599L130.543 159.253L146.094 142.715C154.302 133.985 155.157 131.244 156.865 125.763C156.998 125.338 157.136 124.896 157.283 124.433C159.32 118.011 159.564 111.761 158.015 105.682C156.465 99.6029 153.127 94.1539 148.002 89.3348C142.877 84.5156 137.233 81.5196 131.07 80.3468C124.907 79.1739 118.684 79.802 112.399 82.231C106.115 84.66 100.262 88.7573 94.8406 94.5231ZM120.133 126.309L132.361 137.807L135.785 134.165C140.779 128.855 143.334 123.277 143.45 117.43C143.567 111.584 141.185 106.367 136.303 101.777C131.422 97.1873 126.068 95.1305 120.24 95.6066C114.412 96.0827 109.002 98.9761 104.008 104.287L100.584 107.928L112.811 119.425L123.868 107.665L131.19 114.55L120.133 126.309Z"
            fill="#C2A633"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "binance-coin",
    svg: (
      <svg
        width="236"
        height="236"
        viewBox="0 0 236 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M178.766 175.322C210.221 141.869 208.601 89.2511 175.147 57.7965C141.694 26.3419 89.0763 27.9621 57.6217 61.4152C26.1671 94.8683 27.7872 147.486 61.2404 178.941C94.6935 210.396 147.312 208.775 178.766 175.322Z"
          fill="#F3BA2F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M101.081 126.137L100.329 101.56L124.921 100.802L124.476 86.5023L85.5839 87.6954L86.7806 126.583L101.081 126.137ZM87.5276 150.986L87.0875 136.686L101.388 136.245L101.828 150.546L87.5276 150.986ZM136.075 135.17L111.493 135.927L111.914 150.233L111.934 150.233L150.816 149.03L149.614 110.138L149.613 110.128L135.318 110.578L136.075 135.17ZM135.004 100.496L134.564 86.1962L148.864 85.7557L149.304 100.056L135.004 100.496ZM110.716 111.326L125.227 110.884L125.231 110.879L125.232 110.889L125.683 125.399L111.183 125.851L111.158 125.847L111.157 125.827L111.079 123.288L111.046 122.053L110.716 111.326Z"
          fill="#F3BA2F"
        />
      </svg>
    ),
  },
];

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

function Table({ options }) {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [crypto, setCrypto] = useState(myCrypto);

  useEffect(() => {
    axios
      .get(`https://api.coinlore.net/api/ticker/?id=${selectedOption}`)
      .then((res) => setCrypto(res.data[0]));
  }, [selectedOption]);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      {symbols.map((symbol) => {
        return (
          <div key={symbol.title}>
            {symbol["title"] === crypto.nameid && symbol["svg"]}
          </div>
        );
      })}
      <div>
        <h5 className="text-xl text-gray-700">Select a coin</h5>
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
      <div className="my-8 flex flex-col md:flex-row space-x-12 items-center justify-center">
        <div>
          <p>Price in USD</p>
          <h1 className="text-5xl font-bold text-gray-800">
            {crypto.price_usd}$
          </h1>
        </div>
        <div>
          <p>24h Change</p>
          <h1 className="text-5xl font-bold text-gray-800">
            {crypto.percent_change_24h}%
          </h1>
        </div>
        <div>
          <p>7d Change</p>
          <h1 className="text-5xl font-bold text-gray-800">
            {crypto.percent_change_7d}%
          </h1>
        </div>
        <div>
          <p>24h Volume</p>
          <h1 className="text-5xl font-bold text-gray-800">
            {crypto.volume24}
          </h1>
        </div>
      </div>
      <svg viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158"
          stroke="url(#paint0_linear_622:13664)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665"
          stroke="url(#paint1_linear_622:13664)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_622:13664"
            x1="217.027"
            y1="15"
            x2="7.91244"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4DFFDF" />
            <stop offset="1" stopColor="#4DA1FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_622:13664"
            x1="218"
            y1="18.3748"
            x2="5.4362"
            y2="18.9795"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E323FF" />
            <stop offset="1" stopColor="#7517F8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Table;

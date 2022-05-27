import Table from "./components/Table";

const options = [
  {
    title: "Bitcoin",
    value: 90,
  },
  {
    title: "Ethereum",
    value: 80,
  },
  {
    title: "Binance Coin",
    value: 2710,
  },
  {
    title: "Dogecoin",
    value: 2,
  },
  {
    title: "Ripple / XRP",
    value: 58,
  },
];

const App = () => {
  return (
    <>
      <Table options={options} />
    </>
  );
};

export default App;

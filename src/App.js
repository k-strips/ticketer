import "./App.css";

const shows = [
  {
    title: "qwer",
    details: "asd",
    image: "",
    venue: "cxv",
    date: "qwer",
  },
  {
    title: "qwer",
    details: "qwer",
    venue: "qwer",
    date: "qwer",
  },
];

const App = () => {
  return (
    <div className="px-4">
      {/* <ShowsListScreen shows={shows} /> */}
      <CheckOut />
    </div>
  );
};

const ShowsListScreen = ({ title, details }) => {
  return (
    <div>
      <ul>
        {shows?.map((s, i) => (
          <li key={i}>
            {s.title} {s.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CheckOut = ({ showType, total }) => {
  return (
    <div className="grid grid-cols-3 gap-4 m-5">
      <div className="grid col-span-2 gap-3">
        <div className="ring-1 ring-slate-600 rounded-sm p-4">
          <h3 className="capitalize">delivery</h3>
          <h5 className="capitalize">mobile entry - {showType}</h5>
          <p className="text-slate-500">
            lorem ipsum dolor sit amet, consectetur adip non pro{" "}
          </p>
        </div>
        <div className="ring-1 ring-slate-600 rounded-sm p-4">
          <h3>Payment</h3>
        </div>
      </div>
      <div className="ring-1 ring-slate-600 rounded-sm p-4">
        <div class="text-bold flex">
          <h3 className="capitalize">total</h3>
          <h3>{total}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;

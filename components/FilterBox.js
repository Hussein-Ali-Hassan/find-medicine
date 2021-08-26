
import cities from "../config/cities";

export default function FilterBox({ setFilterParam }) {
  return (
    <select
      className="form-select"
      onChange={(e) => setFilterParam(e.target.value)}
    >
      <option selected disabled>
        المنطقة
      </option>{" "}
      <option value="All">جميع المناطق</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
}

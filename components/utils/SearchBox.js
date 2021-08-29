export default function SearchBox({ q, setQ }) {
  return (
    <form>
      <input
        value={q}
        type="text"
        onChange={(e) => setQ(e.target.value)}
        className="form-control"
        placeholder="إبحث عن دواء .."
      />
    </form>
  );
}

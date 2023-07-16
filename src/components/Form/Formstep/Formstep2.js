export default function Formstep2({ page, setPage }) {
  return (
    <div className="form-step">
      <div className="input-group">
        <label for="phone">Phone: </label>
        <input type="text" id="phone" name="phone" />
      </div>

      <div className="input-group">
        <label for="email">Email: </label>
        <input type="text" id="email" name="email" />
      </div>

      <div className="btns-group">
        <a className="btn btn-prev" onClick={() => setPage((prev) => prev - 1)}>
          Prev
        </a>
        <a className="btn btn-next" onClick={() => setPage((prev) => prev + 1)}>
          Next
        </a>
      </div>
    </div>
  );
}

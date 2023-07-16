export default function Formstep3({ page, setPage }) {
  return (
    <div className="form-step">
      <div className="input-group">
        <label for="dob">Date of birth: </label>
        <input type="date" id="dob" name="dob" />
      </div>

      <div className="input-group">
        <label for="nationalid">Id: </label>
        <input type="number" id="nationalid" name="nationalid" />
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

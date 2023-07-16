export default function Formstep4({ page, setPage }) {
  return (
    <div className="form-step">
      <div className="input-group">
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" />
      </div>

      <div className="input-group">
        <label for="confirmpassword">Confirm password: </label>
        <input type="password" id="confirmpassword" name="confirmpassword" />
      </div>

      <div className="btns-group">
        <a className="btn btn-prev" onClick={() => setPage((prev) => prev - 1)}>
          Prev
        </a>

        <input type="submit" value="Submit" className="btn" />
      </div>
    </div>
  );
}

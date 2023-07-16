export default function Formstep1({ page, setPage }) {
  return (
    <div className="form-step form-step-active">
      <div className="input-group">
        <label for="username">Username: </label>
        <input type="text" id="username" name="username" />
      </div>

      <div className="input-group">
        <label for="position">Position: </label>
        <input type="text" id="position" name="position" />
      </div>

      <div className="">
        <a
          className="btn btn-next width-50 ml-auto"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </a>
      </div>
    </div>
  );
}

const ChangeCode = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto p-8">
          <div className="card">
            <div className="card-body rounded-lg border border-blue-500/20">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Current Pin:</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered  bg-base-content/30"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter New Pin:</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered  bg-base-content/30"
                />
                <label className="label">
                  <span className="label-text text-base-content/50">
                    (Pin has to be 6 digits no character should be included)
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm New Pin:</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered  bg-base-content/30"
                />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeCode;

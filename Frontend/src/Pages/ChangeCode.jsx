import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ChangeCode = () => {
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmedPin, setConfirmedPin] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/user");
      setUser(res.data);
    };
    fetchData();
  }, []);

  const handleUpdatePin = async (e) => {
    e.preventDefault();
    // if (!window.confirm("Are you sure you want to change your PIN?")) return;
    if (!user) return toast.error("Something went wrong!");
    if (!currentPin.trim() || !newPin.trim() || !confirmedPin.trim()) {
      return toast.error("All fields should are required!");
    }
    if (newPin !== confirmedPin) {
      return toast.error("Confirm your new Pin correctly!");
    }
    setIsSaving(true);
    try {
      const res = await axios.put(
        `http://localhost:4000/api/user/update/${user.getPin._id}`,
        { currentPin, confirmedPin },
      );
      if (res.status === 200) {
        toast.success("PIN has been changed successfully!");
        setCurrentPin("");
        setNewPin("");
        setConfirmedPin("");
        navigate("/");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        return toast.error("sorry user not found!");
      }
      if (error.response?.status === 401) {
        return toast.error("sorry your current PIN is wrong, Try again!");
      }
      if (error.response?.status === 404) {
        return toast.error("PIN has failed to update!");
      }
    } finally {
      setIsSaving(false);
    }
  };

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
                  maxLength={6}
                  onChange={(e) => {
                    setCurrentPin(e.target.value.replace(/\D/g, ""));
                  }}
                  value={currentPin}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter New Pin:</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered  bg-base-content/30"
                  maxLength={6}
                  onChange={(e) => {
                    setNewPin(e.target.value.replace(/\D/g, ""));
                  }}
                  value={newPin}
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
                  maxLength={6}
                  onChange={(e) => {
                    setConfirmedPin(e.target.value.replace(/\D/g, ""));
                  }}
                  value={confirmedPin}
                />
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={handleUpdatePin}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeCode;

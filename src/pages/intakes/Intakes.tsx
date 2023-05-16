import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCreateUniversityMutation } from "../../redux/features/university/universityApiSlice";
import { toast } from "react-toastify";

function Intakes() {
  const navigate = useNavigate();
  const [updateUniversity] = useCreateUniversityMutation()


  const [input, setInput] = useState(2);
  function handleAddInput() {
    if (input < 6) setInput(input + 1);
  }
  function handleRemoveInput() {
    if (input > 2) setInput(input - 1);
  }
  const inputs = Array.from({ length: input }, (_, i) => i + 1).map((n, i) => (
    <input
      key={i + n}
      type="text"
      name="intakes[]"
      id="intakes"
      placeholder="January"
      className="w-full px-4 py-2"
    />));


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const intakes = formData.getAll("intakes[]");

    console.log(intakes);

    updateUniversity({ name: formData.get("name"), intakes })
      .unwrap()
      .then(res => {
        toast.success("University updated successfully");
        navigate("/school-photos")
        console.log(res);
      })
      .catch(err => {
        toast.error("Something went wrong");
        console.log(err);
      })

  }

  return (
    <form className="w-[80%] text-xl font-medium" onSubmit={handleSubmit}>
      <h1 className="my-6 text-4xl font-semibold">University Data</h1>

      <fieldset className="flex flex-col gap-4">
        <div className="fixed flex items-center justify-center gap-4 p-4 top-6 control">
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={handleAddInput}
          >
            <FaPlusCircle className="text-xl" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={handleRemoveInput}
          >
            <FaMinusCircle className="text-xl" />
          </button>
          <p>{input > 1 ? `${input} fields added for intakes` : `${input} field added for intakes`}</p>
        </div>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="name">University Name</label>
          <input required type="text" id="name" name="name" className="w-full px-4 py-2" placeholder='Please always provide the name of the university' />
        </fieldset>
        <fieldset className="flex flex-col gap-2">

          <label htmlFor="intakes">Intakes</label>
          {inputs}
        </fieldset>
        <fieldset className="flex flex-col">
          <button className="text-2xl" type="submit">Next</button>
        </fieldset>
      </fieldset>
    </form>
  );
}

export default Intakes;

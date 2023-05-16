import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCreateUniversityMutation } from '../../redux/features/university/universityApiSlice';
import { toast } from 'react-toastify';

function QualifyingExams() {
  const navigate = useNavigate();
  const [updateUniversity] = useCreateUniversityMutation()


  const [input, setInput] = useState(1);
  function handleAddInput() {
    if (input < 6) setInput(input + 1);
  }
  function handleRemoveInput() {
    if (input > 1) setInput(input - 1);
  }
  const inputs = Array.from({ length: input }, (_, i) => i + 1).map((n, i) => (
    <input type="text" name="qualifying_exams[]" id="qualifying_exams" placeholder="TOEFL" className="w-full px-4 py-2" key={n + i} />));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const qualifying_exams = formData.getAll("qualifying_exams[]");

    updateUniversity({ name: formData.get("name"), qualifying_exams })
      .unwrap()
      .then(res => {
        toast.success("University updated successfully");
        navigate("/categories-of-all-programs")
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
        <div className="fixed flex items-center justify-center gap-4 p-4 control top-6">
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
          <p>{input > 1 ? `${input} fields added for qualifying exams` : `${input} field added for qualifying exams`}</p>
        </div>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="name">University Name</label>
          <input required type="text" id="name" name="name" className="w-full px-4 py-2" placeholder='Please always provide the name of the university' />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="qualifying_exams">Qualifying Exams</label>
          {inputs}
        </fieldset>
        <fieldset className="flex flex-col">
          <button className="text-2xl" type="submit">Next</button>
        </fieldset>
      </fieldset>
    </form>
  )
}

export default QualifyingExams
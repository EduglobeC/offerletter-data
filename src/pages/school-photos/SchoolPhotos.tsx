import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCreateUniversityMutation } from '../../redux/features/university/universityApiSlice';
import { toast } from 'react-toastify';

function SchoolPhotos() {
  const navigate = useNavigate();
  const [updateUniversity] = useCreateUniversityMutation()


  const [input, setInput] = useState(1);
  function handleAddInput() {
    setInput(input + 1);
  }
  function handleRemoveInput() {
    if (input > 1) setInput(input - 1);
  }
  const inputs = Array.from({ length: input }, (_, i) => i + 1).map((n, i) => (
    <input type="file" name="schoolPhotos" id="schoolPhotos" key={n + i} />
  ));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    updateUniversity(formData)
      .unwrap()
      .then(res => {
        toast.success("University updated successfully");
        navigate("/qualifying-exams")
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
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="name">University Name</label>
          <input required type="text" id="name" name="name" className="w-full px-4 py-2" placeholder='Please always provide the name of the university' />
        </fieldset>
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
          <p>{input > 1 ? `${input} fields added for school photos` : `${input} field added for school photos`}</p>
        </div>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="school_photos">School Photos</label>
          {inputs}
        </fieldset>

        <fieldset className="flex flex-col">
          <button className="text-2xl" type="submit">Next</button>
        </fieldset>
      </fieldset>
    </form >
  )
}

export default SchoolPhotos
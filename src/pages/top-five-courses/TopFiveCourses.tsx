import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateUniversityMutation } from '../../redux/features/university/universityApiSlice';
import { toast } from 'react-toastify';

function TopFiveCourses() {
  const navigate = useNavigate();
  const [updateUniversity] = useCreateUniversityMutation()
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const top_five_courses = formData.getAll('top_five_courses[]')
    const data = Object.fromEntries(formData);

    updateUniversity({ name: data.name, top_five_courses })
      .unwrap()
      .then(res => {
        toast.success('University updated successfully')
        navigate("/world-ranking")
        console.log(res);
      })
      .catch(err => {
        toast.error('Something went wrong')
        console.log(err);
      })
  }
  return (
    <form className="w-[80%] text-xl font-medium" onSubmit={handleSubmit}>
      <h1 className="my-6 text-4xl font-semibold">University Data</h1>
      <fieldset className="flex flex-col gap-4">
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="name">University Name</label>
          <input required type="text" id="name" name="name" className="w-full px-4 py-2" />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="top_five_courses">Top Five Courses</label>
          <input type="text" name="top_five_courses[]" id="top_five_courses" className="w-full px-4 py-2" />
          <input type="text" name="top_five_courses[]" id="top_five_courses" className="w-full px-4 py-2" />
          <input type="text" name="top_five_courses[]" id="top_five_courses" className="w-full px-4 py-2" />
          <input type="text" name="top_five_courses[]" id="top_five_courses" className="w-full px-4 py-2" />
          <input type="text" name="top_five_courses[]" id="top_five_courses" className="w-full px-4 py-2" />
        </fieldset>

        <fieldset className="flex flex-col">
          <button className="text-2xl" type="submit">Next</button>
        </fieldset>
      </fieldset>
    </form>
  )
}

export default TopFiveCourses
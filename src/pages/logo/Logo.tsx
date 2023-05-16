import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCreateUniversityMutation } from '../../redux/features/university/universityApiSlice';
import { toast } from 'react-toastify';

function Logo() {
  const navigate = useNavigate();
  const [updateUniversity] = useCreateUniversityMutation()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    updateUniversity(formData)
      .unwrap()
      .then(res => {
        navigate("/intakes")
        toast.success('University updated successfully')
        console.log(res);
      })
      .catch(err => {
        toast.error('Something went wrong')
        console.log(err);
      })

  }

  return (<form className="w-[80%] text-xl font-medium" onSubmit={handleSubmit}>
    <h1 className="my-6 text-4xl font-semibold">University Data</h1>

    <fieldset className="flex flex-col gap-4">
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="name">University Name</label>
        <input required type="text" id="name" name="name" className="w-full px-4 py-2" placeholder='Please always provide the name of the university' />
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label htmlFor="logo">Logo</label>
        <input type="file" name="logo" id="logo" />
      </fieldset>

      <fieldset className="flex flex-col">
        <button className="text-2xl" type="submit">Next</button>
      </fieldset>
    </fieldset>

  </form>)

}

export default Logo
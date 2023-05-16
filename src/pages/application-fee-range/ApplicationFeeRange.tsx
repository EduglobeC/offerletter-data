import { useNavigate } from 'react-router-dom';
import { useCreateUniversityMutation } from '../../redux/features/university/universityApiSlice';
import { toast } from 'react-toastify';

function ApplicationFeeRange() {
  const navigate = useNavigate();
  const [updateUniversity] = useCreateUniversityMutation()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { min, max } = data
    const application_fee_range = { min, max }


    updateUniversity({ name: data.name, application_fee_range })
      .unwrap()
      .then(res => {
        navigate("/top-five-courses")
        toast.success("University updated successfully")
        console.log(res);
      })
      .catch(err => {
        toast.error("Something went wrong")
        console.log(err);
      })
  }

  return (
    <form className="w-[80%] text-xl font-medium" onSubmit={handleSubmit}>
      <h1 className="my-6 text-4xl font-semibold">University Data</h1>

      <fieldset className="flex flex-col gap-4">

        <fieldset className="flex flex-col gap-2 mb-6">
          <p className="mt-6 text-2xl">Application Fee Range</p>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="name">University Name</label>
            <input required type="text" id="name" name="name" className="w-full px-4 py-2" placeholder='Please always provide the name of the university' />
          </fieldset>
          <fieldset className="flex justify-between">
            <fieldset className="w-[45%] flex flex-col gap-2">
              <label htmlFor="min">Min</label>
              <input type="number" step="any" name="min" id="application_fee_range" placeholder="0.00" className="px-4 py-2 wfull" />
            </fieldset>
            <fieldset className="w-[45%] flex flex-col gap-2">
              <label htmlFor="max">Max</label>
              <input type="number" step="any" name="max" id="application_fee_range" placeholder="0.00" className="w-full px-4 py-2" />
            </fieldset>
          </fieldset>
        </fieldset>
        <fieldset className="flex flex-col">
          <button className="text-2xl" type="submit">Next</button>
        </fieldset>
      </fieldset>
    </form>
  )
}

export default ApplicationFeeRange
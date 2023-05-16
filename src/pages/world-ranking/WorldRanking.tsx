import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateUniversityMutation } from '../../redux/features/university/universityApiSlice'
import { toast } from 'react-toastify'

function WorldRanking() {
  const navigate = useNavigate()
  const [updateUniversity] = useCreateUniversityMutation()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = Object.fromEntries(formData)

    const labels = [2019, 2020, 2021, 2022, 2023]
    const the_ranking = formData.getAll("the_ranking[]")
    const qs_ranking = formData.getAll("qs_ranking[]")

    const world_ranking = {
      labels,
      the_ranking,
      qs_ranking
    }

    updateUniversity({ name: data.name, world_ranking })
      .unwrap()
      .then(res => {
        toast.success('University updated successfully')
        navigate("/logo")
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
          <input required type="text" id="name" name="name" className="w-full px-4 py-2" placeholder='Please always provide the name of the university' />
        </fieldset>

        <fieldset className="flex flex-col gap-2 mb-6">
          <p className="mt-6 text-2xl">World Ranking</p>
          <fieldset className="flex justify-between">
            <fieldset className="flex gap-2 flex-col w-[45%]">
              <p>THE Ranking</p>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2019">2019</label>
                <input type="number" id="2019" name="the_ranking[]" placeholder="23" className="w-full px-4 py-2" />
              </fieldset>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2020">2020</label>
                <input type="number" id="2020" name="the_ranking[]" className="w-full px-4 py-2" />
              </fieldset>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2021">2021</label>
                <input type="number" id="2021" name="the_ranking[]" className="w-full px-4 py-2" />
              </fieldset>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2022">2022</label>
                <input type="number" id="2022" name="the_ranking[]" className="w-full px-4 py-2" />
              </fieldset>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2023">2023</label>
                <input type="number" id="2023" name="the_ranking[]" className="w-full px-4 py-2" />
              </fieldset>
            </fieldset>
            <fieldset className="flex gap-2 flex-col w-[45%]">
              <p>QS Ranking</p>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2019">2019</label>
                <input type="number" id="2019" name="qs_ranking[]" placeholder="32" className="w-full px-4 py-2" />
              </fieldset>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2020">2020</label>
                <input type="number" id="2020" name="qs_ranking[]" className="w-full px-4 py-2" />
              </fieldset>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2021">2021</label>
                <input type="number" id="2021" name="qs_ranking[]" className="w-full px-4 py-2" />
              </fieldset>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2022">2022</label>
                <input type="number" id="2022" name="qs_ranking[]" className="w-full px-4 py-2" />
              </fieldset>
              <fieldset className="flex items-center gap-4">
                <label htmlFor="2023">2023</label>
                <input type="number" id="2023" name="qs_ranking[]" className="w-full px-4 py-2" />
              </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>

        <fieldset className="flex flex-col">
          <button className="text-2xl" type='submit'>Next</button>
        </fieldset>
      </fieldset>
    </form>
  )
}

export default WorldRanking
import { useUpdateUniversityFaqMutation } from '../../redux/features/university/universityApiSlice';
import { toast } from 'react-toastify';

function Faq() {
  const [updateUniversityFaq] = useUpdateUniversityFaqMutation()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { uni_name, ...faq } = data

    updateUniversityFaq({ name: uni_name, faq })
      .unwrap()
      .then(res => {
        console.log(res);
        toast.success("Wow! wasn't that easy? now clear the inputs and add more faq or you start over with a new university name. Well done!🤷‍♀️", {
          autoClose: 10000
        })
      })
      .catch(err => {
        console.log(err);
        toast.error("That didn't work Mummy!😭")
      })
  }

  return (
    <form className="w-[80%] text-xl font-medium" onSubmit={handleSubmit}>
      <h1 className="my-6 text-4xl font-semibold">University Data</h1>

      <fieldset className="flex flex-col gap-4">
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="name">University Name</label>
          <input required type="text" id="name" name="uni_name" className="w-full px-4 py-2" placeholder='Please always provide the name of the university' />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <p className='mt-6 text-2xl'>FAQ</p>
          <fieldset className='flex flex-col gap-2'>
            <fieldset className="flex items-center gap-4">
              <label htmlFor="question">Question</label>
              <input type="text" name="question" id="question" className="w-full px-4 py-2" />
            </fieldset>
            <fieldset className="flex items-center gap-4">
              <label htmlFor="answer">Answer</label>
              <input type="text" name="answer" id="answer" className="w-full px-4 py-2" />
            </fieldset>
          </fieldset>
        </fieldset>
        <fieldset className="flex flex-col">
          <button className="text-2xl" type="submit">Submit</button>
        </fieldset>
      </fieldset>
    </form>
  )
}

export default Faq
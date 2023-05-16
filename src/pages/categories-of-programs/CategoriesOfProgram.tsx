import ProgramsCategories from "../../component/home/categories-of-programs";
import { useNavigate } from "react-router-dom";
import { useUpdateUniversityProgramMutation } from "../../redux/features/university/universityApiSlice";
import { toast } from "react-toastify";
function CategoriesOfProgram() {
  const navigate = useNavigate();
  const [updateUniversityProgram] = useUpdateUniversityProgramMutation()


  function handleSkip() {
    navigate("/faq")
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { uni_name, ...categories_of_all_programs } = data

    console.log({ uni_name, categories_of_all_programs });
    updateUniversityProgram({ name: uni_name, categories_of_all_programs })
      .unwrap()
      .then(res => {
        toast("Wow! wasn't that easy? now clear the inputs and add more programs or you can skip!🤷‍♀️")
        console.log(res);
      })
      .catch(err => {
        toast.error("That didn't work Mummy!😭")
        console.log(err);
      })
  }

  return (
    <form className="w-[80%] text-xl font-medium" onSubmit={handleSubmit}>
      <h1 className="my-6 text-4xl font-semibold">University Data</h1>
      <p className='my-10 text-2xl'>Categories of all Programs</p>

      <fieldset className="flex flex-col gap-2 my-10">
        <label htmlFor="name">University Name</label>
        <input required type="text" id="name" name="uni_name" className="w-full px-4 py-2" placeholder='Please always provide the name of the university' />
      </fieldset>


      <fieldset className="flex flex-col gap-4">


        <fieldset className="flex flex-col gap-24">
          <ProgramsCategories />
        </fieldset>

        <fieldset className="flex flex-col items-center mt-6">
          <fieldset className="flex items-center w-full gap-10">
            <button className="w-full text-2xl" type="button" onClick={handleSkip}>Skip</button>
            <button className="w-full text-2xl text-green-500" type="submit" >Submit and add More Programs</button>
          </fieldset>
        </fieldset>
      </fieldset>
    </form>
  );
}

export default CategoriesOfProgram;

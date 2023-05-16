import { useNavigate } from "react-router-dom";
import { useCreateUniversityMutation } from "../../redux/features/university/universityApiSlice";
import { toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();
  const [createUniversity] = useCreateUniversityMutation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const is_mbbs = data.isMbbs === "on";
    const can_work_and_study = data.canWorkAndStudy === "on";

    createUniversity({ ...data, is_mbbs, can_work_and_study })
      .unwrap()
      .then((res) => {
        toast.success("Success!🥳")
        console.log(res);
        navigate("/application-fee-range")
      })
      .catch((err) => {
        toast.error("That didn't work Mummy!😭")
        console.log(err);
      })
  }

  return <form className="w-[80%] text-xl font-medium" onSubmit={handleSubmit}>
    <h1 className="my-6 text-4xl font-semibold">University Data</h1>

    <fieldset className="flex flex-col gap-4">
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="name">University Name</label>
        <input required type="text" id="name" name="name" className="w-full px-4 py-2" />
      </fieldset>
      <fieldset className="flex items-center gap-4">
        <input type="checkbox" name="isMbbs" id="isMbbs" />
        <label htmlFor="is_mbbs">MBBS University (Not required if unchecked university is a non MBBS university)</label>
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="about">About University</label>
        <textarea name="about" id="about" className="w-full h-[300px] px-4 py-2 resize-none" />
      </fieldset>

      <fieldset className="flex justify-between">
        <fieldset className="flex gap-2 flex-col w-[45%]">
          <label htmlFor="address">Address</label>
          <input required type="text" name="address" id="address" className="w-full px-4 py-2" />
        </fieldset>

        <fieldset className="flex gap-2 flex-col w-[45%]">
          <label htmlFor="city">City</label>
          <input required type="text" name="city" id="city" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>

      <fieldset className="flex justify-between">
        <fieldset className="flex gap-2 flex-col w-[45%]">
          <label htmlFor="country">Country</label>
          <input required type="text" name="country" id="country" className="w-full px-4 py-2" />
        </fieldset>

        <fieldset className="flex gap-2 flex-col w-[45%]">
          <label htmlFor="institution-type">Institution Type</label>
          <select name="institution_type" id="institution-type" className="w-full px-4 py-2">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </fieldset>
      </fieldset>

      <fieldset className="flex justify-between">
        <fieldset className="flex gap-2 flex-col w-[45%]">
          <label htmlFor="founded_in">Founded in (Year)</label>
          <input required type="number" step="any" name="founded_in" id="founded-in" placeholder="2024" className="w-full px-4 py-2" />
        </fieldset>
        <fieldset className="flex gap-2 flex-col w-[45%]">
          <label htmlFor="isp">International Student Percentage</label>
          <input required type="number" step="any" name="international_student_percentage" id="isp" placeholder="30" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>


      <fieldset className="flex justify-between">
        <fieldset className="w-[45%] flex flex-col gap-2">
          <label htmlFor="student_teacher_ratio">Student Teacher Ratio</label>
          <input required type="text" name="student_teacher_ratio" id="student_teacher_ratio" placeholder="12:3" className="w-full px-4 py-2" />
        </fieldset>
        <fieldset className="w-[45%] flex flex-col gap-2">
          <label htmlFor="avg_tuition">Average Tuition Fee (Per Year)</label>
          <input required type="number" step="any" name="avg_tuition" id="avg_tuition" placeholder="0.00" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>

      <fieldset className="flex justify-between">
        <fieldset className="flex items-center gap-4 w-[45%]">
          <input type="checkbox" name="can_work_and_study" id="can_work_and_study" />
          <label htmlFor="can_work_and_study">Study Work Permit Avaliable</label>
        </fieldset>
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="cost_of_living">Annual Cost of Living</label>
          <input required type="number" step="any" name="cost_of_living" id="cost_of_living" placeholder="0.00" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>


      <fieldset className="flex justify-between">
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="postal_code" >Postal Code</label>
          <input required type="text" name="postal_code" id="postal_code" className="w-full px-4 py-2" />
        </fieldset>
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="country_code" >Country Code</label>
          <input required type="text" name="country_code" id="country_code" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>

      <fieldset className="flex justify-between">
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="currency_of_fees">Currency of Fees</label>
          <input required type="text" name="currency_of_fees" id="currency_of_fees" placeholder="$AUD" className="w-full px-4 py-2" />
        </fieldset>
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="flag">Flag</label>
          <input required type="text" name="flag" id="flag" placeholder="data:image/png;base64,..." className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>

      <fieldset className="flex justify-between">
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="latitude">Latitude</label>
          <input required type="number" step="any" name="latitude" id="latitude" className="w-full px-4 py-2" />
        </fieldset>
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="longitude">Longitude</label>
          <input required type="number" step="any" name="longitude" id="longitude" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>




      <fieldset className="flex flex-col gap-2">
        <label htmlFor="video_link">Video Link</label>
        <input required type="text" name="video_link" id="video_link" className="w-full px-4 py-2" placeholder="https://www.youtube.com/embed/LrByokzunww" />
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label htmlFor="school_accommodation_information">School Accommodation Information</label>
        <textarea name="school_accommodation_information" id="school_accommodation_information" className="w-full h-[200px] px-4 py-2 resize-none" />
      </fieldset>



      <fieldset className="flex justify-between">
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="no_of_applicants">No. of Applicants</label>
          <input required type="number" step="any" name="no_of_applicants" id="no_of_applicants" className="w-full px-4 py-2" />
        </fieldset>
        <fieldset className="flex flex-col gap-2 w-[45%]">
          <label htmlFor="no_of_intakes">Total Admissions</label>
          <input required type="number" step="any" name="no_of_intakes" id="no_of_intakes" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>

      <fieldset className="flex flex-col">
        <button className="text-2xl" type="submit">Next</button>
      </fieldset>
    </fieldset>


  </form>;
}

export default Home;

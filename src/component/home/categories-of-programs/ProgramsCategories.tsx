function ProgramsCategories() {
  return (
    <fieldset className="flex flex-col gap-2">
      <fieldset className="flex items-center gap-4">
        <label htmlFor="prog-name" className="min-w-max">Program Name</label>
        <input type="text" name="name" id="prog-name" className="w-full px-4 py-2" />
      </fieldset>
      <fieldset className="flex justify-between">
        <fieldset className="flex items-center gap-4 w-[45%]">
          <label htmlFor="prog-fee" className="min-w-max">Program Fee</label>
          <input type="number" step="any" name="fee" id="prog-fee" placeholder="0.00" className="w-full px-4 py-2" />
        </fieldset>
        <fieldset className="flex items-center gap-4 w-[45%]">
          <label htmlFor="prog-duration" className="min-w-max">Program Duration</label>
          <input type="text" name="duration" id="prog-duration" placeholder="6 Months" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>
      <fieldset className="flex justify-between">
        <fieldset className="flex items-center gap-4 w-[45%]">
          <label htmlFor="prog-mode_of_degree" className="min-w-max">Mode of Degree</label>
          <input type="text" name="mode_of_degree" id="prog-mode_of_degree" placeholder="On Campus" className="w-full px-4 py-2" />
        </fieldset>
        <fieldset className="flex items-center gap-4 w-[45%]">
          <label htmlFor="prog-course_level" className="min-w-max">Course Level</label>
          <input type="text" name="course_level" id="prog-course_level" placeholder="Masters" className="w-full px-4 py-2" />
        </fieldset>
      </fieldset>
      <fieldset className="flex justify-between">
        <fieldset className="flex items-center gap-4 w-[45%]">
          <label htmlFor="prog-qualification" className="min-w-max">Qualification</label>
          <input type="text" name="qualification" id="prog-qualification" className="w-full px-4 py-2" placeholder="Test name : Score e.g. IELTS: 7.0" />
        </fieldset>
        <fieldset className="flex items-center gap-4 w-[45%]">
          <label htmlFor="prog-tuition" className="min-w-max">Tuition</label>
          <input type="number" step="any" name="tuition" id="prog-tuition" className="w-full px-4 py-2" placeholder="0.00" />
        </fieldset>
      </fieldset>

      <fieldset className="flex items-center gap-4">
        <label htmlFor="prog-about_program" className="min-w-max">About Program</label>
        <textarea name="about" id="prog_about_program" className="w-full h-[200px] px-4 py-2 resize-none" />
      </fieldset>
    </fieldset>)
}

export default ProgramsCategories
const skills= [
  "React",
"Javascript",
"HTML",
"CSS",
"Tailwind CSS",
"python",
"Django",
"Git",
"GitHub",
];

function Skills(){
  return(
     <div className="mt-20">

      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {skills.map((skill) => (

          <div
            key={skill}
            className="bg-slate-800 p-6 rounded-lg hover:bg-cyan-500 duration-300"
          >

            <h3 className="text-xl font-semibold text-center">
              {skill}
            </h3>

          </div>

        ))}

      </div>

    </div>
  )
}
export default Skills;
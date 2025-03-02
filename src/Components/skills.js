const SkillsSection = ()=>{
    return(
        <section className="w-75 container">
            <h1 className="my-skill my-3 text-center">My <span className="me">Skills</span></h1>
                <h2 className="my-skill my-skill1 dev">Coding Skills</h2>
                <section className="m-1 p-2 row row-cols-2 sl1 rounded-3">
                    <section className=" col ">
                        <h3 className="skills">Java</h3>
                    <div className="progress ">
                        <div className="progress-bars" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">SpringBoot</h3>
                    <div className="progress">
                        <div className="progress-bar progress-bars1" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">JavaScript</h3>
                    <div className="progress">
                        <div className="progress-bars2" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">NodeJS</h3>
                    <div className="progress">
                        <div className="progress-bars3" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">React</h3>
                    <div className="progress">
                        <div className="progress-bars4" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">ExpressJS</h3>
                    <div className="progress">
                        <div className="progress-bars5" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">HTML</h3>
                    <div className="progress">
                        <div className="progress-bars6" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">CSS</h3>
                    <div className="progress">
                        <div className="progress-bars7" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">Bootstrap</h3>
                    <div className="progress">
                        <div className="progress-bars8" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">Tailwind</h3>
                    <div className="progress">
                        <div className="progress-bars9" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">MongoDB</h3>
                    <div className="progress">
                        <div className="progress-bars10" ></div>
                    </div>
                    </section>
                    <section className=" col ">
                        <h3 className="skills">OracleDB</h3>
                    <div className="progress">
                        <div className="progress-bars11" ></div>
                    </div>
                    </section>
                </section>

                   <h2 className="mt-4 my-skill my-skill1 dev">Professional Skills</h2>
                <section className="row row-cols-2 m-1 p-2 sl1  rounded-3">
                    <section>
                        <h3 className="skills">Frontent Development</h3>
                    <div className="progress">
                        <div className="progress-bars12" ></div>
                    </div>
                    </section>
                    <section>
                        <h3 className="skills">Backend Development</h3>
                    <div className="progress">
                        <div className="progress-bars13" ></div>
                    </div>
                    </section>
                    <section>
                        <h3 className="skills">DSA</h3>
                    <div className="progress">
                        <div className="progress-bars14" ></div>
                    </div>
                    </section>
                </section>

        </section>
    )
}

export default SkillsSection;
import { v4 as uuidv4 } from 'uuid';
export function Home(){
    return(
        <div class="container mt-0 my-23 mx-auto md:px-6 mb-0">
          <section class="mb-32">
            <div
              class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="flex flex-wrap items-center">
                {/* <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                  <img src="Yared.jpg" alt="Trendy Pants and Shoes"
                    class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30" />
                </div> */}
<div class="lg:flex lg:w-6/12 xl:w-4/12">
  <img src="Yared.jpg" alt="Trendy Pants and Shoes"
    class="w-full  lg:w rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30" />
</div>






                <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
                  <div class="px-6 py-12 md:px-12">
                    <h2 class="mb-4 text-2xl font-bold">
                             Yared Mekonnen
                    </h2>
                    <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                      Web developer
                    </p>
                    <p class="mb-6 text-neutral-500 dark:text-neutral-300">
            Hello there! I'm Yared, a passionate and creative web developer with a keen eye for design and a love for
            coding. I specialize in crafting clean and functional websites that not only look great but also provide a
            seamless user experience. With  over 2 years of experience in the field, I bring a unique blend of technical
            expertise and artistic flair to every project I undertake.
                    </p>
<section id="skills">
        <h2>Skills</h2>
        <ul>
            <li><strong>Frontend Development:</strong>
                <ul>
                    <li>Proficient in HTML5, CSS3, JavaScript, and popular frontend frameworks such as React and Vue.js.</li>
                    <li>Responsive design implementation for a seamless user experience across devices.</li>
                </ul>
            </li>
            <li><strong>Backend Development:</strong>
                <ul>
                    <li>Experienced in server-side scripting with Node.js and Python.</li>
                    <li>Database design and management using MongoDB, MySQL, and PostgreSQL.</li>
                </ul>
            </li>
            <li><strong>Full Stack Proficiency:</strong>
                <ul>
                    <li>Comfortable working on both frontend and backend, ensuring a holistic approach to web development.</li>
                    <li>RESTful API design and integration for smooth communication between server and client.</li>
                </ul>
            </li>
            <li><strong>UI/UX Design:</strong>
                <ul>
                    <li>Aesthetic sensibility combined with a user-centric design approach.</li>
                    <li>Figma and Sketch for wireframing and prototyping.</li>
                </ul>
            </li>
            <li><strong>Version Control:</strong>
                <ul>
                    <li>Git for efficient collaboration and version tracking.</li>
                </ul>
            </li>
        </ul>
    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}
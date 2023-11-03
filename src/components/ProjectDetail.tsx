import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageI } from "../interfaces/project.interface";
import {
   IoIosArrowDropdownCircle,
   IoIosArrowDropupCircle,
} from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { AiFillCode, AiFillCheckCircle } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import Title from "./shared/Title";
import Button from "./shared/buttons/Button";
import Tag from "./shared/Tag";
import FsLightbox from "fslightbox-react";
const LightBox = (FsLightbox as any).default
   ? (FsLightbox as any).default
   : FsLightbox;

function ProjectDetail() {
   const navigate = useNavigate();
   // FIXME: There is something weird with the state variables
   const [state, setState] = useState(false);
   const [collapsed, setCollapsed] = useState(true);
   const [lightboxController, setLightboxController] = useState({
      toggler: false,
      slide: 1,
   });

   const location = useLocation();
   const { name, description, points, tags, images, link, github } =
      location.state;

   const imagesSources = images.map((image: any) => image.src);

   useEffect(() => {
      if (state) {
         navigate("/projects");
      }
   }, [state]);

   function openLightboxOnSlide(number: number) {
      setLightboxController({
         toggler: !lightboxController.toggler,
         slide: number,
      });
   }

   const handleCollapse = () => {
      collapsed ? setCollapsed(false) : setCollapsed(true);
   };

   return (
      <div className="relative h-auto bg-white p-5 dark:bg-dark dark:text-white">
         <section className="overflow-hidden text-gray-700 ">
            <Title title={name} />
            <div className="text-center">{description}</div>
            <div className="mx-auto my-4 flex max-w-3xl flex-wrap justify-center gap-2">
               {tags?.map((tag: string, index: number) => {
                  return (
                     <Tag size="w-4 h-4" key={index}>
                        {tag}
                     </Tag>
                  );
               })}
            </div>
            <div className="my-10 flex justify-center gap-2">
               <Button
                  onClick={() => window.open(github)}
                  type="primary"
                  icon={<AiFillCode className="h-6 w-6" />}
                  disabled={github.length > 0 ? false : true}
               >
                  {github.length > 0 ? "See code" : "Private code"}
               </Button>
               {link.length > 0 ? (
                  <Button
                     onClick={() => window.open(link)}
                     type="primary"
                     icon={<VscPreview className="h-6 w-6" />}
                  >
                     See Preview
                  </Button>
               ) : (
                  ""
               )}
            </div>
            <div className="flex items-center justify-center">
               <ul className="max-w-3xl">
                  {points.map((point: string, index: number) => {
                     return (
                        <div key={index} className="flex flex-row">
                           <AiFillCheckCircle className="fill-secondary mr-2 h-5 w-5" />
                           <p key={index} className="w-full">
                              {point}
                           </p>
                        </div>
                     );
                  })}
               </ul>
            </div>
            <hr className="text-primary mx-auto mt-10 w-56 text-sm" />
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
               <div className="mb-4 text-center">
                  {images.length > 1 ? (
                     <Button
                        type="primary"
                        icon={
                           collapsed ? (
                              <IoIosArrowDropdownCircle className="h-6 w-6" />
                           ) : (
                              <IoIosArrowDropupCircle className="h-6 w-6" />
                           )
                        }
                        onClick={handleCollapse}
                     >
                        See images
                     </Button>
                  ) : (
                     ""
                  )}
               </div>
               <div
                  className={`${
                     collapsed ? "collapse hidden" : ""
                  } overflow-hidden p-5`}
                  id="collapseExample"
               >
                  <div className="-m-1 flex flex-wrap md:-m-2">
                     {images.map((image: ImageI, index: number) => {
                        return (
                           <div
                              key={index}
                              className="flex w-full flex-wrap md:w-1/2 lg:w-1/4"
                           >
                              <div className="animate__animated animate__backInDown w-full p-1 md:p-2">
                                 <img
                                    alt="gallery"
                                    onClick={() =>
                                       openLightboxOnSlide(index + 1)
                                    }
                                    className="block h-full w-full cursor-pointer rounded-lg object-cover object-center opacity-90 hover:opacity-100"
                                    src={image.src}
                                 />
                              </div>
                           </div>
                        );
                     })}

                     <LightBox
                        toggler={lightboxController.toggler}
                        sources={imagesSources}
                        slide={lightboxController.slide}
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default ProjectDetail;

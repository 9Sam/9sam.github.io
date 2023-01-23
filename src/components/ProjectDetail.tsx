import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageI } from "../interfaces/Project";
import {
   IoIosArrowDropdownCircle,
   IoIosArrowDropupCircle,
} from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { AiFillCode, AiFillCheckCircle } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import Title from "./shared/Title";
import Button from "./shared/Button";
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
   const {
      name,
      description,
      points,
      tags,
      images,
      link,
      github,
   } = location.state;

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
      <div className="bg-white relative dark:bg-dark h-auto dark:text-white p-5">
         <section className="overflow-hidden text-gray-700 ">
            <Title title={name} />
            <div className="text-center">{description}</div>
            <div className="flex flex-wrap max-w-3xl mx-auto justify-center gap-2 my-4">
               {tags?.map((tag: string, index: number) => {
                  return (
                     <Tag size="w-4 h-4" key={index}>
                        {tag}
                     </Tag>
                  );
               })}
            </div>
            <div className="flex justify-center gap-2 my-10">
               <Button
                  onClick={() => window.open(github)}
                  type="primary"
                  icon={<AiFillCode className="w-6 h-6" />}
                  disabled={github.length > 0 ? false : true}
               >
                  {github.length > 0 ? "See code" : "Private code"}
               </Button>
               {link.length > 0 ? (
                  <Button
                     onClick={() => window.open(link)}
                     type="primary"
                     icon={<VscPreview className="w-6 h-6" />}
                  >
                     See Preview
                  </Button>
               ) : (
                  ""
               )}
            </div>
            <div className="flex justify-center items-center">
               <ul className="max-w-3xl">
                  {points.map((point: string, index: number) => {
                     return (
                        <div key={index} className="flex flex-row">
                           <AiFillCheckCircle className="w-5 h-5 mr-2 fill-secondary" />
                           <p key={index} className="w-full">
                              {point}
                           </p>
                        </div>
                     );
                  })}
               </ul>
            </div>
            <hr className="w-56 mx-auto mt-10 text-sm text-primary" />
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
               <div className="text-center mb-4">
                  {images.length > 1 ? (
                     <Button
                        type="primary"
                        icon={
                           collapsed ? (
                              <IoIosArrowDropdownCircle className="w-6 h-6" />
                           ) : (
                              <IoIosArrowDropupCircle className="w-6 h-6" />
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
                  } p-5 overflow-hidden`}
                  id="collapseExample"
               >
                  <div className="flex flex-wrap -m-1 md:-m-2">
                     {images.map((image: ImageI, index: number) => {
                        return (
                           <div
                              key={index}
                              className="flex flex-wrap w-full md:w-1/2 lg:w-1/4"
                           >
                              <div className="w-full p-1 md:p-2 animate__animated animate__backInDown">
                                 <img
                                    alt="gallery"
                                    onClick={() =>
                                       openLightboxOnSlide(index + 1)
                                    }
                                    className="block opacity-90 hover:opacity-100 cursor-pointer object-cover object-center w-full h-full rounded-lg"
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

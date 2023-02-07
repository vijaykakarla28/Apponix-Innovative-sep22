import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
     <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
        <img src={Logo} alt="logo" />
        <p className="my-5">
             Joining a gym is a great investment in yourself! Let’s take a look at seven great reasons you should join a gym and the fitness benefits you’ll get from it.
             </p>
             <p>© Evogym All Rights Reserved.</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
       <h4 className="font-bold">Links</h4>
       <p className="my-5">GuideLines For The Heavy Work</p>
       <p className="my-5">Steps to be Followed for the Diet</p>
       <p>Duration and Time of the Work Out</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
       <h4 className="font-bold">Contsct Us</h4>
       <p className="my-5">Electronic City , Banglore , Karnataka(State)</p>
       <p>(333)425-6825</p>
      </div>
     </div>
    </footer>
  )
};

export default Footer;
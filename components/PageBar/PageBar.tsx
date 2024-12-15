
interface Props{
  pageName: string;
  name1: string;
  name2: string;
  name3: string;
}

const PageBar = ({pageName , name1 , name2 , name3 }:Props) => {
  return (
    <>
    <div className="bg-[#F6F5FF] h-[286px] flex flex-col gap-y-3 items-start justify-center w-full">
    <div className="w-full md:w-[550px] h-[55%] flex items-center md:items-start justify-center flex-col ml-0 md:ml-[88px] md:ml-[150px]  lg:ml-[250px]">
      <h1 className="text-[#101750] text-[36px] font-josefin font-[700]">{pageName}</h1>
      <div><span>{name1}</span> .<span> {name2} </span>. <span className="text-[#FB2E86] font-lato">{name3}</span></div>
    </div>
    </div>
    </>
  )
}

export default PageBar
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={'/avatar.jpg'}
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
          className="rounded-full border-4 border-[#2f7df4]"
        />
        </>
    )
}
export default HeroImage
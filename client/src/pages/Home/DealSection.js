
const DealSection = () => {

  return (
    <div>
      <section className="md:px-24  bg-blueGray-200 mt-2">
            <div className="flex flex-wrap">
                <div className="pt-6 w-full md:w-1/2 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-[#F3F4FF] w-full mb-8 rounded-lg">
                        <div className="flex flex-warp">
                            <div className="relative flex flex-col">
                                <div className="px-4 mt-2 flex-auto">
                                    <img alt="deal banner name" src={require('../../assets/images/deal2.png')} className="w-full"/>
                                </div>
                            </div>
                            <div className="relative flex flex-col">
                                <div className="px-4 py-5 flex-auto">
                                    <p className="text-md mt-4 text-left font-semibold text-[#2B2B43]">All deserts</p>
                                    <p className="text-[32px] mt-3 text-left font-[900] text-[#4E60FF]">20% OFF</p>
                                    <p className="mt-8 text-left text-[#83859C]">Deserty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:pt-6 w-full md:w-1/2 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-[#FFF3ED] w-full mb-8 rounded-lg">
                        <div className="flex flex-warp">
                            <div className="relative flex flex-col">
                                <div className="px-4 mt-2 flex-auto">
                                    <img alt="deal banner name" src={require('../../assets/images/deal1.png')} className="w-full"/>
                                </div>
                            </div>
                            <div className="relative flex flex-col">
                                <div className="px-4 py-5 flex-auto">
                                    <p className="text-md mt-4 text-left font-semibold text-[#2B2B43]">Big Burgers</p>
                                    <p className="text-[32px] mt-3 text-left font-[900] text-[#FD6D22]">50% OFF</p>
                                    <p className="mt-8 text-left text-[#83859C]">Fooddies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default DealSection

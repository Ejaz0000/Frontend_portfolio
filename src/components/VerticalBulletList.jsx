const VerticalBulletList = ({ title, items, years,poisition }) => {
  return (
    <div className=" max-w-[800px] p-6 border-8 border-[#333841] rounded-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#00ADB5] mb-2">
                {title}
                </h3>

                <div className="bg-[#333841] py-2 px-3 text-[14px] font-bold rounded-xl w-fit">{poisition}</div>
            </div>
            <span className="text-lg font-semibold text-[#00ADB5]">{years}</span>
          </div>

        <div className="pl-4 mt-4">
            <div className="w-[4px] bg-[#00ADB5] h-[20px]" />

        {items?.map((item, index) => (
          <div key={index} className="flex items-center relative pb-5">
            {/* Bullet */}
            <div className="absolute top-[8px] -left-[6px] w-4 h-4 bg-[#222831] border-4 border-[#00ADB5] rounded-full z-10" />

            {/* Horizontal line */}
            <div className="absolute top-[13px] -left-[0px] w-10 h-[2px] bg-[#00ADB5]" />

            {/* Vertical line */}
            {
              index !== items?.length - 1 ? (
                <div className="w-[4px] bg-[#00ADB5] absolute left-0 top-0 bottom-[-8px]" />
              ) : null
            }

            {/* Text */}
            <p className="text-base ml-14">{item}</p>
          </div>
        ))}
        </div>
      </div>
  );
};

export default VerticalBulletList;

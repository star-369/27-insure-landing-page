import iconSnappyProcess from "../assets/images/icon-snappy-process.svg";
import iconAffordablePrices from "../assets/images/icon-affordable-prices.svg";
import iconPeopleFirst from "../assets/images/icon-people-first.svg";

export default function AdvantageSection() {
  return (
    <section className="xl:pt-52 text-dark-violet pt-[7rem]">
      <h2 className="xl:my-12 before:content-['_'] mb-16 text-very-dark-violet text-center xl:text-left text-[2.75rem] before:block before:w-[150px] before:h-[1px] before:bg-grayish-blue before:mb-8 xl:text-[5rem] before:mx-auto xl:before:mx-0 font-dm-serif-display">
        We’re different
      </h2>
      <div className="grid gap-16 px-6 leading-7 text-center xl:px-0 xl:text-left xl:grid-cols-3">
        <div>
          <img src={iconSnappyProcess} alt="" className="mx-auto xl:mx-0" />
          <h3 className="my-8 text-[2rem] font-dm-serif-display font-bold">
            Snappy Process
          </h3>
          <p className="text-dark-grayish-violet tracking-[0.1px]">
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div>
          <img src={iconAffordablePrices} alt="" className="mx-auto xl:mx-0" />
          <h3 className="my-8 text-[2rem] font-dm-serif-display font-bold">
            Affordable Prices
          </h3>
          <p className="text-dark-grayish-violet tracking-[0.1px]">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div>
          <img src={iconPeopleFirst} alt="" className="mx-auto xl:mx-0" />
          <h3 className="my-8 text-[2rem] font-dm-serif-display font-bold">
            People First
          </h3>
          <p className="text-dark-grayish-violet tracking-[0.1px]">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
    </section>
  );
}

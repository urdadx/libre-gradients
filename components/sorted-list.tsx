import { useRouter } from "next/router";
import {
  whiteGradients,
  redGradients,
  blueGradients,
  yellowGradients,
  greenGradients,
  blackGradients,
} from "@/lib/helpers";
import Link from "next/link";
import { GradientCard } from "./gradient-card";

const SortedList = () => {
  const router = useRouter();
  const categoryName = router.query.category;

  return (
    <>
      <div className="px-8 pt-1 pb-3 w-full gap-x-10 gap-y-6 flex items-center justify-center flex-wrap">
        {categoryName === "red"
          ? redGradients.map((gradient) => (
              <GradientCard gradient={gradient} name={gradient.name} />
            ))
          : categoryName === "green"
          ? greenGradients.map((gradient) => (
              <GradientCard gradient={gradient} name={gradient.name} />
            ))
          : categoryName === "blue"
          ? blueGradients.map((gradient) => (
              <GradientCard gradient={gradient} name={gradient.name} />
            ))
          : categoryName === "white"
          ? whiteGradients.map((gradient) => (
              <GradientCard gradient={gradient} name={gradient.name} />
            ))
          : categoryName === "yellow"
          ? yellowGradients.map((gradient) => (
              <GradientCard gradient={gradient} name={gradient.name} />
            ))
          : blackGradients.map((gradient) => (
              <GradientCard gradient={gradient} name={gradient.name} />
            ))}{" "}
      </div>
    </>
  );
};

export default SortedList;

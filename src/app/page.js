import Banner from "@/components/Banner";
import FeaturedTasks from "@/components/FeaturedTasks";
import TopFreelancers from "@/components/TopFreelancers";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <FeaturedTasks></FeaturedTasks>
     <TopFreelancers></TopFreelancers>
    </div>
  );
}

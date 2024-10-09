"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";

import Quote from "./Quote";
import { Avatar } from "@nextui-org/avatar";

const Page = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap justify-around">
        <Card className="w-11/12 lg:w-4/12 md:w-5/12 my-2">
          {/* <CardHeader>RugVedSoft</CardHeader> */}
          <CardBody>
            <div className="min-w-80 min-h-80 relative">
              <Image
                fill
                alt="logo"
                src="/images/rugVedSoft.png"
                className="rounded-xl max-w-80 mx-auto"
              />
            </div>
          </CardBody>
          <CardFooter>
            <Quote />
          </CardFooter>
        </Card>
        <Card className="w-11/12 lg:w-6/12 md:w-5/12 my-2">
          <CardHeader>
            <h1 className="mx-auto text-xl font-semibold">More About Us</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="lg:text-lg md:px-2">
              Co-Founded in the year 2018 by Ranjan & Srinivas, two committed
              software professionals with over 20 years of experience in the IT
              industry. The firm consists of a dedicated team of developers with
              expertise in developing a plethora of applications including
              mobile applications.
            </p>
            <br />
            <br />
            <p className="lg:text-lg md:px-2">
              We handle end-to-end software projects from the initial stages all
              the way upto handover. Our project managers will help your team
              get upto speed whenever your team needs any sort of KT and we will
              even help you to setup DevOps as well.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="w-full">
        <Card className="w-full my-2">
          <CardHeader>
            <h1 className="mx-auto text-xl font-semibold">Meet The Team</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="w-full md:w-2/6 bg-red-400">
              <Avatar
                isBordered
                className="w-20 h-20 mx-auto"
                color="secondary"
                src="/images/sailendra.jpg"
              />
              <h2 className="w-full text-center font-semibold text-xl">Dr. Sailendra</h2>
            </div>
            <p className="lg:text-lg md:px-2">
              Co-Founded in the year 2018 by Ranjan & Srinivas, two committed
              software professionals with over 20 years of experience in the IT
              industry. The firm consists of a dedicated team of developers with
              expertise in developing a plethora of applications including
              mobile applications.
            </p>
            <br />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Page;

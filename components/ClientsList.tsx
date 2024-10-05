"use client";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { title } from "./primitives";

const ClientsList = () => {
  return (
    <div className="flex justify-around p-2 w-full flex-wrap">
      <h1 className={`${title({ color: "pink", size: "sm" })} pb-4`}>
        Be a part of our growing list of satisfied clients
      </h1>
      <Divider className="" />
      <Card className="py-2 my-2 w-96">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">Location</small>
          <p className="text-tiny uppercase font-bold">Secunderabad</p>
          <h4 className="font-bold text-xl text-center mt-2 mx-auto">
            Pfeiffer Vaccum India Pvt. Ltd.
          </h4>
        </CardHeader>
        <CardBody className="flex justify-center items-center">
          <Image
            alt="Card background"
            className="rounded-xl p-2"
            src="/images/pfeiffer.png"
            width={300}
            height={200}
          />
        </CardBody>
        <CardFooter className="flex justify-center">
          <Link
            isExternal
            showAnchorIcon
            href="https://www.pfeiffer-vacuum.com/global/en"
          >
            Visit Website
          </Link>
        </CardFooter>
      </Card>
      <Card className="py-2 my-2 w-96">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">Work Done</small>
          <p className="text-tiny uppercase font-bold">Front-End</p>
          <h4 className="font-bold text-xl text-center mt-2">
            Renuka Advanced Systems Pvt. Ltd.
          </h4>
        </CardHeader>
        <CardBody className="flex justify-center items-center">
          <Image
            alt="Card background"
            className="rounded-xl p-2"
            src="/images/renuka.png"
            width={300}
            height={200}
          />
        </CardBody>
        <CardFooter className="flex justify-center">
          <Link isExternal showAnchorIcon href="https://renukasystems.in/">
            Visit Website
          </Link>
        </CardFooter>
      </Card>{" "}
      <Card className="py-2 my-2 w-96">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">Work Done</small>
          <p className="text-tiny uppercase font-bold">Admin Dashboard</p>
          <h4 className="font-bold text-xl text-center mt-2">
            Stanley College of Engineering & Technology for Women
          </h4>
        </CardHeader>
        <CardBody className="flex justify-center items-center">
          <Image
            alt="Card background"
            className="rounded-xl p-2"
            src="/images/stanley.png"
            width={300}
            height={200}
          />
        </CardBody>
        <CardFooter className="flex justify-center">
          <Link isExternal showAnchorIcon href="https://www.stanley.edu.in/">
            Visit Website
          </Link>
        </CardFooter>
      </Card>
      {/* <Card className="py-2 my-2 w-96">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">Work Done</small>
          <p className="text-tiny uppercase font-bold">Back-End</p>
          <h4 className="font-bold text-xl text-center mt-2 mx-auto">
            D-Logix Technologies
          </h4>
        </CardHeader>
        <CardBody className="flex justify-center items-center">
          <Image
            alt="Card background"
            className="rounded-xl p-2"
            src="/images/d-logix.png"
            width={300}
            height={200}
          />
        </CardBody>
        <CardFooter className="flex justify-center">
          <Link isExternal showAnchorIcon href="https://www.d-logix.com/">
            Visit Website
          </Link>
        </CardFooter>
      </Card> */}
    </div>
  );
};

export default ClientsList;

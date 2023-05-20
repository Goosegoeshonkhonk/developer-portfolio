import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { skills, infor } from "@/Data/Data";
import Skills from "@/components/Skills";
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
export default function about() {
  const targetId = 3; // Specify the desired ID value
  const person = infor.find((item) => item.id === targetId);

  return (
    <>
      <Head>
        <title>Bảo Hiểm Việt | {person && person.name}</title>
      </Head>
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
          <Image
            src={"/bao.jpeg"}
            width={300}
            height={400}
            alt={"about image"}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              - Bảo Hiểm Việt
            </div>
            <div className="font-semibold text-5xl mt-8 leading-2rem text-White uppercase px-4 ">
                {person && <div>{person.name}</div>}
            </div>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              "{person && <span>{person.des}</span>}"
            </p>
            <div className="flex flex-col">
              <Link
                href={`tel:${person && person.phoneNumber}`}
                className="text-Orange font-semibold text-xl hover:underline"
              >
                <span className="flex gap-8 mt-8"> <i className="text-2xl">  <AiOutlinePhone /> </i> {person && <span>{person.phoneNumber}</span>}</span>
              </Link>

              <Link
                href={`mailto:${person && person.email}`}
                className="text-Orange font-semibold text-b hover:underline"
              >
                <span className="flex gap-8 mt-8"> <i className="text-2xl">  <AiOutlineMail /> </i> {person && <span>{person.email}</span>}</span>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}

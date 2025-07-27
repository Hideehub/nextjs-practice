import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
    <div className="flex flex-row items-center p-6 gap-4 justify-around min-h-screen" style={{ backgroundImage: "/assets/Picture.jpeg"}}>

    <Image src="/assets/image.png" alt="My Picture" width={400} height={400} className="rounded-2xl shadow-2xl ml-5"/>

      <Card className="max-w-2xl w-full shadow-xl">
        <CardContent className="p-6 text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
          <p className="text-base leading-relaxed text-gray-700">
            I'm a passionate software developer with a love for building clean, user-friendly interfaces. 
            I started this journey out of curiosity and quickly fell in love with the process of turning ideas into working applications.
          </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Currently, I'm exploring the world of <span className="font-semibold text-[tomato]">Next.js</span> and sharpening my skills in creating responsive and interactive web experiences. 
              I enjoy learning by building, and each project helps me grow a little more.
            </p>

          <Link href= "/contact">
            <Button variant="default" className="mt-4 bg-[tomato] hover:bg-[tomato] hover:text-black">
              Contact Me
            </Button>
          </Link>
          
        </CardContent>
      </Card>
    </div>
    </>
  );
}

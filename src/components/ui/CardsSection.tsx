import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { Label } from "./label";

function CardsSection() {
  return (
    <>
      <div className=" mt-20 flex flex-column justify-between items-start">
        <h4 className="text-3xl text-emerald-900 mx-auto font-medium">
          What our users say
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 px-8">
        <Card className="p-8 w-11/12 shadow-card">
          <CardContent className="text-3xl text-green-900">
            Flowrise has made burnout a thing of the past. It`s a game-changer
            for work-life balance. It`s not just a productivity app—it`s a
            lifestyle enhancer.
          </CardContent>
          <CardFooter>
            <div>
              <div className="flex items-center space-x-2 gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://images.prismic.io/flowrise-prismic/f764b8ac-087e-4a35-af36-472e16f3e012_Ayesha+W.png?auto=compress%2Cformat&ar=1%3A1&fit=crop&w=64"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-start items-start">
                  {" "}
                  <Label htmlFor="terms" className="text-lg">
                    Ayesha W
                  </Label>
                  <p>Digital marketing specialist</p>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="p-8 w-11/12">
          <CardContent className="text-3xl text-green-900">
            Before Flowrise, I was always running against the clock. Now, I work
            in harmony with my natural rhythms. My productivity and wellbeing
            have never been better!
          </CardContent>
          <CardFooter>
            <div>
              <div className="flex items-center space-x-2 gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://images.prismic.io/flowrise-prismic/5b9934bc-fb43-4289-a196-286eee5d3305_Mark+R.png?auto=compress%2Cformat&ar=1%3A1&fit=crop&w=128"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-start items-start">
                  {" "}
                  <Label htmlFor="terms" className="text-lg">
                    Mark R
                  </Label>
                  <p>Nonprofit founder</p>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="p-8 w-11/12">
          <CardContent className="text-3xl text-green-900">
            Flowrise has revolutionized my workday! It adapts to my energy and
            helps me optimize my daily tasks. I`m more productive and happier
            than ever!
          </CardContent>
          <CardFooter>
            <div>
              <div className="flex items-center space-x-2 gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://images.prismic.io/flowrise-prismic/2d477b17-e0a7-445b-87f7-9f28c848c373_Emily+W.png?auto=compress%2Cformat&ar=1%3A1&fit=crop&w=128"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-start items-start">
                  {" "}
                  <Label htmlFor="terms" className="text-lg">
                    Emily W
                  </Label>
                  <p>UX Designer</p>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default CardsSection;

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
        <Card className="py-4">
          <CardContent className="text-3xl text-green-900">
            Flowrise has made burnout a thing of the past. It`s a game-changer
            for work-life balance. It`s not just a productivity app—it`s a
            lifestyle enhancer.
          </CardContent>
          <CardFooter>
            <div>
              <div className="flex items-center space-x-2">
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
        <Card>
          <CardContent className="text-3xl text-green-900">
            Flowrise has made burnout a thing of the past. It`s a game-changer
            for work-life balance. It`s not just a productivity app—it`s a
            lifestyle enhancer.
          </CardContent>
          <CardFooter>
            <div>
              <div className="flex items-center space-x-2">
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
        <Card>
          <CardContent className="text-3xl text-green-900">
            Flowrise has made burnout a thing of the past. It`s a game-changer
            for work-life balance. It`s not just a productivity app—it`s a
            lifestyle enhancer.
          </CardContent>
          <CardFooter>
            <div>
              <div className="flex items-center space-x-2">
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
      </div>
    </>
  );
}

export default CardsSection;

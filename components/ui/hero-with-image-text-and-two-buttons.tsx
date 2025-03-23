import { Badge } from "@/components/ui/badge"
import Image from "next/image"

function Hero() {
  return (
    <div className="w-full  py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                欢迎来到我的个人主页
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                这是我的个人主页，包含了我的个人简介、教育经历、曾获荣誉和联系方式。
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <Image
              src="https://img2.baidu.com/it/u=3964208634,2349934658&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067"
              alt="背景图片"
              width={768}
              height={768}
              className="object-cover rounded-md w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }

import { User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>简介</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                我的介绍！
              </h2>
              {/* <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Managing a small business today is already tough.
              </p> */}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">个人简介</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  我叫杨圣童，本科和研究生均就读于华中农业大学。我热爱游戏，并在多个游戏中取得过不错的成绩。
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">教育经历</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  华中农业大学 本科
                  <br />
                  华中农业大学 研究生
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">曾获荣誉</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  王者荣耀百星王者
                  <br />
                  永劫无间无间修罗
                  <br />
                  三国杀枭雄
                  <br />
                  无畏契约超凡
                  <br />
                  英雄联盟钻石
                  <br />
                  公主连结双竞技场第一.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">联系方式</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  邮箱：871258130@qq.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }

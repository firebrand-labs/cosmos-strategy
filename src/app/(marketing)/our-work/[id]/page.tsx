import WorkFilter from "@/app/_components/work-filter"
import { workTable } from "@/server/db/schema"
import { db } from "@/server/db"

interface pageProps {
  params: { workId: string }
}

export const revalidate = 0 // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(workTable)
  return data
}

const page = async ({ params }: pageProps) => {
  const data = await getData()
  // console.log(data)
  return (
    <>
      <section className="w-screen  items-center justify-center bg-background py-10 md:pt-64 md:pb-16 flex ">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="font-heading text-secondary_heading text-secondary-foreground leading-tight md:leading-[55px]">
                Questions we have loved something
              </h2>
            </div>
            <div className="hidden items-center justify-center"></div>
          </div>
          <div className="hidden items-center justify-between">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <span className="uppercase text-foreground font-paragraph bg-transparent border border-foreground px-6 py-3">
                Category 1
              </span>
              <span className="uppercase text-foreground font-paragraph bg-transparent">
                01/02/2024
              </span>
            </div>
          </div>
        </div>
      </section>

      <WorkFilter params={params} work={data} />
    </>
  )
}

export default page

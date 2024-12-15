import { TableDemo } from "@/components/DataList";
import { ModeToggle } from "@/components/ModeToggle";

//vue -> 尤雨溪
//react -> next是react的框架
//大神 -> 自己做框架
//spa -> 单页面应用

export default function Home() {
  return (
    <>
      <nav className="flex justify-between p-4 ">
        <p className="leading-7 [&:not(:first-child)]:mt-6">InvoiceList</p>
        <ModeToggle />
      </nav>
      <TableDemo />
      <footer className="flex justify-center items-center p-4">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          我是footer
        </code>
      </footer>
    </>
  );
}

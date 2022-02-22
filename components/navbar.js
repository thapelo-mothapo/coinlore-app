import Link from "next/link"

export default function Nav(){
  return(
    <nav>
      <div className="logo">
        <h1>WeCoin</h1>
      </div>
      <Link href="/"><a>coins</a></Link>
      <Link href="/hidden-coins"><a>hidden</a></Link>

    </nav>
  )
}




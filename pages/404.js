import Link from "next/link";
export default function(){



    return (
        <div className="not-found">
            <h1>Sorry mate...</h1>
            <h2>That page cannot be found :(</h2>
            <p>Go to{' '} 
                <Link href='/'><a>Homepage</a></Link>
 
            </p>


        </div>
    )
}
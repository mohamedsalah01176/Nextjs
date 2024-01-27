import Link from "next/link";

export const metadata={
  title:"post page"
} 

export default async function PostPage() {
  
  const res= await fetch("https://jsonplaceholder.typicode.com/posts",{
    next:{
      revalidate:120
    }
  })
  const data=await res.json()
  return (
    <div>
      <h1>Post Page</h1>
      {data.map((post,index)=>{
        return(
          <Link key={index} href={`/post/${post.id}`} style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",textDecoration:"none",color:"white"}}>
            <div className="card" style={{width:"70%",background:"#000",margin:"10px"}}>
              <div>{post.title}</div>
              <div>{post.body}</div>
            </div>
          </Link>
        )
      })}
    </div>

  );
}

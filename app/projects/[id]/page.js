// 1. Function ko "async" banayein
export default async function ProjectDetail({ params }) {
  
    // 2. Params ko "await" karein (Naye Next.js ka rule hai)
    const { id } = await params;
  
    return (
      <div className="p-20">
        <h1 className="text-4xl font-bold">Project Detail Page</h1>
        <div className="mt-10 p-10 bg-blue-100 rounded-lg">
          <h2 className="text-2xl">
            Aap abhi Project Number: 
            <span className="font-black text-blue-600 ml-2">{id}</span> 
            dekh rahe hain.
          </h2>
          <p className="mt-4">InshaAllah yahan hum Strapi se project ka sara data lekar ayenge!</p>
        </div>
      </div>
    );
  }
export default function ProjectDetail({ params }) {
    // params.id mein wo ID ayegi jo URL mein hogi (e.g., /projects/1)
    return (
      <div className="p-20">
        <h1 className="text-4xl font-bold">Project Detail Page</h1>
        <div className="mt-10 p-10 bg-blue-100 rounded-lg">
          <h2 className="text-2xl">Aap abhi Project Number: <span className="font-black text-blue-600">{params.id}</span> dekh rahe hain.</h2>
          <p className="mt-4">InshaAllah yahan hum Strapi se project ka sara data lekar ayenge!</p>
        </div>
      </div>
    );
  }
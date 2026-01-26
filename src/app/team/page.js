import Image from 'next/image'
import Link from 'next/link'

// import '../styles/card.css'

export default async function TeamPage() {
  const res = await fetch('/data/team.json')
  const lawyers = await res.json()

  return (
    <main className='d-flex flex-column align-items-center m-2 m-md-4'>
      <div className='container d-flex flex-column text-white my-5 mx-1 mx-sm-3 px-lg-5 gap-5'>
        <h1 className='font-fam'>Our Team</h1>

        <div className='row g-3 justify-content-center justify-content-lg-start px-5 px-sm-0'>
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link href={`/team/${lawyer.id}`} className="text-decoration-none">
                <div className="card w-100 border-0 position-relative overflow-hidden card-container">
                  <Image
                    src={lawyer.img}
                    alt={lawyer.name}
                    width={400}
                    height={450}
                    className="card-img-top card-img"
                  />
                  <div className="card-body position-absolute bottom-0 w-100 text-white">
                    <h5>{lawyer.name}</h5>
                    <p>{lawyer.role}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

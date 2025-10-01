import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const PhoneIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 19.8a19.6 19.6 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72l.62 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.16a2 2 0 0 1 2.11-.45l2.5.62A2 2 0 0 1 22 16.92Z"/>
  </svg>
)
const MsgIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
  </svg>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>A&H Towing & Recovery</title>
        <meta name="description" content="24/7 Fast & Reliable Towing — Call or SMS our dispatcher now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HERO with TikTok */}
      <section className="hero">
        <div className="container grid grid-2" style={{alignItems:'center'}}>
          <div>
            <div className="badge">24/7 Emergency Service</div>
            <h1 className="h1">A&amp;H Towing &amp; Recovery</h1>
            <p className="p">Fast, reliable towing and roadside assistance. Direct line to our dispatcher—no waiting.</p>
            <div className="flex">
              <a className="btn btn--call" href="tel:+14328424578"><PhoneIcon/> Call (432)842-4578</a>
              <a className="btn btn--sms" href="sms:+14328424578?&body=Hi%20A%26H%20Towing%2C%20I%20need%20assistance%20at%20[location]%20with%20[vehicle]%20-%20please%20call%20me%20back."><MsgIcon/> Request Dispatch</a>
            </div>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.tiktok.com/embed/7395798441983124810"
              allow="autoplay; encrypted-media"
              sandbox="allow-scripts allow-same-origin allow-popups"
              title="Hero TikTok"
            />
          </div>
        </div>
      </section>

      {/* Featured Carousel (simple auto-rotate) */}
      <section className="section">
        <div className="container grid grid-2" style={{alignItems:'center'}}>
          <div className="aspect-video">
            <FeaturedCarousel />
          </div>
          <div>
            <h2 className="h2">Featured Recoveries</h2>
            <p className="p">Real jobs, real results. See our crews in action—fast response, careful handling, professional service.</p>
            <div className="flex">
              <a className="btn btn--call" href="tel:+14328424578"><PhoneIcon/> Call (432)842-4578</a>
              <a className="btn btn--sms" href="sms:+14328424578?&body=Hi%20A%26H%20Towing%2C%20I%20need%20assistance%20at%20[location]%20with%20[vehicle]%20-%20please%20call%20me%20back."><MsgIcon/> Request Dispatch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <h2 className="h2" style={{textAlign:'center'}}>Our Services</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
            {["Light Duty Towing","Heavy Duty Towing","Flatbed Hauling","Lockouts","Jumpstarts","Winching"].map((s)=> (
              <div key={s} className="card center">
                <h3 style={{margin:'0 0 8px'}}>{s}</h3>
                <p className="p">Quick, safe, and professional assistance for {s.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gray">
        <div className="container">
          <h2 className="h2" style={{textAlign:'center'}}>Watch Us In Action</h2>
          <div className="gallery">
            {["7395798441983124810","7392136501530819882","7391125120420336938","7389438813140194602","7387827456592250123","7385110768085716267"].map((id,i)=>(
              <div className="aspect-video" key={i}>
                <iframe
                  src={`https://www.tiktok.com/embed/${id}`}
                  allow="autoplay; encrypted-media"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  title={`TikTok ${i+1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <h2 className="h2" style={{textAlign:'center'}}>What Customers Say</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
            {[1,2,3].map(n => (
              <div className="card" key={n}>
                <div className="review-stars">★★★★★</div>
                <p style={{margin:'8px 0'}}>“Fast response, friendly staff, and fair pricing. Highly recommend!”</p>
                <p className="p">– Happy Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="h2">Contact &amp; Dispatch</h2>
          <p className="p">Call us anytime or request immediate assistance below.</p>
          <div className="flex" style={{justifyContent:'center'}}>
            <a className="btn btn--call" href="tel:+14328424578"><PhoneIcon/> (432)842-4578</a>
            <a className="btn btn--sms" href="sms:+14328424578?&body=Hi%20A%26H%20Towing%2C%20I%20need%20assistance%20at%20[location]%20with%20[vehicle]%20-%20please%20call%20me%20back."><MsgIcon/> Live Chat</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} A&H Towing & Recovery – All Rights Reserved
      </footer>
    </>
  )
}

function FeaturedCarousel(){
  const vids = [
    "https://www.tiktok.com/embed/7395798441983124810",
    "https://www.tiktok.com/embed/7392136501530819882",
    "https://www.tiktok.com/embed/7391125120420336938",
    "https://www.tiktok.com/embed/7389438813140194602"
  ]
  const [i,setI] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setI(v => (v+1)%vids.length), 8000)
    return ()=> clearInterval(id)
  },[])
  return (
    <iframe
      key={i}
      src={vids[i]}
      allow="autoplay; encrypted-media"
      sandbox="allow-scripts allow-same-origin allow-popups"
      title={`Featured TikTok ${i+1}`}
      style={{width:'100%', height:'100%'}}
    />
  )
}

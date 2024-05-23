import React from 'react'

const Songlist = () => {
  return (
    <div><h1 style={{textAlign:'center', fontFamily:'arial',color:'white'}}>Some of my songs on repeat recently:</h1>
        <div className="song_list_wrapper">
        <iframe src="https://open.spotify.com/embed/track/39HrUxcvKF3jtLz7fUDWXc?utm_source=generator&theme=0" width="40%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/track/2qSkIjg1o9h3YT9RAgYN75?utm_source=generator" width="40%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe  src="https://open.spotify.com/embed/track/2LlOeW5rVcvl3QcPNPcDus?utm_source=generator" width="40%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/track/366hct4ncFRf5TOvEjMVuf?utm_source=generator" width="40%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>
  )
}

export default Songlist
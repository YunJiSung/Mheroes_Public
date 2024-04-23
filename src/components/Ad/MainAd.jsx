import React from 'react'

const MainAd = ({position}) => {
  return (
    <>
     {position === "left" ? <iframe src="https://ads-partners.coupang.com/widgets.html?id=722572&template=carousel&trackingCode=AF6512908&subId=&width=635&height=317&tsource=" width="635" height="317" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe> : <iframe src="https://ads-partners.coupang.com/widgets.html?id=773036&template=carousel&trackingCode=AF6512908&subId=&width=635&height=317&tsource=" width="635" height="317" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>}
    </>
  )
}

export default MainAd
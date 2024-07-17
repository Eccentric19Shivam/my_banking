import HeaderBox from '@/components/HeaderBox'
import ToatlBalanceBox from '@/components/ToatlBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstname: 'MyName'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"  
            title="Welcome"
            user={loggedIn?.firstname || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <ToatlBalanceBox 
            accounts={ [] }
            totalBanks={ 1 }
            totalCurrentBalance={ 1250.35 }
          
          />
        </header>
      </div>
    </section>
  )
}

export default Home
import HeaderBox from '@/components/HeaderBox'
import RightSiderbar from '@/components/RightSiderbar'
import ToatlBalanceBox from '@/components/ToatlBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"  
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <ToatlBalanceBox 
            accounts={ [] }
            totalBanks={ 1 }
            totalCurrentBalance={ 1250.35 }
          
          />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSiderbar
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 123.50 }, { currentBalance: 340.56 }]}
      />
    </section>
  )
}

export default Home
import React from 'react'
import { useOnlineStatus } from '../hook/useOnlineStatus';

export default function SaveBtn() {
  const isOnline = useOnlineStatus();
  function handleSaveClick() {
    console.log('✅ Progress saved');
  }
  
  return (
    <div>
      <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
    </div>
  )
}

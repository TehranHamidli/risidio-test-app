

import Text from "@/components/Text"
import React from "react"


const ConnectToWalletPage = () => {
  return (
    <div className="w-full bg-[#E6E9F2]">
      <div className="flex flex-col items-center">
  
        <Text  className="mt-[120px]">
          
          Choose the wallet to connect
        </Text>
        <div className="flex sm:flex-row max-w-sm: flex-col justify-between items-center w-[60%] gap-10 mt-[60px]">
          <div className="h-[174px] w-[200px] bg-gray-50 rounded-[19px]" />
          <div className="h-[174px] w-[200px] bg-gray-50 rounded-[19px]" />
          <div className="h-[174px] w-[200px] bg-gray-50 rounded-[19px]" />
        </div>
      </div>
  </div>
    )
}

export default ConnectToWalletPage
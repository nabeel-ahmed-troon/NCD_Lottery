echo "===========================================";
echo "Running Script for Start Lottery";
echo "===========================================";

# echo "Enter Ticket Limit : ";
# read TICKET_LIMIT 

# echo "Enter Ticket Price in Yocto : "
# read TICKET_PRICE 

# echo "Enter Fungible Token Contract Id : "
# read FT

# echo "Enter Non Fungible Token Contract Id : "
# read NFT 

# near call lottery_project.testnet start_new_lottery '{"ticket_limit": "'"$TICKET_LIMIT"'","ticket_price":"'"$TICKET_PRICE"'","approved_ft":"'"$FT"'","nft_contract":"'"$NFT"'"}' --accountId lottery_project.testnet
near call lottery_project.testnet start_new_lottery '{"ticket_limit": 2,"ticket_price":"1000000000000000000000000","approved_ft":"lottery_ft.testnet","nft_contract":"lottery_nft.testnet"}' --accountId lottery_project.testnet
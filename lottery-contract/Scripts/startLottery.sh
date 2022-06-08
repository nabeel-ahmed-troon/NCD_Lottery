echo "===========================================";
echo "Running Script for Start Lottery";
echo "===========================================";

start_new_lottery(&mut self,ticket_limit:u64,ticket_price:U128,approved_ft:AccountId,nft_contract:AccountId)

echo "Enter Ticket Limit : ";
read TICKET_LIMIT 

echo "Enter Ticket Price in Yocto : "
read TICKET_PRICE 

echo "Enter Fungible Token Contract Id : "
read FT

echo "Enter Non Fungible Token Contract Id : "
read NFT 

near call ncd_lottery1.testnet start_new_lottery '{"ticket_limit": '"'TICKET_LIMIT'"',"ticket_price":'"'TICKET_PRICE'"',"approved_ft":'"'FT'"',"nft_contract":'"'NFT'"'}' --accountId ncd_lottery1.testnet
echo "Running Script to Get Reward";
echo "===========================================";

echo "Enter Your Account Id : "
read ID

echo "Enter NFT Token Id : "
read TID
near call lottery_project.testnet claim_reward '{"_token_id":"'"$TID"'" }'  --accountId $ID 